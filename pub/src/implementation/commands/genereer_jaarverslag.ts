import * as _pc from 'pareto-core-command'
import * as _pdev from 'pareto-core-dev'
import * as _pi from 'pareto-core-interface'
import * as _pinternals from 'pareto-core-internals'
import * as _pr from 'pareto-core-refiner'
import * as _pt from 'pareto-core-transformer'

import * as signatures from "../../interface/signatures"

//data types
import * as d_main from "exupery-resources/dist/interface/to_be_generated/temp_main"
import * as d_genereer_jaarverslag from "../deserializers/primitives/text/genereer_jaarverslag"
import * as d_path from "exupery-resources/dist/interface/generated/pareto/schemas/path/data_types/target"
import * as d_read_file from "exupery-resources/dist/interface/generated/pareto/schemas/read_file/data_types/target"
import * as d_write_file from "exupery-resources/dist/interface/generated/pareto/schemas/write_file/data_types/target"

//dependencies
import { $ as ds_genereer_jaarverslag } from "../deserializers/primitives/text/genereer_jaarverslag"
import * as ds_path from "exupery-resources/dist/implementation/deserializers/schemas/node_path"
import * as t_read_file from "exupery-resources/dist/implementation/transformers/schemas/read_file/fountain_pen"
import * as s_fp from "pareto-fountain-pen/dist/implementation/serializers/schemas/block"

type Path_Error =
    | ['missing', null]
    | ['not valid', null]

type My_Error =
    | ['in path', Path_Error]
    | ['out path', Path_Error]
    | ['too many arguments', null]
    | ['fout tijdens lezen data', d_read_file.Error]
    | ['fout tijdens genereren jaarverslag', d_genereer_jaarverslag.Error]
    | ['fout bij schrijven jaarverslag', d_write_file.Error]

type Parameters = {
    'in': d_path.Node_Path,
    'out': d_path.Node_Path,
}


type Production<Iterartor_Element, Result, Error> = (
    iterator: _pi.Iterator<Iterartor_Element>,
    abort: _pi.Abort<Error>
) => Result


const path: Production<string, d_path.Node_Path, Path_Error> = (iterator, abort) => {
    const current = iterator['get current']()

    return ds_path.Node_Path(
        current.transform(
            ($) => {
                iterator.consume()
                return $
            },
            () => abort(['missing', null])
        ),
        {
            'pedantic': true,
        },
        ($) => abort(['not valid', null]),
    )
}

const r_parse_arguments: _pi.Refiner<Parameters, My_Error, d_main.Parameters> = ($, abort) => {
    const iter = _pr.create_iterator($.arguments)

    const current = iter['get current']()

    const in_path = path(iter, ($) => abort(['in path', $]))
    const out_path = path(iter, ($) => abort(['out path', $]))
    iter['get current']().transform(
        ($) => abort(['too many arguments', null]),
        () => { }
    )

    return {
        'in': in_path,
        'out': out_path,
    }
}

namespace s_error {

    export const Path_Error = ($: Path_Error): string => {
        return _pt.cc($, ($) => {
            switch ($[0]) {
                case 'missing': return _pt.ss($, ($) => `missing`)
                case 'not valid': return _pt.ss($, ($) => `not valid`)
                default: return _pt.au($[0])
            }
        })
    }

    export const GJ_Error = ($: d_genereer_jaarverslag.Error): string => {
        return _pt.cc($, ($): string => {
            switch ($[0]) {
                case 'primitive deserialization': return _pt.ss($, ($) => `primitive deserialization: ` + $)
                case 'parse error': return _pt.ss($, ($) => `parse error`)
                default: return _pt.au($[0])
            }
        })
    }
    export const My_Error = ($: My_Error): string => {
        return _pt.cc($, ($): string => {
            switch ($[0]) {
                case 'too many arguments': return _pt.ss($, ($) => `too many arguments`)
                case 'fout tijdens lezen data': return _pt.ss($, ($) => `fout tijdens lezen data: ` + s_fp.Block_Part(t_read_file.Error($), { 'indentation': `    `, 'newline': '\n' }))
                case 'fout tijdens genereren jaarverslag': return _pt.ss($, ($) => `fout tijdens genereren p: ` + s_error.GJ_Error($))
                case 'fout bij schrijven jaarverslag': return _pt.ss($, ($) => `fout bij schrijven jaarverslag`)
                case 'in path': return _pt.ss($, ($) => `in path: ` + s_error.Path_Error($))
                case 'out path': return _pt.ss($, ($) => `out path: ` + s_error.Path_Error($))
                default: return _pt.au($[0])
            }
        })
    }
}

export const $$: signatures.commands.genereer_jaarverslag = _pc.create_command_procedure(
    ($p, $cr, $qr) => [
        _pc.create_error_handling_context<d_main.Error, My_Error>(
            [

                _pc.refine_without_error_transformation(
                    (abort) => r_parse_arguments($p, abort),
                    ($r) => [

                        _pc.query_without_error_transformation(
                            $qr['read file'](
                                $r.in,
                                ($): My_Error => {

                                    // _pdev.log_debug_message(`fout tijdens lezen data: ` + s_fp.Block_Part(t_read_file.Error($), { 'indentation': `    `, 'newline': '\n' }), () => { })
                                    return ['fout tijdens lezen data', $]
                                }
                            ).refine_without_error_transformation(
                                ($, abort) => ds_genereer_jaarverslag(
                                    $,
                                    ($) => abort(['fout tijdens genereren jaarverslag', $])
                                )
                            ).transform_result(($) => {
                                return {
                                    'path': $r.out,
                                    'data': $
                                }
                            }),
                            ($v) => [
                                $cr['write file'].execute(
                                    $v,
                                    ($) => {
                                        // _pdev.log_debug_message(`fout bij schrijven jaarverslag naar ${settings['out']['file']}`, () => { })
                                        return ['fout bij schrijven jaarverslag', $]
                                    },

                                )
                            ]
                        )
                    ]
                ),
            ],
            ($) => $cr['log error'].execute(
                {
                    'lines': _pinternals.list_literal([s_error.My_Error($)])
                },
                ($) => ({
                    'exit code': 2
                })
            ),
            {
                'exit code': 1
            },
        ),
    ]
)


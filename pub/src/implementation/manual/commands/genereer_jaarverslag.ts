import * as _pc from 'pareto-core-command'
import * as _pdev from 'pareto-core-dev'
import * as _pi from 'pareto-core-interface'
import * as _pinternals from 'pareto-core-internals'
import * as _pr from 'pareto-core-refiner'
import * as _pt from 'pareto-core-transformer'

import * as signatures from "../../../interface/signatures"

//data types
import * as d_main from "exupery-resources/dist/interface/to_be_generated/temp_main"
import * as d_genereer_jaarverslag from "../primitives/text/deserializers/genereer_jaarverslag"
import * as d_read_file from "exupery-resources/dist/interface/generated/pareto/schemas/read_file/data_types/target"
import * as d_write_file from "exupery-resources/dist/interface/generated/pareto/schemas/write_file/data_types/target"
import * as d_file_in_file_out from "../../../interface/to_be_generated/file_in_file_out"

//dependencies
import { $ as ds_genereer_jaarverslag } from "../primitives/text/deserializers/genereer_jaarverslag"
import * as t_read_file from "exupery-resources/dist/implementation/transformers/schemas/read_file/fountain_pen"
import * as s_fp from "pareto-fountain-pen/dist/implementation/manual/schemas/block/serializers"
import * as s_file_in_file_out from "../schemas/file_in_file_out/serializers"
import * as s_path from "exupery-resources/dist/implementation/serializers/schemas/path"

import { Parameters } from '../schemas/file_in_file_out/refiners/main'


type My_Error =
    | ['command line arguments', d_file_in_file_out.Error]
    | ['reading file', d_read_file.Error]
    | ['processing', d_genereer_jaarverslag.Error]
    | ['writing file', d_write_file.Error]




namespace s_error {

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
                case 'reading file': return _pt.ss($, ($) => `error reading: ` + s_fp.Block_Part(t_read_file.Error($), { 'indentation': `    `, 'newline': '\n' }))
                case 'processing': return _pt.ss($, ($) => `error processing: ` + s_error.GJ_Error($))
                case 'writing file': return _pt.ss($, ($) => `error writing file`)
                case 'command line arguments': return _pt.ss($, ($) => `command line arguments: ` + s_file_in_file_out.Error($))
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
                    (abort) => Parameters($p, ($) => abort(['command line arguments', $])),
                    ($r) => [

                        _pc.query_without_error_transformation(
                            $qr['read file'](
                                $r.in,
                                ($): My_Error => {
                                    return ['reading file', $]
                                }
                            ).refine_without_error_transformation(
                                ($, abort) => ds_genereer_jaarverslag(
                                    $,
                                    {
                                        'file': s_path.Node_Path($r.in),
                                    },
                                    ($) => abort(['processing', $])
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
                                        return ['writing file', $]
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


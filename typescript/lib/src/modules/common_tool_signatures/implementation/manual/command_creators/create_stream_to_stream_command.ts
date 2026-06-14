import * as p_ from 'pareto-core/dist/command'
import * as p_t from 'pareto-core/dist/assign'
import * as pi from 'pareto-core/dist/interface'

import * as signatures from "../../../interface/commands"

//data types
import * as d_main from "pareto-resources/dist/interface/to_be_generated/temp_main"
import * as d_fp from "pareto-fountain-pen/dist/interface/generated/liana/schemas/prose/data"

//shorthands
import * as sh from "pareto-fountain-pen/dist/shorthands/prose"

type My_Error =
    | ['could not read instream', null]
    | ['deserialization failed', d_fp.Phrase]
    | ['could not write to stdout', null]


export const $$ = (func: pi.Refiner<string, d_fp.Phrase, string>): signatures.procedures.stream_in_to_stream_out => {
    return p_.command_procedure(
        ($d, $s, $q, $c) => [

            p_.handle_error<d_main.Error, My_Error>(
                [
                    p_.query(
                        $q['get instream data'](
                            null,
                            ($): My_Error => ['could not read instream', null],
                        ),
                        ($, abort) => func(
                            $,
                            ($) => abort(['deserialization failed', $]),
                        ),
                        ($v) => [
                            $c['write to stdout'].execute(
                                {
                                    'data': $v,
                                },
                                ($): My_Error => ['could not write to stdout', null],
                            )
                        ]
                    )
                ],
                ($) => [
                    $c['log error'].execute(
                        {
                            'message': sh.pg.sentences([
                                sh.sentence([
                                    p_t.decide.state($, ($): d_fp.Phrase => {
                                        switch ($[0]) {
                                            case 'could not read instream': return p_t.ss($, ($) => sh.ph.literal("could not read instream"))
                                            case 'deserialization failed': return p_t.ss($, ($) => $)
                                            case 'could not write to stdout': return p_t.ss($, ($) => sh.ph.literal("could not write to stdout"))
                                            default: return p_t.au($[0])
                                        }
                                    })
                                ])
                            ]),
                        },
                        ($): d_main.Error => ({
                            'exit code': 2
                        }),
                    )
                ],
                () => ({
                    'exit code': 1,
                })
            ),
        ]
    )
}
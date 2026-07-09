import * as p_ from 'pareto-core/implementation/transformer'
import p_list_build_deprecated from 'pareto-core/implementation/refiner/specials/list_build_deprecated'
import p_text_from_list from 'pareto-core/implementation/transformer/specials/text_from_list'
import p_unreachable_code_path from 'pareto-core/implementation/transformer/specials/unreachable_code_path'

import type * as interface_ from "../../../declarations/transformers/primitives/text.js"

export const fractional_decimal: interface_.fractional_decimal = ($, $p) => {
    const old_imp = p_text_from_list(
        p_list_build_deprecated<number>(
            ($i) => {
                let $v_value = $

                // Handle negative numbers
                if ($v_value < 0) {
                    $i['add item'](45) // '-'
                    $v_value = -$v_value
                }

                // Calculate the divisor for the fractional part (10^fractionalDigits)
                let divisor = 1
                for (let i = 0; i < $p['number of fractional digits']; i++) {
                    divisor *= 10
                }

                // Split into integer and fractional parts
                const integerPart = p_.from.number($v_value).divide(
                    divisor,
                    ['towards zero', null],
                    {
                        divided_by_zero: () => p_unreachable_code_path("the divisor is hardcoded to 10^fractionalDigits")
                    }
                )
                const fractionalPart = $v_value % divisor

                // Generate integer part digits
                const integerDigits = p_list_build_deprecated<number>(
                    ($i) => {
                        let temp = integerPart
                        if (temp === 0) {
                            $i['add item'](0)
                        } else {
                            while (temp > 0) {
                                const digit = temp % 10
                                $i['add item'](digit)
                                temp = p_.from.number(temp).divide(
                                    10,
                                    ['towards zero', null],
                                    {
                                        divided_by_zero: () => p_unreachable_code_path("the divisor is hardcoded to 10")
                                    }
                                )
                            }
                        }
                    })

                // Add integer part (reverse order) with thousand separators
                const digitCount = p_.from.list(integerDigits).amount_of_items()
                const thousandSeparatorCode = p_.from.optional($p['thousand separator character code']).decide(
                    ($) => $,
                    () => null
                )
                for (let j = digitCount - 1; j >= 0; j--) {
                    $i['add item'](48 + p_.from.optional(integerDigits.__deprecated_get_possible_item_at(j)).decide(
                        ($) => $,
                        () => p_unreachable_code_path("index cannot be out of bounds")
                    ))
                    // Add thousand separator after every 3 digits (except at the end)
                    if (j > 0 && j % 3 === 0 && thousandSeparatorCode !== null) {
                        $i['add item'](thousandSeparatorCode)
                    }
                }

                // Add decimal point
                $i['add item']($p['decimal separator character code'])

                // Generate fractional part digits
                const fractionalDigits_list = p_list_build_deprecated<number>(
                    ($i) => {
                        let temp = fractionalPart
                        for (let i = 0; i < $p['number of fractional digits']; i++) {
                            const digit = temp % 10
                            $i['add item'](digit)
                            temp = p_.from.number(temp).divide(
                                10,
                                ['towards zero', null],
                                {
                                    divided_by_zero: () => p_unreachable_code_path("the divisor is hardcoded to 10")
                                }
                            )
                        }
                    })

                // Add fractional part (reverse order)
                for (let j = p_.from.list(fractionalDigits_list).amount_of_items() - 1; j >= 0; j--) {
                    $i['add item'](48 + p_.from.optional(fractionalDigits_list.__deprecated_get_possible_item_at(j)).decide(
                        ($) => $,
                        () => p_unreachable_code_path("index cannot be out of bounds")
                    ))
                }
            }),
        ($) => $
    )
    return old_imp
}

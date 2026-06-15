import * as pt from 'pareto-core/dist/implementation/transformer'
import * as p_i from 'pareto-core/dist/interface/transformer'

//data types
import * as d_out from "pareto-fountain-pen/dist/interface/generated/liana/schemas/text/data"
import p_list_build_deprecated from 'pareto-core/dist/implementation/specials/list_build_deprecated'
import p_text_from_list from 'pareto-core/dist/implementation/specials/text_from_list'
import p_unreachable_code_path from 'pareto-core/dist/implementation/specials/unreachable_code_path'


export const fractional_decimal: p_i.Transformer_With_Parameter<
    number,
    d_out.Text,
    {
        'number of fractional digits': number
        'decimal separator character code': number
        'thousand separator character code': number
    }
> = ($, $p) => p_text_from_list(
    p_list_build_deprecated<number>(($i) => {
        let value = $

        // Handle negative numbers
        if (value < 0) {
            $i['add item'](45) // '-'
            value = -value
        }

        // Calculate the divisor for the fractional part (10^fractionalDigits)
        let divisor = 1
        for (let i = 0; i < $p['number of fractional digits']; i++) {
            divisor *= 10
        }

        // Split into integer and fractional parts
        const integerPart = pt.number.from.number.divide(
            value,
            divisor,
            ['towards zero', null],
            {
                divided_by_zero: () => p_unreachable_code_path("the divisor is hardcoded to 10^fractionalDigits")
            }
        )
        const fractionalPart = value % divisor

        // Generate integer part digits
        const integerDigits = p_list_build_deprecated<number>(($i) => {
            let temp = integerPart
            if (temp === 0) {
                $i['add item'](0)
            } else {
                while (temp > 0) {
                    const digit = temp % 10
                    $i['add item'](digit)
                    temp = pt.number.from.number.divide(
                        temp,
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
        const digitCount = integerDigits.__get_number_of_items()
        for (let j = digitCount - 1; j >= 0; j--) {
            $i['add item'](48 + integerDigits.__deprecated_get_possible_item_at(j).__decide(
                ($) => $,
                () => p_unreachable_code_path("index cannot be out of bounds")
            ))
            // Add thousand separator after every 3 digits (except at the end)
            if (j > 0 && j % 3 === 0) {
                $i['add item']($p['thousand separator character code'])
            }
        }

        // Add decimal point
        $i['add item']($p['decimal separator character code'])

        // Generate fractional part digits
        const fractionalDigits_list = p_list_build_deprecated<number>(($i) => {
            let temp = fractionalPart
            for (let i = 0; i < $p['number of fractional digits']; i++) {
                const digit = temp % 10
                $i['add item'](digit)
                temp = pt.number.from.number.divide(
                    temp,
                    10,
                    ['towards zero', null],
                    {
                        divided_by_zero: () => p_unreachable_code_path("the divisor is hardcoded to 10")
                    }
                )
            }
        })

        // Add fractional part (reverse order)
        for (let j = fractionalDigits_list.__get_number_of_items() - 1; j >= 0; j--) {
            $i['add item'](48 + fractionalDigits_list.__deprecated_get_possible_item_at(j).__decide(
                ($) => $,
                () => p_unreachable_code_path("index cannot be out of bounds")
            ))
        }
    }),
    ($) => $
)

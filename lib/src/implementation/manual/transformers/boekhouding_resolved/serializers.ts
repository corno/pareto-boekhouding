
//         'value serializers': {
//             'boolean': ($) => s_boolean($),
//             'default number': ($) => s_decimal($),
//             'custom numbers': {
//                 'Bedrag': ($) => s_fractional_decimal($, { 'number of fractional digits': 2 }),
//                 'Promillage': ($) => s_fractional_decimal($, { 'number of fractional digits': 3 }),
//                 'Dagen': ($) => s_decimal($),
//                 'Datum': ($) => s_date($),
//             }
//         }
//     }
// )

//             'value deserializers': {
//                 'boolean': ($) => ds_boolean($, () => abort2('boolean')),
//                 'default number': ($) => ds_decimal($, () => abort2('default number')),
//                 'custom numbers': {
//                     'Bedrag': ($) => ds_decimal($, () => abort2('Bedrag')),
//                     'Promillage': ($) => ds_decimal($, () => abort2('Promillage')),
//                     'Dagen': ($) => ds_decimal($, () => abort2('Dagen')),
//                     'Datum': ($) => ds_date($, () => abort2('Datum')) - 711471,
//                 
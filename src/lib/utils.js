import title from 'title'
import { SpecialTitleWords } from './keywords'

/**
 * Remove digits from a string
 * @param {String} input
 * @returns Input without digits
 * https://stackoverflow.com/a/4993780/11321732
 */
export const removeNum = input => input.replace( /\d+/g, '' )

/**
 *
 * @param {String} input
 * Special processing for some words should go
 * @returns Input without digits and proper title
 */

export const processTitle = input => removeNum(
  title(
    input,
    { special: SpecialTitleWords },
  ),
)

/**
 * Convert a string into a slug
 * @param {String} string
 * https://github.com/graphql/graphql.github.io/blob/739a1c913fa4a88ac7c64c93ce68fc64ec0cbd96/site/_core/Header.js#L11
 */
export const toSlug = string => {
  // var accents = "àáäâèéëêìíïîòóöôùúüûñç";
  const accents = '\u00e0\u00e1\u00e4\u00e2\u00e8'
      + '\u00e9\u00eb\u00ea\u00ec\u00ed\u00ef'
      + '\u00ee\u00f2\u00f3\u00f6\u00f4\u00f9'
      + '\u00fa\u00fc\u00fb\u00f1\u00e7'
  const without = 'aaaaeeeeiiiioooouuuunc'

  return String( string )

  // Handle uppercase characters
    .toLowerCase()

  // Handle accentuated characters
    .replace(
      new RegExp( `[${accents}]`, 'g' ),
      c => without.charAt( accents.indexOf( c ) ),
    )

  // Dash special characters
    .replace( /[^a-z0-9]/g, '-' )

  // Compress multiple dash
    .replace( /-+/g, '-' )

  // Trim dashes
    .replace( /^-|-$/g, '' )
}

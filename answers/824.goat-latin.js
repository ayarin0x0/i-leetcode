/*
 * @lc app=leetcode id=824 lang=javascript
 *
 * [824] Goat Latin
 *
 * https://leetcode.com/problems/goat-latin/description/
 *
 * algorithms
 * Easy (68.65%)
 * Likes:    922
 * Dislikes: 1252
 * Total Accepted:    192.3K
 * Total Submissions: 279.8K
 * Testcase Example:  '"I speak Goat Latin"'
 *
 * You are given a string sentence that consist of words separated by spaces.
 * Each word consists of lowercase and uppercase letters only.
 *
 * We would like to convert the sentence to "Goat Latin" (a made-up language
 * similar to Pig Latin.) The rules of Goat Latin are as follows:
 *
 *
 * If a word begins with a vowel ('a', 'e', 'i', 'o', or 'u'), append "ma" to
 * the end of the word.
 *
 *
 * For example, the word "apple" becomes "applema".
 *
 *
 * If a word begins with a consonant (i.e., not a vowel), remove the first
 * letter and append it to the end, then add "ma".
 *
 * For example, the word "goat" becomes "oatgma".
 *
 *
 * Add one letter 'a' to the end of each word per its word index in the
 * sentence, starting with 1.
 *
 * For example, the first word gets "a" added to the end, the second word gets
 * "aa" added to the end, and so on.
 *
 *
 *
 *
 * Return the final sentence representing the conversion from sentence to Goat
 * Latin.
 *
 *
 * Example 1:
 * Input: sentence = "I speak Goat Latin"
 * Output: "Imaa peaksmaaa oatGmaaaa atinLmaaaaa"
 * Example 2:
 * Input: sentence = "The quick brown fox jumped over the lazy dog"
 * Output: "heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa
 * hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa"
 *
 *
 * Constraints:
 *
 *
 * 1 <= sentence.length <= 150
 * sentence consists of English letters and spaces.
 * sentence has no leading or trailing spaces.
 * All the words in sentence are separated by a single space.
 *
 *
 */

// @lc code=start
/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function(sentence) {
  const words = sentence.split(' ')

  let result = ''
  let prefix = ''

  for (let i = 0; i < words.length - 1; i++) {
    const word = words[i]
    prefix += 'a'

    if (isVowel(word[0])) {
      result += word + 'ma' + prefix + ' '
    } else {
      result += word.slice(1) + word[0] + 'ma' + prefix + ' '
    }
  }

  const lastWord = words[words.length - 1]
  prefix += 'a'

  if (isVowel(lastWord[0])) {
    result += lastWord + 'ma' + prefix
  } else {
    result += lastWord.slice(1) + lastWord[0] + 'ma' + prefix
  }

  return result

  function isVowel(char) {
    char = char.toLowerCase()

    return char === 'a' || char === 'i' || char === 'u' || char === 'e' || char === 'o'
  }
};
// @lc code=end

console.log(
  toGoatLatin('I speak Goat Latin')
)

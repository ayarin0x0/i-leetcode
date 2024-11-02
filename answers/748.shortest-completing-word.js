/*
 * @lc app=leetcode id=748 lang=javascript
 *
 * [748] Shortest Completing Word
 *
 * https://leetcode.com/problems/shortest-completing-word/description/
 *
 * algorithms
 * Easy (60.59%)
 * Likes:    562
 * Dislikes: 1111
 * Total Accepted:    83.3K
 * Total Submissions: 137.3K
 * Testcase Example:  '"1s3 PSt"\n["step","steps","stripe","stepple"]'
 *
 * Given a string licensePlate and an array of strings words, find the shortest
 * completing word in words.
 *
 * A completing word is a word that contains all the letters in licensePlate.
 * Ignore numbers and spaces in licensePlate, and treat letters as case
 * insensitive. If a letter appears more than once in licensePlate, then it
 * must appear in the word the same number of times or more.
 *
 * For example, if licensePlate = "aBc 12c", then it contains letters 'a', 'b'
 * (ignoring case), and 'c' twice. Possible completing words are "abccdef",
 * "caaacab", and "cbca".
 *
 * Return the shortest completing word in words. It is guaranteed an answer
 * exists. If there are multiple shortest completing words, return the first
 * one that occurs in words.
 *
 *
 * Example 1:
 *
 *
 * Input: licensePlate = "1s3 PSt", words = ["step","steps","stripe","stepple"]
 * Output: "steps"
 * Explanation: licensePlate contains letters 's', 'p', 's' (ignoring case),
 * and 't'.
 * "step" contains 't' and 'p', but only contains 1 's'.
 * "steps" contains 't', 'p', and both 's' characters.
 * "stripe" is missing an 's'.
 * "stepple" is missing an 's'.
 * Since "steps" is the only word containing all the letters, that is the
 * answer.
 *
 *
 * Example 2:
 *
 *
 * Input: licensePlate = "1s3 456", words = ["looks","pest","stew","show"]
 * Output: "pest"
 * Explanation: licensePlate only contains the letter 's'. All the words
 * contain 's', but among these "pest", "stew", and "show" are shortest. The
 * answer is "pest" because it is the word that appears earliest of the 3.
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= licensePlate.length <= 7
 * licensePlate contains digits, letters (uppercase or lowercase), or space '
 * '.
 * 1 <= words.length <= 1000
 * 1 <= words[i].length <= 15
 * words[i] consists of lower case English letters.
 *
 *
 */

// @lc code=start
/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function(licensePlate, words) {
  let filteredLicensePlate = ''

  for (let i = 0; i < licensePlate.length; i++) {
    const char = licensePlate[i]

    if (isAlpha(char)) {
      filteredLicensePlate += char.toLowerCase()
    }
  }

  // It is guaranteed an answer exists
  // 1 <= words[i].length <= 15
  // result.length > 15
  let result = '123456789_123456'
  const licensePlateCodes = toCharCodes(filteredLicensePlate)
  const [licensePlateHash, duplicateMap] = hash(licensePlateCodes)

  outer: for (let i = 0; i < words.length; i++) {
    const word = words[i]

    if (word.length < filteredLicensePlate.length) {
      continue
    }

    const codes = toCharCodes(word)
    const [wordHash, wordDuplicateMap] = hash(codes)

    if ((wordHash & licensePlateHash) !== licensePlateHash) {
      continue
    }

    for (let j = 0; j < 26; j++) {
      if (duplicateMap[j] === undefined) {
        continue
      }

      if (wordDuplicateMap[j] === undefined) {
        continue outer
      }

      if (wordDuplicateMap[j] < duplicateMap[j]) {
        continue outer
      }
    }

    result = word.length < result.length ? word : result
  }

  return result

  function toCharCodes(str) {
    const codes = []

    for (let i = 0; i < str.length; i++) {
      const code = str[i].charCodeAt() - 97

      codes.push(code)
    }

    return codes
  }

  /**
   * 'a' -> 97 -> 0
   * 'z' -> 122 -> 25
   * @param {*} codes
   */
  function hash(codes) {
    let bitset = 0
    const duplicateMap = []

    for (let i = 0; i < codes.length; i++) {
      const code = codes[i]
      const bs = 1 << code

      if ((bitset & bs) === bs) {
        duplicateMap[code] = (duplicateMap[code] || 0) + 1

        continue
      }

      bitset |= bs
    }

    // 1 <= words[i].length <= 15

    return [bitset, duplicateMap]
  }

  function isAlpha(char) {
    return (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')
  }
};
// @lc code=end

console.log(
  shortestCompletingWord('1s3 PSt', ['step', 'steps', 'stripe', 'stepple']),
  shortestCompletingWord('1s3 456', ["looks","pest","stew","show"])
)

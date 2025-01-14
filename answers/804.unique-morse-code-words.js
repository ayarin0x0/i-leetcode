/*
 * @lc app=leetcode id=804 lang=javascript
 *
 * [804] Unique Morse Code Words
 *
 * https://leetcode.com/problems/unique-morse-code-words/description/
 *
 * algorithms
 * Easy (83.01%)
 * Likes:    2528
 * Dislikes: 1538
 * Total Accepted:    366.5K
 * Total Submissions: 441.4K
 * Testcase Example:  '["gin","zen","gig","msg"]'
 *
 * International Morse Code defines a standard encoding where each letter is
 * mapped to a series of dots and dashes, as follows:
 *
 *
 * 'a' maps to ".-",
 * 'b' maps to "-...",
 * 'c' maps to "-.-.", and so on.
 *
 *
 * For convenience, the full table for the 26 letters of the English alphabet
 * is given below:
 *
 *
 *
 * [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
 *
 * Given an array of strings words where each word can be written as a
 * concatenation of the Morse code of each letter.
 *
 *
 * For example, "cab" can be written as "-.-..--...", which is the
 * concatenation of "-.-.", ".-", and "-...". We will call such a concatenation
 * the transformation of a word.
 *
 *
 * Return the number of different transformations among all words we have.
 *
 *
 * Example 1:
 *
 *
 * Input: words = ["gin","zen","gig","msg"]
 * Output: 2
 * Explanation: The transformation of each word is:
 * "gin" -> "--...-."
 * "zen" -> "--...-."
 * "gig" -> "--...--."
 * "msg" -> "--...--."
 * There are 2 different transformations: "--...-." and "--...--.".
 *
 *
 * Example 2:
 *
 *
 * Input: words = ["a"]
 * Output: 1
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= words.length <= 100
 * 1 <= words[i].length <= 12
 * words[i] consists of lowercase English letters.
 *
 *
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
  const MORSE = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]

  let result = 0
  const map = Object.create(null)

  for (let i = 0; i < words.length; i++) {
    const word = words[i]
    const morse = morseCode(word, MORSE)

    if (map[morse] === undefined) {
      map[morse] = true
      result += 1
    }
  }

  return result

  function morseCode(word, MORSE) {
    let code = ''

    for (let i = 0; i < word.length; i++) {
      const char = word[i]
      const index = char.codePointAt() - 97

      code += MORSE[index]
    }

    return code
  }
};
// @lc code=end

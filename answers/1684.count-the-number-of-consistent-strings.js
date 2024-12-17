/*
 * @lc app=leetcode id=1684 lang=javascript
 *
 * [1684] Count the Number of Consistent Strings
 *
 * https://leetcode.com/problems/count-the-number-of-consistent-strings/description/
 *
 * algorithms
 * Easy (88.11%)
 * Likes:    2139
 * Dislikes: 86
 * Total Accepted:    366.8K
 * Total Submissions: 416.3K
 * Testcase Example:  '"ab"\n["ad","bd","aaab","baa","badab"]'
 *
 * You are given a string allowed consisting of distinct characters and an
 * array of strings words. A string is consistent if all characters in the
 * string appear in the string allowed.
 *
 * Return the number of consistent strings in the array words.
 *
 *
 * Example 1:
 *
 *
 * Input: allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
 * Output: 2
 * Explanation: Strings "aaab" and "baa" are consistent since they only contain
 * characters 'a' and 'b'.
 *
 *
 * Example 2:
 *
 *
 * Input: allowed = "abc", words = ["a","b","c","ab","ac","bc","abc"]
 * Output: 7
 * Explanation: All strings are consistent.
 *
 *
 * Example 3:
 *
 *
 * Input: allowed = "cad", words = ["cc","acd","b","ba","bac","bad","ac","d"]
 * Output: 4
 * Explanation: Strings "cc", "acd", "ac", and "d" are consistent.
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= words.length <= 10^4
 * 1 <= allowed.length <=^ 26
 * 1 <= words[i].length <= 10
 * The characters in allowed are distinct.
 * words[i] and allowed contain only lowercase English letters.
 *
 *
 */

// @lc code=start
/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
  const map = Object.create(null)

  for (let i = 0; i < allowed.length; i++) {
    const char = allowed[i]

    map[char] = true
  }

  let result = 0

  for (let i = 0; i < words.length; i++) {
    const word = words[i]

    if (isConsistent(word, map)) {
      result += 1
    }
  }

  return result
};

function isConsistent(word, map) {
  for (let i = 0; i < word.length; i++) {
    const char = word[i]

    if (map[char] !== true) {
      return false
    }
  }

  return true
}
// @lc code=end

console.log(
  // countConsistentStrings("ab", ["abc"])
  countConsistentStrings("abc", ["a","b","c","ab","ac","bc","abc"])
)

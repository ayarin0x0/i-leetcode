/*
 * @lc app=leetcode id=1446 lang=javascript
 *
 * [1446] Consecutive Characters
 *
 * https://leetcode.com/problems/consecutive-characters/description/
 *
 * algorithms
 * Easy (60.26%)
 * Likes:    1760
 * Dislikes: 34
 * Total Accepted:    180.3K
 * Total Submissions: 300K
 * Testcase Example:  '"leetcode"'
 *
 * The power of the string is the maximum length of a non-empty substring that
 * contains only one unique character.
 *
 * Given a string s, return the power of s.
 *
 *
 * Example 1:
 *
 *
 * Input: s = "leetcode"
 * Output: 2
 * Explanation: The substring "ee" is of length 2 with the character 'e'
 * only.
 *
 *
 * Example 2:
 *
 *
 * Input: s = "abbcccddddeeeeedcba"
 * Output: 5
 * Explanation: The substring "eeeee" is of length 5 with the character 'e'
 * only.
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= s.length <= 500
 * s consists of only lowercase English letters.
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function(s) {
  let result = 0

  let power = 1
  let prevChar = s[0]

  for (let i = 1; i < s.length + 1; i++) {
    const char = s[i]

    if (char === prevChar) {
      power += 1

      continue
    }

    result = Math.max(result, power)

    prevChar = char
    power = 1
  }

  return result
};
// @lc code=end
console.log(
  maxPower("tourist")
)

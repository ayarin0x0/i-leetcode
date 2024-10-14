/*
 * @lc app=leetcode id=459 lang=javascript
 *
 * [459] Repeated Substring Pattern
 *
 * https://leetcode.com/problems/repeated-substring-pattern/description/
 *
 * algorithms
 * Easy (46.32%)
 * Likes:    6465
 * Dislikes: 526
 * Total Accepted:    478.5K
 * Total Submissions: 1M
 * Testcase Example:  '"abab"'
 *
 * Given a string s, check if it can be constructed by taking a substring of it
 * and appending multiple copies of the substring together.
 *
 *
 * Example 1:
 *
 *
 * Input: s = "abab"
 * Output: true
 * Explanation: It is the substring "ab" twice.
 *
 *
 * Example 2:
 *
 *
 * Input: s = "aba"
 * Output: false
 *
 *
 * Example 3:
 *
 *
 * Input: s = "abcabcabcabc"
 * Output: true
 * Explanation: It is the substring "abc" four times or the substring "abcabc"
 * twice.
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= s.length <= 10^4
 * s consists of lowercase English letters.
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
  return s.repeat(2).slice(1, -1).includes(s)
};
// @lc code=end
console.log(
  repeatedSubstringPattern('abacababacab')
)

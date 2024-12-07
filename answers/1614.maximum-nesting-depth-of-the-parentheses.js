/*
 * @lc app=leetcode id=1614 lang=javascript
 *
 * [1614] Maximum Nesting Depth of the Parentheses
 *
 * https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/description/
 *
 * algorithms
 * Easy (83.98%)
 * Likes:    2511
 * Dislikes: 509
 * Total Accepted:    389.4K
 * Total Submissions: 463.5K
 * Testcase Example:  '"(1+(2*3)+((8)/4))+1"'
 *
 * Given a valid parentheses string s, return the nesting depth of s. The
 * nesting depth is the maximum number of nested parentheses.
 *
 *
 * Example 1:
 *
 *
 * Input: s = "(1+(2*3)+((8)/4))+1"
 *
 * Output: 3
 *
 * Explanation:
 *
 * Digit 8 is inside of 3 nested parentheses in the string.
 *
 *
 * Example 2:
 *
 *
 * Input: s = "(1)+((2))+(((3)))"
 *
 * Output: 3
 *
 * Explanation:
 *
 * Digit 3 is inside of 3 nested parentheses in the string.
 *
 *
 * Example 3:
 *
 *
 * Input: s = "()(())((()()))"
 *
 * Output: 3
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= s.length <= 100
 * s consists of digits 0-9 and characters '+', '-', '*', '/', '(', and
 * ')'.
 * It is guaranteed that parentheses expression s is a VPS.
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
  let result = 0
  let depth = 0

  for (let i = 0; i < s.length; i++) {
    const char = s[i]

    if (char === '(') {
      depth += 1

      continue
    }

    if (char === ')') {
      result = Math.max(depth, result)
      depth -= 1

      continue
    }
  }

  return result
};
// @lc code=end

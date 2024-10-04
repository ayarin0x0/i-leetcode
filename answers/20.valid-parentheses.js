/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 *
 * https://leetcode.com/problems/valid-parentheses/description/
 *
 * algorithms
 * Easy (40.19%)
 * Likes:    22213
 * Dislikes: 1491
 * Total Accepted:    3.8M
 * Total Submissions: 9.5M
 * Testcase Example:  '"()"'
 *
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and
 * ']', determine if the input string is valid.
 *
 * An input string is valid if:
 *
 *
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 * Every close bracket has a corresponding open bracket of the same type.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: s = "()"
 * Output: true
 *
 *
 * Example 2:
 *
 *
 * Input: s = "()[]{}"
 * Output: true
 *
 *
 * Example 3:
 *
 *
 * Input: s = "(]"
 * Output: false
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= s.length <= 10^4
 * s consists of parentheses only '()[]{}'.
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const stack = []
  const pairMap = {
    '(': ')',
    '[': ']',
    '{': '}',
  }

  if (s % 2 === 1) {
    return false
  }

  for(let i = 0; i < s.length; i++) {
    const cur = s[i]
    stack.push(cur)

    if (stack.length < 2) {
      continue
    }

    // 像消消乐游戏一样, 尝试去消除最近的一对括号
    if (pairMap[stack[stack.length - 2]] === cur) {
      stack.pop()
      stack.pop()
    }
  }

  return stack.length === 0
}
// @lc code=end

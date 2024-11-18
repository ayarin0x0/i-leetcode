/*
 * @lc app=leetcode id=1021 lang=javascript
 *
 * [1021] Remove Outermost Parentheses
 *
 * https://leetcode.com/problems/remove-outermost-parentheses/description/
 *
 * algorithms
 * Easy (84.02%)
 * Likes:    3067
 * Dislikes: 1632
 * Total Accepted:    394K
 * Total Submissions: 467.7K
 * Testcase Example:  '"(()())(())"'
 *
 * A valid parentheses string is either empty "", "(" + A + ")", or A + B,
 * where A and B are valid parentheses strings, and + represents string
 * concatenation.
 *
 *
 * For example, "", "()", "(())()", and "(()(()))" are all valid parentheses
 * strings.
 *
 *
 * A valid parentheses string s is primitive if it is nonempty, and there does
 * not exist a way to split it into s = A + B, with A and B nonempty valid
 * parentheses strings.
 *
 * Given a valid parentheses string s, consider its primitive decomposition: s
 * = P1 + P2 + ... + Pk, where Pi are primitive valid parentheses strings.
 *
 * Return s after removing the outermost parentheses of every primitive string
 * in the primitive decomposition of s.
 *
 *
 * Example 1:
 *
 *
 * Input: s = "(()())(())"
 * Output: "()()()"
 * Explanation:
 * The input string is "(()())(())", with primitive decomposition "(()())" +
 * "(())".
 * After removing outer parentheses of each part, this is "()()" + "()" =
 * "()()()".
 *
 *
 * Example 2:
 *
 *
 * Input: s = "(()())(())(()(()))"
 * Output: "()()()()(())"
 * Explanation:
 * The input string is "(()())(())(()(()))", with primitive decomposition
 * "(()())" + "(())" + "(()(()))".
 * After removing outer parentheses of each part, this is "()()" + "()" +
 * "()(())" = "()()()()(())".
 *
 *
 * Example 3:
 *
 *
 * Input: s = "()()"
 * Output: ""
 * Explanation:
 * The input string is "()()", with primitive decomposition "()" + "()".
 * After removing outer parentheses of each part, this is "" + "" = "".
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= s.length <= 10^5
 * s[i] is either '(' or ')'.
 * s is a valid parentheses string.
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
  let result = ''
  let shield = 1
  let hp = 0

  for (let i = 0; i < s.length; i++) {
    const char = s[i]

    if (char === '(') {
      if (shield === 1) {
        shield = 0

        continue
      }

      hp += 1
      result += char

      continue
    }

    if (char === ')') {
      if (hp > 0) {
        hp -= 1
        result += char

        continue
      }

      shield = 1

      continue
    }
  }

  return result
};
// @lc code=end

console.log(
  // removeOuterParentheses('(()())(())')
  // removeOuterParentheses('(()())(())(()(()))')
  removeOuterParentheses('()()')
)

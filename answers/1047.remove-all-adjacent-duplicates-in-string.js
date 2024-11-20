/*
 * @lc app=leetcode id=1047 lang=javascript
 *
 * [1047] Remove All Adjacent Duplicates In String
 *
 * https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/description/
 *
 * algorithms
 * Easy (70.19%)
 * Likes:    6697
 * Dislikes: 265
 * Total Accepted:    642.1K
 * Total Submissions: 911.3K
 * Testcase Example:  '"abbaca"'
 *
 * You are given a string s consisting of lowercase English letters. A
 * duplicate removal consists of choosing two adjacent and equal letters and
 * removing them.
 *
 * We repeatedly make duplicate removals on s until we no longer can.
 *
 * Return the final string after all such duplicate removals have been made. It
 * can be proven that the answer is unique.
 *
 *
 * Example 1:
 *
 *
 * Input: s = "abbaca"
 * Output: "ca"
 * Explanation:
 * For example, in "abbaca" we could remove "bb" since the letters are adjacent
 * and equal, and this is the only possible move.  The result of this move is
 * that the string is "aaca", of which only "aa" is possible, so the final
 * string is "ca".
 *
 *
 * Example 2:
 *
 *
 * Input: s = "azxxzy"
 * Output: "ay"
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= s.length <= 10^5
 * s consists of lowercase English letters.
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
  const stack = []

  for (let i = 0; i < s.length; i++) {
    const char = s[i]

    stack.push(char)
    dupcateRemove(stack)
  }

  return stack.join('')
};

function dupcateRemove(stack) {
  if (stack.length < 2) {
    return
  }

  const t1 = stack[stack.length - 1]
  const t2 = stack[stack.length - 2]

  if (t1 === t2) {
    stack.pop()
    stack.pop()
  }
}
// @lc code=end
console.log(
  removeDuplicates("x")
)

/*
 * @lc app=leetcode id=844 lang=javascript
 *
 * [844] Backspace String Compare
 *
 * https://leetcode.com/problems/backspace-string-compare/description/
 *
 * algorithms
 * Easy (49.29%)
 * Likes:    7597
 * Dislikes: 361
 * Total Accepted:    877.2K
 * Total Submissions: 1.8M
 * Testcase Example:  '"ab#c"\n"ad#c"'
 *
 * Given two strings s and t, return true if they are equal when both are typed
 * into empty text editors. '#' means a backspace character.
 *
 * Note that after backspacing an empty text, the text will continue empty.
 *
 *
 * Example 1:
 *
 *
 * Input: s = "ab#c", t = "ad#c"
 * Output: true
 * Explanation: Both s and t become "ac".
 *
 *
 * Example 2:
 *
 *
 * Input: s = "ab##", t = "c#d#"
 * Output: true
 * Explanation: Both s and t become "".
 *
 *
 * Example 3:
 *
 *
 * Input: s = "a#c", t = "b"
 * Output: false
 * Explanation: s becomes "c" while t becomes "b".
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= s.length, t.length <= 200
 * s and t only contain lowercase letters and '#' characters.
 *
 *
 *
 * Follow up: Can you solve it in O(n) time and O(1) space?
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
  const sPicker = Picker(s)
  const tPicker = Picker(t)

  for (;sPicker.isProcessing() || tPicker.isProcessing();) {
    const sChar = sPicker.pick()
    const tChar = tPicker.pick()

    if (sChar !== tChar) {
      return false
    }
  }

  return true
};

function Picker(str) {
  let pointer = str.length - 1
  let skip = 0

  return {
    pick() {
      for (;pointer >= 0;) {
        const char = str[pointer]

        if (char === '#') {
          skip += 1
          pointer -= 1

          continue
        }

        if (skip > 0) {
          skip -= 1
          pointer -= 1

          continue
        }

        pointer -= 1

        return char
      }

      return ''
    },

    isProcessing() {
      return pointer >= 0
    }
  }
}
// @lc code=end

console.log(
  backspaceCompare("bbb", "bbb#")
)

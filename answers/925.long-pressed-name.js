/*
 * @lc app=leetcode id=925 lang=javascript
 *
 * [925] Long Pressed Name
 *
 * https://leetcode.com/problems/long-pressed-name/description/
 *
 * algorithms
 * Easy (32.30%)
 * Likes:    2465
 * Dislikes: 383
 * Total Accepted:    153.6K
 * Total Submissions: 476.1K
 * Testcase Example:  '"alex"\n"aaleex"'
 *
 * Your friend is typing his name into a keyboard. Sometimes, when typing a
 * character c, the key might get long pressed, and the character will be typed
 * 1 or more times.
 *
 * You examine the typed characters of the keyboard. Return True if it is
 * possible that it was your friends name, with some characters (possibly none)
 * being long pressed.
 *
 *
 * Example 1:
 *
 *
 * Input: name = "alex", typed = "aaleex"
 * Output: true
 * Explanation: 'a' and 'e' in 'alex' were long pressed.
 *
 *
 * Example 2:
 *
 *
 * Input: name = "saeed", typed = "ssaaedd"
 * Output: false
 * Explanation: 'e' must have been pressed twice, but it was not in the typed
 * output.
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= name.length, typed.length <= 1000
 * name and typed consist of only lowercase English letters.
 *
 *
 */

// @lc code=start
/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {
  if (typed.length < name.length) {
    return false
  }

  if (name === typed) {
    return true
  }

  const namePicker = Picker(name)
  const typedPicker = Picker(typed)

  for (;namePicker.isNotEOL() && typedPicker.isNotEOL();) {
    const [curName, curNameCount] = namePicker.next()
    const [curTyped, curTypedCount] = typedPicker.next()

    // console.log(`[${curName}, ${curNameCount}] vs. [${curTyped}, ${curTypedCount}]`)

    if (curName !== curTyped) {
      return false
    }

    if (curNameCount > curTypedCount) {
      return false
    }
  }

  return namePicker.isNotEOL() === typedPicker.isNotEOL()

  function Picker(str) {
    let pointer = 0

    return {
      next() {
        const curChar = str[pointer]
        pointer += 1

        let count = 1

        for (;pointer < str.length;) {
          if (str[pointer] === curChar) {
            count += 1
            pointer += 1
          } else {
            break
          }
        }

        return [curChar, count]
      },

      isNotEOL() {
        return pointer < str.length
      }
    }
  }
};
// @lc code=end

console.log(
  isLongPressedName("alex", "aaleexa")
)

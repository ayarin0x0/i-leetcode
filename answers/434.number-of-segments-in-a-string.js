/*
 * @lc app=leetcode id=434 lang=javascript
 *
 * [434] Number of Segments in a String
 *
 * https://leetcode.com/problems/number-of-segments-in-a-string/description/
 *
 * algorithms
 * Easy (36.33%)
 * Likes:    800
 * Dislikes: 1272
 * Total Accepted:    200.4K
 * Total Submissions: 551.5K
 * Testcase Example:  '"Hello, my name is John"'
 *
 * Given a string s, return the number of segments in the string.
 *
 * A segment is defined to be a contiguous sequence of non-space characters.
 *
 *
 * Example 1:
 *
 *
 * Input: s = "Hello, my name is John"
 * Output: 5
 * Explanation: The five segments are ["Hello,", "my", "name", "is", "John"]
 *
 *
 * Example 2:
 *
 *
 * Input: s = "Hello"
 * Output: 1
 *
 *
 *
 * Constraints:
 *
 *
 * 0 <= s.length <= 300
 * s consists of lowercase and uppercase English letters, digits, or one of the
 * following characters "!@#$%^&*()_+-=',.:".
 * The only space character in s is ' '.
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
  const SPACE = ' '
  let segments = 0

  let status = 'space'

  for (let i = 0; i < s.length;) {
    if (status === 'space') {
      for (; i < s.length; i += 1) {
        if (s[i] !== SPACE) {
          status = 'word'
          segments += 1
          break
        }
      }
    }

    if (status === 'word') {
      for (; i < s.length; i += 1) {
        if (s[i] === SPACE) {
          status = 'space'
          break
        }
      }
    }
  }

  return segments
};
// @lc code=end

console.log(
  countSegments("")
)

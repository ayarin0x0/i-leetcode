/*
 * @lc app=leetcode id=1417 lang=javascript
 *
 * [1417] Reformat The String
 *
 * https://leetcode.com/problems/reformat-the-string/description/
 *
 * algorithms
 * Easy (52.54%)
 * Likes:    596
 * Dislikes: 108
 * Total Accepted:    62.1K
 * Total Submissions: 118.9K
 * Testcase Example:  '"a0b1c2"'
 *
 * You are given an alphanumeric string s. (Alphanumeric string is a string
 * consisting of lowercase English letters and digits).
 *
 * You have to find a permutation of the string where no letter is followed by
 * another letter and no digit is followed by another digit. That is, no two
 * adjacent characters have the same type.
 *
 * Return the reformatted string or return an empty string if it is impossible
 * to reformat the string.
 *
 *
 * Example 1:
 *
 *
 * Input: s = "a0b1c2"
 * Output: "0a1b2c"
 * Explanation: No two adjacent characters have the same type in "0a1b2c".
 * "a0b1c2", "0a1b2c", "0c2a1b" are also valid permutations.
 *
 *
 * Example 2:
 *
 *
 * Input: s = "leetcode"
 * Output: ""
 * Explanation: "leetcode" has only characters so we cannot separate them by
 * digits.
 *
 *
 * Example 3:
 *
 *
 * Input: s = "1229857369"
 * Output: ""
 * Explanation: "1229857369" has only digits so we cannot separate them by
 * characters.
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= s.length <= 500
 * s consists of only lowercase English letters and/or digits.
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reformat = function(s) {
  const chars = []
  const digits = []

  for (let i = 0; i < s.length; i++) {
    const char = s[i]

    if (char >= '0' && char <= '9') {
      digits.push(char)
    } else {
      chars.push(char)
    }
  }

  let result = ''

  if (Math.abs(chars.length - digits.length) > 1) {
    return result
  }

  const len = Math.min(chars.length, digits.length)

  for (let i = 0; i < len; i++) {
    result += chars[i]
    result += digits[i]
  }

  if (chars.length > digits.length) {
    result += chars[len]
  } else if (chars.length < digits.length) {
    result = digits[len] + result
  }

  return result
};
// @lc code=end

console.log(
  reformat("leetcode")
)

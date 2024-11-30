/*
 * @lc app=leetcode id=1370 lang=javascript
 *
 * [1370] Increasing Decreasing String
 *
 * https://leetcode.com/problems/increasing-decreasing-string/description/
 *
 * algorithms
 * Easy (76.69%)
 * Likes:    794
 * Dislikes: 869
 * Total Accepted:    84K
 * Total Submissions: 109.7K
 * Testcase Example:  '"aaaabbbbcccc"'
 *
 * You are given a string s. Reorder the string using the following
 * algorithm:
 *
 *
 * Remove the smallest character from s and append it to the result.
 * Remove the smallest character from s that is greater than the last appended
 * character, and append it to the result.
 * Repeat step 2 until no more characters can be removed.
 * Remove the largest character from s and append it to the result.
 * Remove the largest character from s that is smaller than the last appended
 * character, and append it to the result.
 * Repeat step 5 until no more characters can be removed.
 * Repeat steps 1 through 6 until all characters from s have been removed.
 *
 *
 * If the smallest or largest character appears more than once, you may choose
 * any occurrence to append to the result.
 *
 * Return the resulting string after reordering s using this algorithm.
 *
 *
 * Example 1:
 *
 *
 * Input: s = "aaaabbbbcccc"
 * Output: "abccbaabccba"
 * Explanation: After steps 1, 2 and 3 of the first iteration, result = "abc"
 * After steps 4, 5 and 6 of the first iteration, result = "abccba"
 * First iteration is done. Now s = "aabbcc" and we go back to step 1
 * After steps 1, 2 and 3 of the second iteration, result = "abccbaabc"
 * After steps 4, 5 and 6 of the second iteration, result = "abccbaabccba"
 *
 *
 * Example 2:
 *
 *
 * Input: s = "rat"
 * Output: "art"
 * Explanation: The word "rat" becomes "art" after re-ordering it with the
 * mentioned algorithm.
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
 * @return {string}
 */
var sortString = function(s) {
  const sorted = s.split('').sort()
  const compressed = []

  let count = 0
  let prevChar = sorted[0]
  for (let i = 0; i < sorted.length + 1; i++) {
    const char = sorted[i]

    if (char === prevChar) {
      count += 1

      continue
    }

    compressed.push(prevChar, count)

    count = 1
    prevChar = char
  }

  const result = []
  const len = compressed.length / 2

  let hp = s.length

  for (;hp > 0;) {
    for (let i = 0; i < len; i++) {
      const i2 = i * 2

      const char = compressed[i2 + 0]
      const count = compressed[i2 + 1]

      if (count <= 0) {
        continue
      }

      result.push(char)

      compressed[i2 + 1] -= 1

      hp -= 1
    }

    for (let i = len - 1; i >= 0; i--) {
      const i2 = i * 2

      const count = compressed[i2 + 1]

      if (count <= 0) {
        continue
      }

      const char = compressed[i2 + 0]
      result.push(char)

      compressed[i2 + 1] -= 1

      hp -= 1
    }
  }

  return result.join('')
};
// @lc code=end

console.log(
  // sortString("aaaabbbbcccc")
  sortString("rat")
)

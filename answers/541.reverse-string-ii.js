/*
 * @lc app=leetcode id=541 lang=javascript
 *
 * [541] Reverse String II
 *
 * https://leetcode.com/problems/reverse-string-ii/description/
 *
 * algorithms
 * Easy (51.20%)
 * Likes:    2031
 * Dislikes: 3916
 * Total Accepted:    269.9K
 * Total Submissions: 526.7K
 * Testcase Example:  '"abcdefg"\n2'
 *
 * Given a string s and an integer k, reverse the first k characters for every
 * 2k characters counting from the start of the string.
 *
 * If there are fewer than k characters left, reverse all of them. If there are
 * less than 2k but greater than or equal to k characters, then reverse the
 * first k characters and leave the other as original.
 *
 *
 * Example 1:
 * Input: s = "abcdefg", k = 2
 * Output: "bacdfeg"
 * Example 2:
 * Input: s = "abcd", k = 2
 * Output: "bacd"
 *
 *
 * Constraints:
 *
 *
 * 1 <= s.length <= 10^4
 * s consists of only lowercase English letters.
 * 1 <= k <= 10^4
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
  let result = ''

  const interval = 2 * k
  const leftStringLen = s.length % interval
  const times = Math.ceil(s.length / interval)
  const reverseTimes = leftStringLen === 0 ? times : times - 1

  for (let time = 0; time < reverseTimes; time++) {
    const base = interval * time
    for (let i = k - 1; i >= 0; i--) {
      result += s[base + i]
    }

    const leftStringStart = base + k
    for (let i = 0; i < k; i++) {
      result += s[leftStringStart + i]
    }
  }

  // handle last loop
  if (leftStringLen > 0) {
    const base = interval * reverseTimes
    const start = Math.min(leftStringLen, k)
    for (let i = start - 1; i >= 0; i--) {
      result += s[base + i]
    }

    if (leftStringLen > k) {
      const leftStringStart = base + k
      const end = leftStringLen - k
      for (let i = 0; i < end; i++) {
        result += s[leftStringStart + i]
      }
    }
  }

  return result
};
// @lc code=end

console.log(
  'result',
  reverseStr("abcdefg", 2)
)

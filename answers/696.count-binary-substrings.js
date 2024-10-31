/*
 * @lc app=leetcode id=696 lang=javascript
 *
 * [696] Count Binary Substrings
 *
 * https://leetcode.com/problems/count-binary-substrings/description/
 *
 * algorithms
 * Easy (65.71%)
 * Likes:    4015
 * Dislikes: 880
 * Total Accepted:    217.9K
 * Total Submissions: 331.6K
 * Testcase Example:  '"00110011"'
 *
 * Given a binary string s, return the number of non-empty substrings that have
 * the same number of 0's and 1's, and all the 0's and all the 1's in these
 * substrings are grouped consecutively.
 *
 * Substrings that occur multiple times are counted the number of times they
 * occur.
 *
 *
 * Example 1:
 *
 *
 * Input: s = "00110011"
 * Output: 6
 * Explanation: There are 6 substrings that have equal number of consecutive
 * 1's and 0's: "0011", "01", "1100", "10", "0011", and "01".
 * Notice that some of these substrings repeat and are counted the number of
 * times they occur.
 * Also, "00110011" is not a valid substring because all the 0's (and 1's) are
 * not grouped together.
 *
 *
 * Example 2:
 *
 *
 * Input: s = "10101"
 * Output: 4
 * Explanation: There are 4 substrings: "10", "01", "10", "01" that have equal
 * number of consecutive 1's and 0's.
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= s.length <= 10^5
 * s[i] is either '0' or '1'.
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
  const countMap = []

  let prevChar = s[0]
  let count = 1

  for (let i = 1; i < s.length + 1; i++) {
    const char = s[i]

    if (char === prevChar) {
      count += 1
    } else {
      countMap.push(count)

      prevChar = char
      count = 1
    }
  }

  let result = 0

  if (countMap.length < 2) {
    return result
  }

  for (let i = 1; i < countMap.length; i++) {
    const prevCount = countMap[i - 1]
    const curCount = countMap[i]

    const commonCount = Math.min(curCount, prevCount)

    result += commonCount
  }

  return result


// function getPermutationByCount(count) {
//   // 00011
//   // 01
//   // 0011
//   // 000111
//   return count
// }
};
// @lc code=end

console.log(
  countBinarySubstrings('00110011')
)

/*
 * @lc app=leetcode id=338 lang=javascript
 *
 * [338] Counting Bits
 *
 * https://leetcode.com/problems/counting-bits/description/
 *
 * algorithms
 * Easy (77.54%)
 * Likes:    11212
 * Dislikes: 547
 * Total Accepted:    1.2M
 * Total Submissions: 1.5M
 * Testcase Example:  '2'
 *
 * Given an integer n, return an array ans of length n + 1 such that for each i
 * (0 <= i <= n), ans[i] is the number of 1's in the binary representation of
 * i.
 *
 *
 * Example 1:
 *
 *
 * Input: n = 2
 * Output: [0,1,1]
 * Explanation:
 * 0 --> 0
 * 1 --> 1
 * 2 --> 10
 *
 *
 * Example 2:
 *
 *
 * Input: n = 5
 * Output: [0,1,1,2,1,2]
 * Explanation:
 * 0 --> 0
 * 1 --> 1
 * 2 --> 10
 * 3 --> 11
 * 4 --> 100
 * 5 --> 101
 *
 *
 *
 * Constraints:
 *
 *
 * 0 <= n <= 10^5
 *
 *
 *
 * Follow up:
 *
 *
 * It is very easy to come up with a solution with a runtime of O(n log n). Can
 * you do it in linear time O(n) and possibly in a single pass?
 * Can you do it without using any built-in function (i.e., like
 * __builtin_popcount in C++)?
 *
 *
 */

// @lc code=start

// var countBits = function(n) {
//   const result = []
//   for (let i = 0; i <= n; i++) {
//     result.push(i.toString(2).split('').filter(x => x === '1').length)
//   }

//   return result
// }
/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
  const result = [0]

  if (n === 0) {
    return result
  }

  result.push(1)

  for (let i = 2; i <= n; i++) {
    if (i % 2 === 0) {
      result[i] = result[Math.floor(i / 2)]
    } else {
      result[i] = result[Math.floor(i / 2)] + 1
    }
  }

  return result
}
// @lc code=end

countBits(100)

// 2^0 1
// 2^1 2
// 2^2 4
// 2^3 8
// 2^4 16
// 2^5 32
// 2^6 64
// 2^7 128
// 2^8 256
// 2^9 512
// 2^10 1024
// 2^11 2048
// 2^12 4096
// 2^13 8192
// 2^14 16384
// 2^15 32768
// 2^16 65536
// 2^17 131072

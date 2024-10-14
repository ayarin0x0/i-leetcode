/*
 * @lc app=leetcode id=441 lang=javascript
 *
 * [441] Arranging Coins
 *
 * https://leetcode.com/problems/arranging-coins/description/
 *
 * algorithms
 * Easy (46.89%)
 * Likes:    3930
 * Dislikes: 1337
 * Total Accepted:    474.9K
 * Total Submissions: 1M
 * Testcase Example:  '5'
 *
 * You have n coins and you want to build a staircase with these coins. The
 * staircase consists of k rows where the i^th row has exactly i coins. The
 * last row of the staircase may be incomplete.
 *
 * Given the integer n, return the number of complete rows of the staircase you
 * will build.
 *
 *
 * Example 1:
 *
 *
 * Input: n = 5
 * Output: 2
 * Explanation: Because the 3^rd row is incomplete, we return 2.
 *
 *
 * Example 2:
 *
 *
 * Input: n = 8
 * Output: 3
 * Explanation: Because the 4^th row is incomplete, we return 3.
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= n <= 2^31 - 1
 *
 *
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
  /**
   * coins 总数为 i * (i + 1) / 2
   *
   * 我们需要找到 i * (i + 1) >= 2n 且 (i - 1) * i < 2n 的 i
   *
   * 由于 i * i < i * (i + 1)
   *
   * 所以 i 在 Math.sqrt(n * 2) 附近
   *
   * 找到 predict 后, 我们让 predict + 1, 此时相当于 (i + 1) * (i + 2) > i * (i + 1) >= 2n
   * 所以 result 一定 < predict, 然后固定往前找让 i * i + 1 <= 2n 即可
   */
  const doubleN = n * 2
  const predict = Math.floor(Math.sqrt(doubleN))

  let result = predict + 1

  for (;;) {
    const sum = result * (result + 1)

    if (sum <= doubleN) {
      break
    }

    result -= 1
  }

  return result
};
// @lc code=end

console.log(
  arrangeCoins(8)
)

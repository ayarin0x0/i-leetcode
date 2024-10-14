/*
 * @lc app=leetcode id=461 lang=javascript
 *
 * [461] Hamming Distance
 *
 * https://leetcode.com/problems/hamming-distance/description/
 *
 * algorithms
 * Easy (75.65%)
 * Likes:    3866
 * Dislikes: 219
 * Total Accepted:    595.2K
 * Total Submissions: 786.8K
 * Testcase Example:  '1\n4'
 *
 * The Hamming distance between two integers is the number of positions at
 * which the corresponding bits are different.
 *
 * Given two integers x and y, return the Hamming distance between them.
 *
 *
 * Example 1:
 *
 *
 * Input: x = 1, y = 4
 * Output: 2
 * Explanation:
 * 1   (0 0 0 1)
 * 4   (0 1 0 0)
 * ⁠      ↑   ↑
 * The above arrows point to positions where the corresponding bits are
 * different.
 *
 *
 * Example 2:
 *
 *
 * Input: x = 3, y = 1
 * Output: 1
 *
 *
 *
 * Constraints:
 *
 *
 * 0 <= x, y <= 2^31 - 1
 *
 *
 *
 * Note: This question is the same as  2220: Minimum Bit Flips to Convert
 * Number.
 *
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
  let xor = x ^ y

  let result = 0

  while (xor) {
    result += xor & 1
    xor = xor >>> 1
  }

  return result
};
// @lc code=end

console.log(
  hammingDistance(1, 4)
)

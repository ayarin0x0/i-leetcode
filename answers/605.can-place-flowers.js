/*
 * @lc app=leetcode id=605 lang=javascript
 *
 * [605] Can Place Flowers
 *
 * https://leetcode.com/problems/can-place-flowers/description/
 *
 * algorithms
 * Easy (28.89%)
 * Likes:    6703
 * Dislikes: 1209
 * Total Accepted:    945.1K
 * Total Submissions: 3.3M
 * Testcase Example:  '[1,0,0,0,1]\n1'
 *
 * You have a long flowerbed in which some of the plots are planted, and some
 * are not. However, flowers cannot be planted in adjacent plots.
 *
 * Given an integer array flowerbed containing 0's and 1's, where 0 means empty
 * and 1 means not empty, and an integer n, return true if n new flowers can be
 * planted in the flowerbed without violating the no-adjacent-flowers rule and
 * false otherwise.
 *
 *
 * Example 1:
 * Input: flowerbed = [1,0,0,0,1], n = 1
 * Output: true
 * Example 2:
 * Input: flowerbed = [1,0,0,0,1], n = 2
 * Output: false
 *
 *
 * Constraints:
 *
 *
 * 1 <= flowerbed.length <= 2 * 10^4
 * flowerbed[i] is 0 or 1.
 * There are no two adjacent flowers in flowerbed.
 * 0 <= n <= flowerbed.length
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
  let available = 0

  /**
   * i 初始化为 1, 让该3格大小的窗口对齐第一个元素, 比如考虑 001 的情况
   * len + 1, 让该3格大小的窗口对齐最后一个元素, 比如考虑 100 的情况
   */
  for (let i = 1; i < flowerbed.length + 1; i++) {
    const head = flowerbed[i - 2]
    const middle = flowerbed[i - 1]
    const tail = flowerbed[i]

    if (head !== 1 && middle !== 1 && tail !== 1) {
      available += 1
      i += 1
    }
  }

  return n <= available
};
// @lc code=end

console.log(
  canPlaceFlowers([0, 1], 1)
)

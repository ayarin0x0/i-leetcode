/*
 * @lc app=leetcode id=771 lang=javascript
 *
 * [771] Jewels and Stones
 *
 * https://leetcode.com/problems/jewels-and-stones/description/
 *
 * algorithms
 * Easy (88.91%)
 * Likes:    5159
 * Dislikes: 603
 * Total Accepted:    1.1M
 * Total Submissions: 1.3M
 * Testcase Example:  '"aA"\n"aAAbbbb"'
 *
 * You're given strings jewels representing the types of stones that are
 * jewels, and stones representing the stones you have. Each character in
 * stones is a type of stone you have. You want to know how many of the stones
 * you have are also jewels.
 *
 * Letters are case sensitive, so "a" is considered a different type of stone
 * from "A".
 *
 *
 * Example 1:
 * Input: jewels = "aA", stones = "aAAbbbb"
 * Output: 3
 * Example 2:
 * Input: jewels = "z", stones = "ZZ"
 * Output: 0
 *
 *
 * Constraints:
 *
 *
 * 1 <= jewels.length, stones.length <= 50
 * jewels and stones consist of only English letters.
 * All the characters of jewels are unique.
 *
 *
 */

// @lc code=start
/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
  const jewelMap = Object.create(null)

  for (let i = 0; i < jewels.length; i++) {
    const jewel = jewels[i]

    jewelMap[jewel] = 1
  }

  let result = 0

  for (let i = 0; i < stones.length; i++) {
    const stone = stones[i]

    result += jewelMap[stone] || 0
  }

  return result
};
// @lc code=end

/*
 * @lc app=leetcode id=1518 lang=javascript
 *
 * [1518] Water Bottles
 *
 * https://leetcode.com/problems/water-bottles/description/
 *
 * algorithms
 * Easy (70.99%)
 * Likes:    1705
 * Dislikes: 138
 * Total Accepted:    246K
 * Total Submissions: 346.6K
 * Testcase Example:  '9\n3'
 *
 * There are numBottles water bottles that are initially full of water. You can
 * exchange numExchange empty water bottles from the market with one full water
 * bottle.
 *
 * The operation of drinking a full water bottle turns it into an empty
 * bottle.
 *
 * Given the two integers numBottles and numExchange, return the maximum number
 * of water bottles you can drink.
 *
 *
 * Example 1:
 *
 *
 * Input: numBottles = 9, numExchange = 3
 * Output: 13
 * Explanation: You can exchange 3 empty bottles to get 1 full water bottle.
 * Number of water bottles you can drink: 9 + 3 + 1 = 13.
 *
 *
 * Example 2:
 *
 *
 * Input: numBottles = 15, numExchange = 4
 * Output: 19
 * Explanation: You can exchange 4 empty bottles to get 1 full water bottle.
 * Number of water bottles you can drink: 15 + 3 + 1 = 19.
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= numBottles <= 100
 * 2 <= numExchange <= 100
 *
 *
 */

// @lc code=start
/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
  let result = 0
  let emptyBottles = 0

  for (;;) {
    result += numBottles
    emptyBottles += numBottles

    if (emptyBottles >= numExchange) {
      numBottles = Math.floor(emptyBottles / numExchange)
      emptyBottles = emptyBottles % numExchange
    } else {
      break
    }
  }

  return result
};
// @lc code=end

console.log(
  numWaterBottles(15, 4)
)

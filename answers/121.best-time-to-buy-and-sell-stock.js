/*
 * @lc app=leetcode id=121 lang=javascript
 *
 * [121] Best Time to Buy and Sell Stock
 *
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/
 *
 * algorithms
 * Easy (53.50%)
 * Likes:    31438
 * Dislikes: 1193
 * Total Accepted:    5.2M
 * Total Submissions: 9.6M
 * Testcase Example:  '[7,1,5,3,6,4]'
 *
 * You are given an array prices where prices[i] is the price of a given stock
 * on the i^th day.
 *
 * You want to maximize your profit by choosing a single day to buy one stock
 * and choosing a different day in the future to sell that stock.
 *
 * Return the maximum profit you can achieve from this transaction. If you
 * cannot achieve any profit, return 0.
 *
 *
 * Example 1:
 *
 *
 * Input: prices = [7,1,5,3,6,4]
 * Output: 5
 * Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit
 * = 6-1 = 5.
 * Note that buying on day 2 and selling on day 1 is not allowed because you
 * must buy before you sell.
 *
 *
 * Example 2:
 *
 *
 * Input: prices = [7,6,4,3,1]
 * Output: 0
 * Explanation: In this case, no transactions are done and the max profit =
 * 0.
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= prices.length <= 10^5
 * 0 <= prices[i] <= 10^4
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  function tryBuyAndSell(prices, currentDay) {
    // find continus-min
    let minPrice = prices[currentDay]
    let BUY_OK = false

    currentDay += 1

    for (; currentDay < limitDay; currentDay++) {
      if (prices[currentDay] < minPrice) {
        minPrice = prices[currentDay]

        continue
      }

      BUY_OK = true
      break
    }

    if (!BUY_OK) {
      return {
        currentDay,
        minPrice,
        maxPrice: minPrice,
      }
    }

    // find continus-max
    let maxPrice = prices[currentDay]

    for (; currentDay < limitDay; currentDay++) {
      if (prices[currentDay] > maxPrice) {
        maxPrice = prices[currentDay]

        continue
      }

      break
    }

    return {
      currentDay,
      minPrice,
      maxPrice,
    }
  }

  let limitDay = prices.length
  let historyMinPrice = Infinity
  let profit = 0
  for (let currentDay = 0; currentDay < limitDay;) {
    const pack = tryBuyAndSell(prices, currentDay)

    currentDay = pack.currentDay
    historyMinPrice = Math.min(historyMinPrice, pack.minPrice)
    profit = Math.max(profit, pack.maxPrice - historyMinPrice)
  }

  return profit
}
// @lc code=end

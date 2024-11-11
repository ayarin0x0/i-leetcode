/*
 * @lc app=leetcode id=914 lang=javascript
 *
 * [914] X of a Kind in a Deck of Cards
 *
 * https://leetcode.com/problems/x-of-a-kind-in-a-deck-of-cards/description/
 *
 * algorithms
 * Easy (29.87%)
 * Likes:    1826
 * Dislikes: 526
 * Total Accepted:    131.1K
 * Total Submissions: 439K
 * Testcase Example:  '[1,2,3,4,4,3,2,1]'
 *
 * You are given an integer array deck where deck[i] represents the number
 * written on the i^th card.
 *
 * Partition the cards into one or more groups such that:
 *
 *
 * Each group has exactly x cards where x > 1, and
 * All the cards in one group have the same integer written on them.
 *
 *
 * Return true if such partition is possible, or false otherwise.
 *
 *
 * Example 1:
 *
 *
 * Input: deck = [1,2,3,4,4,3,2,1]
 * Output: true
 * Explanation: Possible partition [1,1],[2,2],[3,3],[4,4].
 *
 *
 * Example 2:
 *
 *
 * Input: deck = [1,1,1,2,2,2,3,3]
 * Output: false
 * Explanation: No possible partition.
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= deck.length <= 10^4
 * 0 <= deck[i] < 10^4
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
  const map = Object.create(null)

  for (let i = 0; i < deck.length; i++) {
    const cards = deck[i]

    if (map[cards] === undefined) {
      map[cards] = 0
    }

    map[cards] += 1
  }

  let GCD = 0
  const allCards = Object.keys(map)

  for (let i = 0; i < allCards.length; i++) {
    const cards = allCards[i]
    const count = map[cards]

    GCD = getGCD(GCD, count)

    if (GCD === 1) {
      return false
    }
  }

  return true

  function getGCD(a, b) {
    if (a === 0) {
      return b
    }

    if (b === 0) {
      return a
    }

    return getGCD(b, a % b)
  }
};
// @lc code=end
function getGCD(a, b) {
  if (a === 0) {
    return b
  }

  if (b === 0) {
    return a
  }

  return getGCD(b, a % b)
}

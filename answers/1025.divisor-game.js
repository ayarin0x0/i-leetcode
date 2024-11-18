/*
 * @lc app=leetcode id=1025 lang=javascript
 *
 * [1025] Divisor Game
 *
 * https://leetcode.com/problems/divisor-game/description/
 *
 * algorithms
 * Easy (69.34%)
 * Likes:    2239
 * Dislikes: 4157
 * Total Accepted:    286.8K
 * Total Submissions: 412.6K
 * Testcase Example:  '2'
 *
 * Alice and Bob take turns playing a game, with Alice starting first.
 *
 * Initially, there is a number n on the chalkboard. On each player's turn,
 * that player makes a move consisting of:
 *
 *
 * Choosing any x with 0 < x < n and n % x == 0.
 * Replacing the number n on the chalkboard with n - x.
 *
 *
 * Also, if a player cannot make a move, they lose the game.
 *
 * Return true if and only if Alice wins the game, assuming both players play
 * optimally.
 *
 *
 * Example 1:
 *
 *
 * Input: n = 2
 * Output: true
 * Explanation: Alice chooses 1, and Bob has no more moves.
 *
 *
 * Example 2:
 *
 *
 * Input: n = 3
 * Output: false
 * Explanation: Alice chooses 1, Bob chooses 1, and Alice has no more
 * moves.
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= n <= 1000
 *
 *
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var divisorGame = function(n) {
  /**
   * 先手拿偶数必赢, 所以如果是偶数, alice 必赢
   * 如果是奇数, 那么任何情况的 n - x 都会是偶数, 此时 bob 必定是偶数, 那么 alice 必输
   */
  return n % 2 === 0
};
// @lc code=end

findAllDivisor()
// n = 1 false
// n = 2 true
// n = 3 false
// n = 4 true
// n = 5 false
// n = 6 true
// n = 7 false
// n = 8 true
// n = 9 false
// n = 10 true
// n = 11 false

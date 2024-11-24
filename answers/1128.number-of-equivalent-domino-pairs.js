/*
 * @lc app=leetcode id=1128 lang=javascript
 *
 * [1128] Number of Equivalent Domino Pairs
 *
 * https://leetcode.com/problems/number-of-equivalent-domino-pairs/description/
 *
 * algorithms
 * Easy (48.67%)
 * Likes:    696
 * Dislikes: 335
 * Total Accepted:    74K
 * Total Submissions: 151.7K
 * Testcase Example:  '[[1,2],[2,1],[3,4],[5,6]]'
 *
 * Given a list of dominoes, dominoes[i] = [a, b] is equivalent to dominoes[j]
 * = [c, d] if and only if either (a == c and b == d), or (a == d and b == c) -
 * that is, one domino can be rotated to be equal to another domino.
 *
 * Return the number of pairs (i, j) for which 0 <= i < j < dominoes.length,
 * and dominoes[i] is equivalent to dominoes[j].
 *
 *
 * Example 1:
 *
 *
 * Input: dominoes = [[1,2],[2,1],[3,4],[5,6]]
 * Output: 1
 *
 *
 * Example 2:
 *
 *
 * Input: dominoes = [[1,2],[1,2],[1,1],[1,2],[2,2]]
 * Output: 3
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= dominoes.length <= 4 * 10^4
 * dominoes[i].length == 2
 * 1 <= dominoes[i][j] <= 9
 *
 *
 */

// @lc code=start
/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function(dominoes) {
  let result = 0

  const map = Object.create(null)

  for (let i = 0; i < dominoes.length; i++) {
    const [k1, k2] = dominoes[i]
    const count = getCount(k1, k2, map)

    result += count
  }

  return result

  function getCount(k1, k2, map) {
    // Key
    const key = k1 <= k2 ? `${k1}-${k2}` : `${k2}-${k1}`

    if (map[key] === undefined) {
      map[key] = 0

      return 0
    }

    map[key] += 1

    return map[key]
  }
};
// @lc code=end

console.log(
  // numEquivDominoPairs([[1,2],[2,1],[3,4],[5,6]])
  // numEquivDominoPairs([[1,2],[1,2],[1,1],[1,2],[2,2]])
  numEquivDominoPairs([[2,1],[1,2],[1,2],[1,2],[2,1],[1,1],[1,2],[2,2]])
)
// [2, 1]
// [1, 2]
// [1, 2]
// [1, 2]
// [2, 1]
// [1, 2]
// a a a a a a

// a a 1
// a a a 2
// a a a a 3

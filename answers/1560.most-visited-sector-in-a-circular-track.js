/*
 * @lc app=leetcode id=1560 lang=javascript
 *
 * [1560] Most Visited Sector in  a Circular Track
 *
 * https://leetcode.com/problems/most-visited-sector-in-a-circular-track/description/
 *
 * algorithms
 * Easy (58.99%)
 * Likes:    320
 * Dislikes: 644
 * Total Accepted:    34.3K
 * Total Submissions: 58.4K
 * Testcase Example:  '4\n[1,3,1,2]'
 *
 * Given an integer n and an integer array rounds. We have a circular track
 * which consists of n sectors labeled from 1 to n. A marathon will be held on
 * this track, the marathon consists of m rounds. The i^th round starts at
 * sector rounds[i - 1] and ends at sector rounds[i]. For example, round 1
 * starts at sector rounds[0] and ends at sector rounds[1]
 *
 * Return an array of the most visited sectors sorted in ascending order.
 *
 * Notice that you circulate the track in ascending order of sector numbers in
 * the counter-clockwise direction (See the first example).
 *
 *
 * Example 1:
 *
 *
 * Input: n = 4, rounds = [1,3,1,2]
 * Output: [1,2]
 * Explanation: The marathon starts at sector 1. The order of the visited
 * sectors is as follows:
 * 1 --> 2 --> 3 (end of round 1) --> 4 --> 1 (end of round 2) --> 2 (end of
 * round 3 and the marathon)
 * We can see that both sectors 1 and 2 are visited twice and they are the most
 * visited sectors. Sectors 3 and 4 are visited only once.
 *
 * Example 2:
 *
 *
 * Input: n = 2, rounds = [2,1,2,1,2,1,2,1,2]
 * Output: [2]
 *
 *
 * Example 3:
 *
 *
 * Input: n = 7, rounds = [1,3,5,7]
 * Output: [1,2,3,4,5,6,7]
 *
 *
 *
 * Constraints:
 *
 *
 * 2 <= n <= 100
 * 1 <= m <= 100
 * rounds.length == m + 1
 * 1 <= rounds[i] <= n
 * rounds[i] != rounds[i + 1] for 0 <= i < m
 *
 *
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[]} rounds
 * @return {number[]}
 */
var mostVisited = function(n, rounds) {
  const sectors = new Array(n + 1).fill(0)

  sectors[rounds[0]] += 1

  for (let i = 0; i < rounds.length - 1; i++) {
    let start = rounds[i]
    let end = rounds[i + 1]
    // console.log('[round]', start, end, sectors)

    if (end > start) {
      // console.log(`add j from ${start + 1} to ${end}`)
      for (let j = start + 1; j <= end; j++) {
        sectors[j] += 1
      }
    } else {
      // console.log(`add j from ${start + 1} to ${n}`)
      for (let j = start + 1; j <= n; j++) {
        sectors[j] += 1
      }

      // console.log(`add j from 1 to ${end}`)
      for (let j = 1; j <= end; j++) {
        sectors[j] += 1
      }
    }
  }

  const result = []
  const max = Math.max(...sectors)

  for (let i = 1; i < sectors.length; i++) {
    const visited = sectors[i]

    if (visited === max) {
      result.push(i)
    }
  }

  return result
};
// @lc code=end
console.log(
  mostVisited(4, [1, 3, 1, 2])
)

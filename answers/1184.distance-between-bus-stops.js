/*
 * @lc app=leetcode id=1184 lang=javascript
 *
 * [1184] Distance Between Bus Stops
 *
 * https://leetcode.com/problems/distance-between-bus-stops/description/
 *
 * algorithms
 * Easy (54.22%)
 * Likes:    773
 * Dislikes: 89
 * Total Accepted:    65.2K
 * Total Submissions: 120.2K
 * Testcase Example:  '[1,2,3,4]\n0\n1'
 *
 * A bus has n stops numbered from 0 to n - 1 that form a circle. We know the
 * distance between all pairs of neighboring stops where distance[i] is the
 * distance between the stops number i and (i + 1) % n.
 *
 * The bus goes along both directions i.e. clockwise and counterclockwise.
 *
 * Return the shortest distance between the given start and destination
 * stops.
 *
 *
 * Example 1:
 *
 *
 *
 *
 * Input: distance = [1,2,3,4], start = 0, destination = 1
 * Output: 1
 * Explanation: Distance between 0 and 1 is 1 or 9, minimum is 1.
 *
 *
 *
 * Example 2:
 *
 *
 *
 *
 * Input: distance = [1,2,3,4], start = 0, destination = 2
 * Output: 3
 * Explanation: Distance between 0 and 2 is 3 or 7, minimum is 3.
 *
 *
 *
 *
 * Example 3:
 *
 *
 *
 *
 * Input: distance = [1,2,3,4], start = 0, destination = 3
 * Output: 4
 * Explanation: Distance between 0 and 3 is 6 or 4, minimum is 4.
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= n <= 10^4
 * distance.length == n
 * 0 <= start, destination < n
 * 0 <= distance[i] <= 10^4
 *
 */

// @lc code=start
/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
var distanceBetweenBusStops = function(distance, start, destination) {
  if (start === destination) {
    return 0
  }

  let path1 = 0

  let temp = start
  if (start > destination) {
    start = destination
    destination = temp
  }

  // start to destination
  for (let i = start; i < destination; i++) {
    path1 += distance[i]
  }

  let path2 = 0

  // end to start
  for (let i = destination; i < distance.length; i++) {
    path2 += distance[i]
  }

  for (let i = 0; i < start; i++) {
    path2 += distance[i]
  }

  return Math.min(path1, path2)
};
// @lc code=end
// 1 2 3 4 5

distanceBetweenBusStops()

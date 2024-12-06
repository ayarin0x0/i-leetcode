/*
 * @lc app=leetcode id=1550 lang=javascript
 *
 * [1550] Three Consecutive Odds
 *
 * https://leetcode.com/problems/three-consecutive-odds/description/
 *
 * algorithms
 * Easy (68.29%)
 * Likes:    1141
 * Dislikes: 95
 * Total Accepted:    286.7K
 * Total Submissions: 420.3K
 * Testcase Example:  '[2,6,4,1]'
 *
 * Given an integer array arr, return true if there are three consecutive odd
 * numbers in the array. Otherwise, return false.
 *
 * Example 1:
 *
 *
 * Input: arr = [2,6,4,1]
 * Output: false
 * Explanation: There are no three consecutive odds.
 *
 *
 * Example 2:
 *
 *
 * Input: arr = [1,2,34,3,4,5,7,23,12]
 * Output: true
 * Explanation: [5,7,23] are three consecutive odds.
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= arr.length <= 1000
 * 1 <= arr[i] <= 1000
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function(arr) {
  for (let i = 0; i < arr.length - 2; i++) {
    if (arr[i] % 2 === 0) {
      continue
    }

    if (arr[i + 1] % 2 === 0) {
      continue
    }

    if (arr[i + 2] % 2 === 0) {
      continue
    }

    return true
  }

  return false
};
// @lc code=end

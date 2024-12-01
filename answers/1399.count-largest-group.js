/*
 * @lc app=leetcode id=1399 lang=javascript
 *
 * [1399] Count Largest Group
 *
 * https://leetcode.com/problems/count-largest-group/description/
 *
 * algorithms
 * Easy (66.48%)
 * Likes:    446
 * Dislikes: 990
 * Total Accepted:    50.3K
 * Total Submissions: 75.7K
 * Testcase Example:  '13'
 *
 * You are given an integer n.
 *
 * Each number from 1 to n is grouped according to the sum of its digits.
 *
 * Return the number of groups that have the largest size.
 *
 *
 * Example 1:
 *
 *
 * Input: n = 13
 * Output: 4
 * Explanation: There are 9 groups in total, they are grouped according sum of
 * its digits of numbers from 1 to 13:
 * [1,10], [2,11], [3,12], [4,13], [5], [6], [7], [8], [9].
 * There are 4 groups with largest size.
 *
 *
 * Example 2:
 *
 *
 * Input: n = 2
 * Output: 2
 * Explanation: There are 2 groups [1], [2] of size 1.
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= n <= 10^4
 *
 *
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countLargestGroup = function(n) {
  const map = []

  let max = -1

  for (let i = 1; i <= n; i++) {
    const sum = getDigitsSum(i)

    if (map[sum] === undefined) {
      map[sum] = []
    }

    map[sum].push(i)

    max = Math.max(map[sum].length, max)
  }

  let result = 0

  for (let i = 1; i < map.length; i++) {
    const len = map[i].length

    if (len === max) {
      result += 1
    }
  }

  return result
};

function getDigitsSum(n) {
  if (n < 10) {
    return n
  }

  let sum = 0

  for (;n > 0;) {
    sum += n % 10
    n = Math.floor(n / 10)
  }

  return sum
}
// @lc code=end

console.log(
  countLargestGroup(24)
)

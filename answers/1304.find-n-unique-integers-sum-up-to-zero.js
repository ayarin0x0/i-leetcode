/*
 * @lc app=leetcode id=1304 lang=javascript
 *
 * [1304] Find N Unique Integers Sum up to Zero
 *
 * https://leetcode.com/problems/find-n-unique-integers-sum-up-to-zero/description/
 *
 * algorithms
 * Easy (76.16%)
 * Likes:    2018
 * Dislikes: 602
 * Total Accepted:    231.4K
 * Total Submissions: 303.9K
 * Testcase Example:  '5'
 *
 * Given an integer n, return any array containing n unique integers such that
 * they add up to 0.
 *
 *
 * Example 1:
 *
 *
 * Input: n = 5
 * Output: [-7,-1,1,3,4]
 * Explanation: These arrays also are accepted [-5,-1,1,2,3] ,
 * [-3,-1,2,-2,4].
 *
 *
 * Example 2:
 *
 *
 * Input: n = 3
 * Output: [-1,0,1]
 *
 *
 * Example 3:
 *
 *
 * Input: n = 1
 * Output: [0]
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
 * @return {number[]}
 */
var sumZero = function(n) {
  const result = []

  if (n % 2 === 1) {
    result.push(0)
    n -= 1
  }

  const halfN = n / 2

  for (let i = 1; i <= halfN; i++) {
    result.push(i)
    result.push(-i)
  }

  return result
};
// @lc code=end

console.log(
  sumZero(5)
)

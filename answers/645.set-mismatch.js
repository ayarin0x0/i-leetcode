/*
 * @lc app=leetcode id=645 lang=javascript
 *
 * [645] Set Mismatch
 *
 * https://leetcode.com/problems/set-mismatch/description/
 *
 * algorithms
 * Easy (44.60%)
 * Likes:    4809
 * Dislikes: 1172
 * Total Accepted:    484.7K
 * Total Submissions: 1.1M
 * Testcase Example:  '[1,2,2,4]'
 *
 * You have a set of integers s, which originally contains all the numbers from
 * 1 to n. Unfortunately, due to some error, one of the numbers in s got
 * duplicated to another number in the set, which results in repetition of one
 * number and loss of another number.
 *
 * You are given an integer array nums representing the data status of this set
 * after the error.
 *
 * Find the number that occurs twice and the number that is missing and return
 * them in the form of an array.
 *
 *
 * Example 1:
 * Input: nums = [1,2,2,4]
 * Output: [2,3]
 * Example 2:
 * Input: nums = [1,1]
 * Output: [1,2]
 *
 *
 * Constraints:
 *
 *
 * 2 <= nums.length <= 10^4
 * 1 <= nums[i] <= 10^4
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
  let duplicatedNum
  let missingNum = (1 + nums.length) * nums.length / 2

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    const index = Math.abs(num) - 1

    const targetNum = nums[index]

    if (targetNum < 0) {
      duplicatedNum = index + 1

      continue
    }

    nums[index] = -targetNum
    missingNum -= index + 1
  }

  return [duplicatedNum, missingNum]
};
// @lc code=end

console.log(
  findErrorNums([1, 2, 2, 4]),
  // findErrorNums([2, 3, 2])
)

/*
 * @lc app=leetcode id=228 lang=javascript
 *
 * [228] Summary Ranges
 *
 * https://leetcode.com/problems/summary-ranges/description/
 *
 * algorithms
 * Easy (49.55%)
 * Likes:    4035
 * Dislikes: 2207
 * Total Accepted:    641.3K
 * Total Submissions: 1.2M
 * Testcase Example:  '[0,1,2,4,5,7]'
 *
 * You are given a sorted unique integer array nums.
 *
 * A range [a,b] is the set of all integers from a to b (inclusive).
 *
 * Return the smallest sorted list of ranges that cover all the numbers in the
 * array exactly. That is, each element of nums is covered by exactly one of
 * the ranges, and there is no integer x such that x is in one of the ranges
 * but not in nums.
 *
 * Each range [a,b] in the list should be output as:
 *
 *
 * "a->b" if a != b
 * "a" if a == b
 *
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [0,1,2,4,5,7]
 * Output: ["0->2","4->5","7"]
 * Explanation: The ranges are:
 * [0,2] --> "0->2"
 * [4,5] --> "4->5"
 * [7,7] --> "7"
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [0,2,3,4,6,8,9]
 * Output: ["0","2->4","6","8->9"]
 * Explanation: The ranges are:
 * [0,0] --> "0"
 * [2,4] --> "2->4"
 * [6,6] --> "6"
 * [8,9] --> "8->9"
 *
 *
 *
 * Constraints:
 *
 *
 * 0 <= nums.length <= 20
 * -2^31 <= nums[i] <= 2^31 - 1
 * All the values of nums are unique.
 * nums is sorted in ascending order.
 *
 *
 */

// @lc code=start
const STATUS = {
  OK: 1,
  FINISHED: 2
}

function Pack(start, end) {
  return start === end ? `${start}` : `${start}->${end}`
}

/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
  const result = []

  let process = 0

  for (;;) {
    const [status, start, end] = buildRange(nums, process)

    process = end + 1

    if (status === STATUS.OK) {
      result.push(Pack(nums[start], nums[end]))
    }

    if (status === STATUS.FINISHED) {
      break
    }
  }

  return result


  function buildRange(nums, start) {
    for (let i = start; i < nums.length; i++) {
      const num = nums[i]
      const nextNum = nums[i + 1]

      if (num + 1 === nextNum) {
        continue
      }

      return [STATUS.OK, start, i]
    }

    return [STATUS.FINISHED]
  }
}
// @lc code=end

console.log(
  summaryRanges([0,1,2,4,5,7,9,10,12,14,15,16,27,28])
)

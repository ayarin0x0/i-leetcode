/*
 * @lc app=leetcode id=448 lang=javascript
 *
 * [448] Find All Numbers Disappeared in an Array
 *
 * https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/description/
 *
 * algorithms
 * Easy (61.44%)
 * Likes:    9502
 * Dislikes: 501
 * Total Accepted:    952.7K
 * Total Submissions: 1.6M
 * Testcase Example:  '[4,3,2,7,8,2,3,1]'
 *
 * Given an array nums of n integers where nums[i] is in the range [1, n],
 * return an array of all the integers in the range [1, n] that do not appear
 * in nums.
 *
 *
 * Example 1:
 * Input: nums = [4,3,2,7,8,2,3,1]
 * Output: [5,6]
 * Example 2:
 * Input: nums = [1,1]
 * Output: [2]
 *
 *
 * Constraints:
 *
 *
 * n == nums.length
 * 1 <= n <= 10^5
 * 1 <= nums[i] <= n
 *
 *
 *
 * Follow up: Could you do it without extra space and in O(n) runtime? You may
 * assume the returned list does not count as extra space.
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  const candidates = []

  for (let i = 0; i < nums.length; i++) {
    let value = nums[i]

    // 跳过 nums[i] === i + 1 的情况
    if (value === i + 1) {
      continue
    }

    for (;;) {
      const target = nums[value - 1]

      if (value === target) {
        candidates.push(i + 1)
        nums[i] = undefined

        break
      }

      // swap
      if (value < i + 1) {
        candidates.splice(candidates.indexOf(value), 1)
      }

      nums[value - 1] = value
      nums[i] = target
      value = target

      if (value === i + 1) {
        break
      }
    }
  }

  return candidates
};
// @lc code=end

// [4,3,2,7,7,2,3,1];
// [7,3,2,4,7,2,3,1];
// [3,3,2,4,7,2,7,1];
// [2,3,3,4,7,2,7,1];
// [3,2,3,4,7,2,7,1];

// [undefined,2,3,4,7,2,7,1];
// [undefined,2,3,4,undefined,undefined,7,1];
// [1,2,3,4,undefined,undefined,7,undefined];





// [10,2,5,10,9,1,1,4,3,7]
// [7,2,5,10,9,1,1,4,3,10]
// [1,2,5,10,9,1,7,4,3,10]


// [1,2,9,10,5,1,7,4,3,10]
// [1,2,5,10,9,1,7,4,3,10]
// [1,2,3,10,5,1,7,4,9,10]
// [1,2,3,undefined,5,1,7,4,9,10] // add 4
// [1,2,3,undefined,5,undefined,7,4,9,10] // add 6
// [1,2,3,4,5,undefined,7,undefined,9,10] // remove 4 add 8


// console.log(
//   findDisappearedNumbers([10,2,5,10,9,1,1,4,3,7])
// )


/**
 * 根据数组里的每一项的值, 将该值对应的下标的值标记为负数.
 * 负数说明数组里的该 index 的值已经出现过了
 *
 * 再次遍历, 如果下标的值还是正数, 那么就是没有出现过的值 (不用管值的内容, 只需要知道这个值的下标是多少)
 * @param {*} nums
 * @returns
 */
var findDisappearedNumbers2 = function(nums) {
  nums.forEach(value => {
    const indexBasedOnThisValue = Math.abs(value) - 1

    console.log('nums[indexBasedOnThisValue]', nums[indexBasedOnThisValue])
    if (nums[indexBasedOnThisValue] > 0) {
      nums[indexBasedOnThisValue] = nums[indexBasedOnThisValue] * -1
    }
  })

  console.log(nums)

  const result = []

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      result.push(i + 1)
    }
  }

  console.log('result', result)
  return result
}

console.log(findDisappearedNumbers2([10,2,5,10,9,1,1,4,3,7]))

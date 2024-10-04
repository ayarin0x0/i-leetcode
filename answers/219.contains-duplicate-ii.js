/*
 * @lc app=leetcode id=219 lang=javascript
 *
 * [219] Contains Duplicate II
 *
 * https://leetcode.com/problems/contains-duplicate-ii/description/
 *
 * algorithms
 * Easy (43.52%)
 * Likes:    6265
 * Dislikes: 3124
 * Total Accepted:    1.1M
 * Total Submissions: 2.3M
 * Testcase Example:  '[1,2,3,1]\n3'
 *
 * Given an integer array nums and an integer k, return true if there are two
 * distinct indices i and j in the array such that nums[i] == nums[j] and abs(i
 * - j) <= k.
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [1,2,3,1], k = 3
 * Output: true
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [1,0,1,1], k = 1
 * Output: true
 *
 *
 * Example 3:
 *
 *
 * Input: nums = [1,2,3,1,2,3], k = 2
 * Output: false
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= nums.length <= 10^5
 * -10^9 <= nums[i] <= 10^9
 * 0 <= k <= 10^5
 *
 *
 */

// @lc code=start

var containsDuplicateInSlider = function(nums, size) {
  const map = Object.create(null)

  for (let i = 0; i < size; i++) {
    const num = nums[i]

    if (map[num] === undefined) {
      map[num] = true
    } else {
      return true
    }
  }

  return false
}

var containsDuplicate = function(target, nums, start, end) {
  for (let i = start; i < end; i++) {
    if (nums[i] === target) {
      return true
    }
  }

  return false
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate2 = function(nums, k) {
  if (k === 0) {
    return false
  }

  const isFirstSliderDuplicate = containsDuplicateInSlider(nums, Math.min(nums.length, k))

  if (isFirstSliderDuplicate) {
    return true
  }

  const STEP_FORWARD = 1

  const distance = nums.length - k

  for (let leftPointer = 0; leftPointer < distance; leftPointer += STEP_FORWARD) {
    const rightPointer = leftPointer + k

    const isSliderDuplicate = containsDuplicate(nums[rightPointer], nums, leftPointer, rightPointer)

    if (isSliderDuplicate) {
      return true
    }
  }

  return false
}

var containsNearbyDuplicate = function(nums, k) {
  const map = Object.create(null)

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    const lastSameNumIndex = map[num]
    if (lastSameNumIndex === undefined) {
      map[num] = i

      continue
    }

    if (i - lastSameNumIndex <= k) {
      return true
    }

    map[num] = i
  }

  return false
}
// @lc code=end

console.log(
  containsNearbyDuplicate([1, 2, 3, 1], 2)
)

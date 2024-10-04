/*
 * @lc app=leetcode id=26 lang=javascript
 *
 * [26] Remove Duplicates from Sorted Array
 *
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/
 *
 * algorithms
 * Easy (53.26%)
 * Likes:    12776
 * Dislikes: 16859
 * Total Accepted:    3.5M
 * Total Submissions: 6.5M
 * Testcase Example:  '[1,1,2]'
 *
 * Given an integer array nums sorted in non-decreasing order, remove the
 * duplicates in-place such that each unique element appears only once. The
 * relative order of the elements should be kept the same. Then return the
 * number of unique elements in nums.
 *
 * Consider the number of unique elements of nums to be k, to get accepted, you
 * need to do the following things:
 *
 *
 * Change the array nums such that the first k elements of nums contain the
 * unique elements in the order they were present in nums initially. The
 * remaining elements of nums are not important as well as the size of
 * nums.
 * Return k.
 *
 *
 * Custom Judge:
 *
 * The judge will test your solution with the following code:
 *
 *
 * int[] nums = [...]; // Input array
 * int[] expectedNums = [...]; // The expected answer with correct length
 *
 * int k = removeDuplicates(nums); // Calls your implementation
 *
 * assert k == expectedNums.length;
 * for (int i = 0; i < k; i++) {
 * ⁠   assert nums[i] == expectedNums[i];
 * }
 *
 *
 * If all assertions pass, then your solution will be accepted.
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [1,1,2]
 * Output: 2, nums = [1,2,_]
 * Explanation: Your function should return k = 2, with the first two elements
 * of nums being 1 and 2 respectively.
 * It does not matter what you leave beyond the returned k (hence they are
 * underscores).
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [0,0,1,1,1,2,2,3,3,4]
 * Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
 * Explanation: Your function should return k = 5, with the first five elements
 * of nums being 0, 1, 2, 3, and 4 respectively.
 * It does not matter what you leave beyond the returned k (hence they are
 * underscores).
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= nums.length <= 3 * 10^4
 * -100 <= nums[i] <= 100
 * nums is sorted in non-decreasing order.
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  const emptyIndexQueue = []
  let emptyPointer = 0

  let anchor = NaN
  for (let i = 0; i < nums.length; i++) {
    const cur = nums[i]

    if (anchor !== cur) {
      anchor = cur

      const emptyIndex = emptyIndexQueue[emptyPointer]
      if (emptyIndex !== undefined) {
        nums[emptyIndex] = cur
        emptyIndexQueue.push(i)
        emptyPointer += 1
      }

      continue
    }

    emptyIndexQueue.push(i)
  }

  return nums.length - (emptyIndexQueue.length - emptyPointer)
}
// @lc code=end

// 1 1 2 3 3 4
// 1 _ 2 3 3 4
// 1 2 _ 3 3 4
// 1 2 3 _ 3 4
// 1 2 3 _ _ 4
// 1 2 3 4 _ _

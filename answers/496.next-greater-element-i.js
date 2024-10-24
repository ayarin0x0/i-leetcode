/*
 * @lc app=leetcode id=496 lang=javascript
 *
 * [496] Next Greater Element I
 *
 * https://leetcode.com/problems/next-greater-element-i/description/
 *
 * algorithms
 * Easy (73.17%)
 * Likes:    8243
 * Dislikes: 814
 * Total Accepted:    844.8K
 * Total Submissions: 1.2M
 * Testcase Example:  '[4,1,2]\n[1,3,4,2]'
 *
 * The next greater element of some element x in an array is the first greater
 * element that is to the right of x in the same array.
 *
 * You are given two distinct 0-indexed integer arrays nums1 and nums2, where
 * nums1 is a subset of nums2.
 *
 * For each 0 <= i < nums1.length, find the index j such that nums1[i] ==
 * nums2[j] and determine the next greater element of nums2[j] in nums2. If
 * there is no next greater element, then the answer for this query is -1.
 *
 * Return an array ans of length nums1.length such that ans[i] is the next
 * greater element as described above.
 *
 *
 * Example 1:
 *
 *
 * Input: nums1 = [4,1,2], nums2 = [1,3,4,2]
 * Output: [-1,3,-1]
 * Explanation: The next greater element for each value of nums1 is as follows:
 * - 4 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so
 * the answer is -1.
 * - 1 is underlined in nums2 = [1,3,4,2]. The next greater element is 3.
 * - 2 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so
 * the answer is -1.
 *
 *
 * Example 2:
 *
 *
 * Input: nums1 = [2,4], nums2 = [1,2,3,4]
 * Output: [3,-1]
 * Explanation: The next greater element for each value of nums1 is as follows:
 * - 2 is underlined in nums2 = [1,2,3,4]. The next greater element is 3.
 * - 4 is underlined in nums2 = [1,2,3,4]. There is no next greater element, so
 * the answer is -1.
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= nums1.length <= nums2.length <= 1000
 * 0 <= nums1[i], nums2[i] <= 10^4
 * All integers in nums1 and nums2 are unique.
 * All the integers of nums1 also appear in nums2.
 *
 *
 *
 * Follow up: Could you find an O(nums1.length + nums2.length) solution?
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
  if (nums1.length === 0) {
    return []
  }

  const map = Object.create(null)

  for (let i = 0; i < nums1.length; i++) {
    const num = nums1[i]

    map[num] = -1
  }

  const candidates = []

  for (let i = 0; i < nums2.length; i++) {
    const num = nums2[i]

    if (map[num] === -1) {
      candidates.push(num)
    }

    if (candidates.length === 0) {
      continue
    }

    for (let j = 0; j < candidates.length; j++) {
      const candidate = candidates[j]

      if (candidate === -1) {
        continue
      }

      if (num > candidate) {
        map[candidate] = num

        candidates[j] = -1
      }
    }
  }

  return nums1.map(num => map[num])
};
// @lc code=end

console.log(
  nextGreaterElement([], [1, 3, 4, 2])
)
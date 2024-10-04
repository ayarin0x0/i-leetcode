/*
 * @lc app=leetcode id=349 lang=javascript
 *
 * [349] Intersection of Two Arrays
 *
 * https://leetcode.com/problems/intersection-of-two-arrays/description/
 *
 * algorithms
 * Easy (71.66%)
 * Likes:    6159
 * Dislikes: 2297
 * Total Accepted:    1.3M
 * Total Submissions: 1.8M
 * Testcase Example:  '[1,2,2,1]\n[2,2]'
 *
 * Given two integer arrays nums1 and nums2, return an array of their
 * intersection. Each element in the result must be unique and you may return
 * the result in any order.
 *
 *
 * Example 1:
 *
 *
 * Input: nums1 = [1,2,2,1], nums2 = [2,2]
 * Output: [2]
 *
 *
 * Example 2:
 *
 *
 * Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
 * Output: [9,4]
 * Explanation: [4,9] is also accepted.
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= nums1.length, nums2.length <= 1000
 * 0 <= nums1[i], nums2[i] <= 1000
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  const map = Object.create(null)

  let main = nums1
  let sub = nums2

  if (nums1.length < nums2.length) {
    main = nums2
    sub = nums1
  }

  for (let i = 0; i < main.length; i++) {
    const num = main[i]

    if (map[num] === undefined) {
      map[num] = 0
    }
  }

  const result = []

  for (let i = 0; i < sub.length; i++) {
    const num = sub[i]

    const count = map[num]
    if (count === 0) {
      result.push(num)
      map[num] += 1
    }
  }

  return result
}
// @lc code=end

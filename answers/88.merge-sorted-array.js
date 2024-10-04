/*
 * @lc app=leetcode id=88 lang=javascript
 *
 * [88] Merge Sorted Array
 *
 * https://leetcode.com/problems/merge-sorted-array/description/
 *
 * algorithms
 * Easy (48.03%)
 * Likes:    12835
 * Dislikes: 1416
 * Total Accepted:    2.4M
 * Total Submissions: 5.1M
 * Testcase Example:  '[1,2,3,0,0,0]\n3\n[2,5,6]\n3'
 *
 * You are given two integer arrays nums1 and nums2, sorted in non-decreasing
 * order, and two integers m and n, representing the number of elements in
 * nums1 and nums2 respectively.
 *
 * Merge nums1 and nums2 into a single array sorted in non-decreasing order.
 *
 * The final sorted array should not be returned by the function, but instead
 * be stored inside the array nums1. To accommodate this, nums1 has a length of
 * m + n, where the first m elements denote the elements that should be merged,
 * and the last n elements are set to 0 and should be ignored. nums2 has a
 * length of n.
 *
 *
 * Example 1:
 *
 *
 * Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
 * Output: [1,2,2,3,5,6]
 * Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
 * The result of the merge is [1,2,2,3,5,6] with the underlined elements coming
 * from nums1.
 *
 *
 * Example 2:
 *
 *
 * Input: nums1 = [1], m = 1, nums2 = [], n = 0
 * Output: [1]
 * Explanation: The arrays we are merging are [1] and [].
 * The result of the merge is [1].
 *
 *
 * Example 3:
 *
 *
 * Input: nums1 = [0], m = 0, nums2 = [1], n = 1
 * Output: [1]
 * Explanation: The arrays we are merging are [] and [1].
 * The result of the merge is [1].
 * Note that because m = 0, there are no elements in nums1. The 0 is only there
 * to ensure the merge result can fit in nums1.
 *
 *
 *
 * Constraints:
 *
 *
 * nums1.length == m + n
 * nums2.length == n
 * 0 <= m, n <= 200
 * 1 <= m + n <= 200
 * -10^9 <= nums1[i], nums2[j] <= 10^9
 *
 *
 *
 * Follow up: Can you come up with an algorithm that runs in O(m + n) time?
 *
 */

// @lc code=start
/**
 * 1. 由于需要 in-place 的 merge, 而且时间复杂度为 O(m + n), 所以理论上一次遍历就能 AC
 * 2. 现在遍历 nums1 的数, 将该数与 buffer 弹出的数 B 对比, 如果小于 B, 将 i+1 以比较下一个 nums1
 *  如果大于 B, 那么将这个数字加入 buffer.
 * 3. Buffer 中包含两个有序队列, 一个是 nums2, 一个是由 nums1 中比当时的 B 大的数字组成的.
 *  每次从 buffer 取出的两个队列中较小的那一个数
 * 4. 最后将 buffer 里的所有数值替换掉 nums1 里的 m 部分, 应该刚好可以组成结果
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  if (n === 0) {
    return nums1
  }

  const buffer = {
    queue: [],
    queuePointer: 0,
    nums2Pointer: 0,
    geted: null,

    flush() {
      this.geted = null
    },

    get() {
      if (this.geted !== null) {
        return this.geted
      }

      let result

      const nInQueue = this.queue[this.queuePointer]
      const nInNums2 = nums2[this.nums2Pointer]

      if (nInQueue === undefined) {
        this.nums2Pointer += 1

        result = nInNums2
      } else if (nInNums2 === undefined) {
        this.queuePointer += 1

        result = nInQueue
      } else if (nInQueue <= nInNums2) {
        this.queuePointer += 1

        result = nInQueue
      } else {
        this.nums2Pointer += 1

        result = nInNums2
      }

      this.geted = result

      return result
    },

    add(num) {
      this.queue.push(num)
    },
  }

  for (let i = 0; i < m;) {
    const num = nums1[i]
    const candidate = buffer.get()

    if (num <= candidate) {
      i += 1

      continue
    }

    buffer.flush()
    nums1[i] = candidate
    i += 1
    buffer.add(num)
  }

  for (let i = m; i < m + n; i++) {
    nums1[i] = buffer.get()
    buffer.flush()
  }

  return nums1
}
// @lc code=end

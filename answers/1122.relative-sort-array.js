/*
 * @lc app=leetcode id=1122 lang=javascript
 *
 * [1122] Relative Sort Array
 *
 * https://leetcode.com/problems/relative-sort-array/description/
 *
 * algorithms
 * Easy (74.81%)
 * Likes:    3191
 * Dislikes: 190
 * Total Accepted:    350.3K
 * Total Submissions: 467.9K
 * Testcase Example:  '[2,3,1,3,2,4,6,7,9,2,19]\n[2,1,4,3,9,6]'
 *
 * Given two arrays arr1 and arr2, the elements of arr2 are distinct, and all
 * elements in arr2 are also in arr1.
 *
 * Sort the elements of arr1 such that the relative ordering of items in arr1
 * are the same as in arr2. Elements that do not appear in arr2 should be
 * placed at the end of arr1 in ascending order.
 *
 *
 * Example 1:
 *
 *
 * Input: arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
 * Output: [2,2,2,1,4,3,3,9,6,7,19]
 *
 *
 * Example 2:
 *
 *
 * Input: arr1 = [28,6,22,8,44,17], arr2 = [22,28,8,6]
 * Output: [22,28,8,6,17,44]
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= arr1.length, arr2.length <= 1000
 * 0 <= arr1[i], arr2[i] <= 1000
 * All the elements of arr2 are distinct.
 * Each arr2[i] is in arr1.
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
  const result = []
  const other = []

  const counter = []

  const map = Object.create(null)
  for (let i = 0; i < arr2.length; i++) {
    const num = arr2[i]

    map[num] = i
    counter[i] = 0
  }

  for (let i = 0; i < arr1.length; i++) {
    const num = arr1[i]
    const indexInArr2 = map[num]

    if (indexInArr2 === undefined) {
      other.push(num)

      continue
    }

    counter[indexInArr2] += 1
  }

  let counterPointer = 0
  const len = arr1.length - other.length

  for (let i = 0; i < len; i++) {
    // all elements in arr2 are also in arr1.
    // 所以 counter[counterPointer] 在初始状态必定大于 0
    counter[counterPointer] -= 1

    const newNum = arr2[counterPointer]

    result.push(newNum)

    if (counter[counterPointer] < 1) {
      counterPointer += 1
    }
  }

  other.sort((a, b) => a - b)

  for (let i = 0; i < other.length; i++) {
    result.push(other[i])
  }

  return result
};
// @lc code=end

console.log(
  // relativeSortArray(
  //   [2,3,1,3,2,4,6,7,9,2,19],
  //   [2,1,4,3,9,6],
  // )
  relativeSortArray(
    [28,6,22,8,44,17],
    [22,28,8,6],
  )
)

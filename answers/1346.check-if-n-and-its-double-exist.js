/*
 * @lc app=leetcode id=1346 lang=javascript
 *
 * [1346] Check If N and Its Double Exist
 *
 * https://leetcode.com/problems/check-if-n-and-its-double-exist/description/
 *
 * algorithms
 * Easy (37.49%)
 * Likes:    1954
 * Dislikes: 210
 * Total Accepted:    383.8K
 * Total Submissions: 1M
 * Testcase Example:  '[10,2,5,3]'
 *
 * Given an array arr of integers, check if there exist two indices i and j
 * such that :
 *
 *
 * i != j
 * 0 <= i, j < arr.length
 * arr[i] == 2 * arr[j]
 *
 *
 *
 * Example 1:
 *
 *
 * Input: arr = [10,2,5,3]
 * Output: true
 * Explanation: For i = 0 and j = 2, arr[i] == 10 == 2 * 5 == 2 * arr[j]
 *
 *
 * Example 2:
 *
 *
 * Input: arr = [3,1,7,11]
 * Output: false
 * Explanation: There is no i and j that satisfy the conditions.
 *
 *
 *
 * Constraints:
 *
 *
 * 2 <= arr.length <= 500
 * -10^3 <= arr[i] <= 10^3
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
  const map = Object.create(null)

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i]

    const halfNum = num
    const doubleNum = num * 4

    if (map[2 * num] !== undefined) {
      return true
    }

    map[halfNum] = i
    map[doubleNum] = i
  }

  return false
};
// @lc code=end

console.log(
  // checkIfExist([10, 2, 5, 3])
  // checkIfExist([3, 1, 7, 11])
  // checkIfExist([4,-7,11,4,18])
)

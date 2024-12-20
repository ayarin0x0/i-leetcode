/*
 * @lc app=leetcode id=1588 lang=javascript
 *
 * [1588] Sum of All Odd Length Subarrays
 *
 * https://leetcode.com/problems/sum-of-all-odd-length-subarrays/description/
 *
 * algorithms
 * Easy (83.28%)
 * Likes:    3741
 * Dislikes: 310
 * Total Accepted:    212.9K
 * Total Submissions: 255.6K
 * Testcase Example:  '[1,4,2,5,3]'
 *
 * Given an array of positive integers arr, return the sum of all possible
 * odd-length subarrays of arr.
 *
 * A subarray is a contiguous subsequence of the array.
 *
 *
 * Example 1:
 *
 *
 * Input: arr = [1,4,2,5,3]
 * Output: 58
 * Explanation: The odd-length subarrays of arr and their sums are:
 * [1] = 1
 * [4] = 4
 * [2] = 2
 * [5] = 5
 * [3] = 3
 * [1,4,2] = 7
 * [4,2,5] = 11
 * [2,5,3] = 10
 * [1,4,2,5,3] = 15
 * If we add all these together we get 1 + 4 + 2 + 5 + 3 + 7 + 11 + 10 + 15 =
 * 58
 *
 * Example 2:
 *
 *
 * Input: arr = [1,2]
 * Output: 3
 * Explanation: There are only 2 subarrays of odd length, [1] and [2]. Their
 * sum is 3.
 *
 * Example 3:
 *
 *
 * Input: arr = [10,11,12]
 * Output: 66
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= arr.length <= 100
 * 1 <= arr[i] <= 1000
 *
 *
 *
 * Follow up:
 *
 * Could you solve this problem in O(n) time complexity?
 *
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
  let result = 0

  for (let pointer = 1; pointer <= arr.length; pointer += 2) {
    for (let offset = 0; offset <= arr.length - pointer; offset++) {
      for (let i = 0; i < pointer; i++) {
        result += arr[offset + i]
      }
    }
  }

  return result
};
// @lc code=end

console.log(
  sumOddLengthSubarrays([1, 4, 2, 5 ,3])
)

/*
 * @lc app=leetcode id=1539 lang=javascript
 *
 * [1539] Kth Missing Positive Number
 *
 * https://leetcode.com/problems/kth-missing-positive-number/description/
 *
 * algorithms
 * Easy (60.85%)
 * Likes:    6900
 * Dislikes: 484
 * Total Accepted:    527K
 * Total Submissions: 861.1K
 * Testcase Example:  '[2,3,4,7,11]\n5'
 *
 * Given an array arr of positive integers sorted in a strictly increasing
 * order, and an integer k.
 *
 * Return the k^th positive integer that is missing from this array.
 *
 *
 * Example 1:
 *
 *
 * Input: arr = [2,3,4,7,11], k = 5
 * Output: 9
 * Explanation: The missing positive integers are [1,5,6,8,9,10,12,13,...]. The
 * 5^th missing positive integer is 9.
 *
 *
 * Example 2:
 *
 *
 * Input: arr = [1,2,3,4], k = 2
 * Output: 6
 * Explanation: The missing positive integers are [5,6,7,...]. The 2^nd missing
 * positive integer is 6.
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= arr.length <= 1000
 * 1 <= arr[i] <= 1000
 * 1 <= k <= 1000
 * arr[i] < arr[j] for 1 <= i < j <= arr.length
 *
 *
 *
 * Follow up:
 *
 * Could you solve this problem in less than O(n) complexity?
 *
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
  for (let i = 0; i <= k && i < arr.length; i++) {
    const num = arr[i]

    if (num <= k) {
      k += 1
    }
  }

  return k
};

console.log(
  findKthPositive([2,3,4,7,11], 5)
)
// @lc code=end

// 1 2 3 4 5 6 7 8 9 10 11

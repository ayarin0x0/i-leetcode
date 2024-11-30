/*
 * @lc app=leetcode id=1356 lang=javascript
 *
 * [1356] Sort Integers by The Number of 1 Bits
 *
 * https://leetcode.com/problems/sort-integers-by-the-number-of-1-bits/description/
 *
 * algorithms
 * Easy (78.36%)
 * Likes:    2497
 * Dislikes: 122
 * Total Accepted:    238.6K
 * Total Submissions: 304.1K
 * Testcase Example:  '[0,1,2,3,4,5,6,7,8]'
 *
 * You are given an integer array arr. Sort the integers in the array in
 * ascending order by the number of 1's in their binary representation and in
 * case of two or more integers have the same number of 1's you have to sort
 * them in ascending order.
 *
 * Return the array after sorting it.
 *
 *
 * Example 1:
 *
 *
 * Input: arr = [0,1,2,3,4,5,6,7,8]
 * Output: [0,1,2,4,8,3,5,6,7]
 * Explantion: [0] is the only integer with 0 bits.
 * [1,2,4,8] all have 1 bit.
 * [3,5,6] have 2 bits.
 * [7] has 3 bits.
 * The sorted array by bits is [0,1,2,4,8,3,5,6,7]
 *
 *
 * Example 2:
 *
 *
 * Input: arr = [1024,512,256,128,64,32,16,8,4,2,1]
 * Output: [1,2,4,8,16,32,64,128,256,512,1024]
 * Explantion: All integers have 1 bit in the binary representation, you should
 * just sort them in ascending order.
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= arr.length <= 500
 * 0 <= arr[i] <= 10^4
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {
  arr.sort((a, b) => {
    const countA = countBits(a)
    const countB = countBits(b)

    return countA !== countB ? countA - countB : a - b
  })

  return arr
};

function countBits(n) {
  let count = 0

  for (;n !== 0;) {
    if (n & 1 === 1) {
      count += 1
    }

    n = n >>> 1
  }

  return count
}
// @lc code=end

console.log(
  sortByBits([0,1,2,3,4,5,6,7,8])
)

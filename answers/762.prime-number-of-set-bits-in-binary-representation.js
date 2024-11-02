/*
 * @lc app=leetcode id=762 lang=javascript
 *
 * [762] Prime Number of Set Bits in Binary Representation
 *
 * https://leetcode.com/problems/prime-number-of-set-bits-in-binary-representation/description/
 *
 * algorithms
 * Easy (70.09%)
 * Likes:    726
 * Dislikes: 510
 * Total Accepted:    105.4K
 * Total Submissions: 150.2K
 * Testcase Example:  '6\n10'
 *
 * Given two integers left and right, return the count of numbers in the
 * inclusive range [left, right] having a prime number of set bits in their
 * binary representation.
 *
 * Recall that the number of set bits an integer has is the number of 1's
 * present when written in binary.
 *
 *
 * For example, 21 written in binary is 10101, which has 3 set bits.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: left = 6, right = 10
 * Output: 4
 * Explanation:
 * 6  -> 110 (2 set bits, 2 is prime)
 * 7  -> 111 (3 set bits, 3 is prime)
 * 8  -> 1000 (1 set bit, 1 is not prime)
 * 9  -> 1001 (2 set bits, 2 is prime)
 * 10 -> 1010 (2 set bits, 2 is prime)
 * 4 numbers have a prime number of set bits.
 *
 *
 * Example 2:
 *
 *
 * Input: left = 10, right = 15
 * Output: 5
 * Explanation:
 * 10 -> 1010 (2 set bits, 2 is prime)
 * 11 -> 1011 (3 set bits, 3 is prime)
 * 12 -> 1100 (2 set bits, 2 is prime)
 * 13 -> 1101 (3 set bits, 3 is prime)
 * 14 -> 1110 (3 set bits, 3 is prime)
 * 15 -> 1111 (4 set bits, 4 is not prime)
 * 5 numbers have a prime number of set bits.
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= left <= right <= 10^6
 * 0 <= right - left <= 10^4
 *
 *
 */

// @lc code=start
/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var countPrimeSetBits = function(left, right) {
  // 1 <= left <= right <= 106
  // Math.pow(2, 19) < Math.pow(10, 6)
  // Math.pow(2, 20) > Math.pow(10, 6)
  // 所以最多有 20 个 1
  // 所以可以写死 20 以内的质数
  const primeMap = {
    2: true,
    3: true,
    5: true,
    7: true,
    11: true,
    13: true,
    17: true,
    19: true,
  }

  let result = 0

  for (let i = left; i <= right; i++) {
    const count = countOf1Bits(i)

    if (primeMap[count]) {
      result += 1
    }
  }

  return result

  function countOf1Bits(num) {
    let count = 0

    const mask = 1

    for (;num > 0;) {
      if (num & mask === 1) {
        count += 1
      }

      num = num >> 1
    }

    return count
  }
};
// @lc code=end

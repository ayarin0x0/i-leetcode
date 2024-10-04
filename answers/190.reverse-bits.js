/*
 * @lc app=leetcode id=190 lang=javascript
 *
 * [190] Reverse Bits
 *
 * https://leetcode.com/problems/reverse-bits/description/
 *
 * algorithms
 * Easy (56.09%)
 * Likes:    5156
 * Dislikes: 1470
 * Total Accepted:    861.7K
 * Total Submissions: 1.4M
 * Testcase Example:  '00000010100101000001111010011100'
 *
 * Reverse bits of a given 32 bits unsigned integer.
 *
 * Note:
 *
 *
 * Note that in some languages, such as Java, there is no unsigned integer
 * type. In this case, both input and output will be given as a signed integer
 * type. They should not affect your implementation, as the integer's internal
 * binary representation is the same, whether it is signed or unsigned.
 * In Java, the compiler represents the signed integers using 2's complement
 * notation. Therefore, in Example 2 above, the input represents the signed
 * integer -3 and the output represents the signed integer -1073741825.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: n = 00000010100101000001111010011100
 * Output:    964176192 (00111001011110000010100101000000)
 * Explanation: The input binary string 00000010100101000001111010011100
 * represents the unsigned integer 43261596, so return 964176192 which its
 * binary representation is 00111001011110000010100101000000.
 *
 *
 * Example 2:
 *
 *
 * Input: n = 11111111111111111111111111111101
 * Output:   3221225471 (10111111111111111111111111111111)
 * Explanation: The input binary string 11111111111111111111111111111101
 * represents the unsigned integer 4294967293, so return 3221225471 which its
 * binary representation is 10111111111111111111111111111111.
 *
 *
 *
 * Constraints:
 *
 *
 * The input must be a binary string of length 32
 *
 *
 *
 * Follow up: If this function is called many times, how would you optimize it?
 *
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
// var reverseBits1 = function(n) {
//   let result = 0

//   /**
//    * 把 result << 1 看做是指向 32 位数末尾的指针往前移动一位
//    * 所以该 for 循环表示从最后一位开始往前遍历.
//    * 又因为 0 << 1 依然是 0
//    * 所以第一次的 result << 1 依然是指向最后一位
//    *
//    * n & 1 看做是取 n 的最后一位
//    * 所以该 for 循环表示从最后一位开始取值
//    *
//    * 也就是说将 n 从后往前遍历, 然后拼接到 result 上. 最简单的解法, 只不过是 2 进制的版本
//    */
//   for (let i = 0; i < 32; i++) {
//     result = (result << 1) | (n & 1)
//     n = n >> 1
//   }

//   return result >>> 0
// }

/**
 * bit Reverse 也可以看做是沿着 y 轴(32 位 bit 的中线)做镜像处理
 * @param {*} n
 * @returns
 */
var reverseBits = function(n) {
  let leftNum = 0
  let rightNum = 0

  const LAST = 0b0000_0000_0000_0000_0000_0000_0000_0001
  const FIRST = 0b1000_0000_0000_0000_0000_0000_0000_0000

  let n2 = n

  for (let i = 0; i < 16; i++) {
    rightNum = (rightNum << 1) | (n & LAST)
    leftNum = (leftNum >>> 1) | (n2 & FIRST)

    n = n >> 1
    n2 = n2 << 1
  }

  rightNum = rightNum << 16
  leftNum = leftNum >>> 16

  return (leftNum | rightNum) >>> 0
}
// @lc code=end

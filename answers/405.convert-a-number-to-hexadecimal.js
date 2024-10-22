/*
 * @lc app=leetcode id=405 lang=javascript
 *
 * [405] Convert a Number to Hexadecimal
 *
 * https://leetcode.com/problems/convert-a-number-to-hexadecimal/description/
 *
 * algorithms
 * Easy (49.41%)
 * Likes:    1325
 * Dislikes: 221
 * Total Accepted:    157.1K
 * Total Submissions: 317.9K
 * Testcase Example:  '26'
 *
 * Given a 32-bit integer num, return a string representing its hexadecimal
 * representation. For negative integers, two’s complement method is used.
 *
 * All the letters in the answer string should be lowercase characters, and
 * there should not be any leading zeros in the answer except for the zero
 * itself.
 *
 * Note: You are not allowed to use any built-in library method to directly
 * solve this problem.
 *
 *
 * Example 1:
 * Input: num = 26
 * Output: "1a"
 * Example 2:
 * Input: num = -1
 * Output: "ffffffff"
 *
 *
 * Constraints:
 *
 *
 * -2^31 <= num <= 2^31 - 1
 *
 *
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */

const hexMap = {
  0: '0',
  1: '1',
  2: '2',
  3: '3',
  4: '4',
  5: '5',
  6: '6',
  7: '7',
  8: '8',
  9: '9',
  10: 'a',
  11: 'b',
  12: 'c',
  13: 'd',
  14: 'e',
  15: 'f',
}

function toHexStr(num) {
  let result = ''
  let digit = 0

  for (;num !== 0;) {
    digit = num % 16
    num = Math.floor(num / 16)

    result = hexMap[digit] + result
  }

  return result
}

var toHex = function(num) {
  let result = ''

  if (num === 0) {
    return '0'
  }

  if (num > 0) {
    result = toHexStr(num)
  } else {
    const max = Math.pow(2, 32)
    // 注意 num 是负数, 这里顺带解释下什么与为什么有补码
    // max + num 就是所谓的取反 + 1的操作
    // 以生活中的 10 进制为例, 一共有 0123456789 个数字,
    // 个位数 4 可以被表达成 10 + 4 = 14, 个位数依然是 4. 因为溢出的 1 在另一个位数上(十位数), 如果无视且只看个位数, 那他那就是 4
    // 也可以表达成 10 - 6 = 4, 个位数依然是 4. 将 4 替换并保留为 10 - 6 这个写法, 这就是所谓的补码
    //
    // 换到二进制中, 随便找一个数, 以 1001 为例
    // 1001 = 10000 - 0111 = (1111 + 1) - (0110 + 1)
    // 10000 就是该编程语言表示数字的最高位数的最大值. 题目里是写了 32 位数, 所以是 2^32
    // 2^32 = 1111_1111_1111_1111_1111_1111_1111_1111 + 1
    // 所以 1001 取反 = 0110, 然后 0110 + 1 = 1001.
    // 所以 1001 的补码是 0110 + 1 = 0111, 这个 0111 就是补码, 他的完全体其实是 10000 - 0111 来代表 0110
    // 只不过编程语言的规范已经定好了位数, 所以任何负数都是相当于 10000 - x
    // 那么这个 10000 也一起省略掉, 只保留后面的补码了
    result = toHexStr(max + num)
  }

  return result
};
// @lc code=end
console.log(toHex(-1))

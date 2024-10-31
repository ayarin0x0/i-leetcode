/*
 * @lc app=leetcode id=717 lang=javascript
 *
 * [717] 1-bit and 2-bit Characters
 *
 * https://leetcode.com/problems/1-bit-and-2-bit-characters/description/
 *
 * algorithms
 * Easy (45.22%)
 * Likes:    879
 * Dislikes: 2127
 * Total Accepted:    141.8K
 * Total Submissions: 313.8K
 * Testcase Example:  '[1,0,0]'
 *
 * We have two special characters:
 *
 *
 * The first character can be represented by one bit 0.
 * The second character can be represented by two bits (10 or 11).
 *
 *
 * Given a binary array bits that ends with 0, return true if the last
 * character must be a one-bit character.
 *
 *
 * Example 1:
 *
 *
 * Input: bits = [1,0,0]
 * Output: true
 * Explanation: The only way to decode it is two-bit character and one-bit
 * character.
 * So the last character is one-bit character.
 *
 *
 * Example 2:
 *
 *
 * Input: bits = [1,1,1,0]
 * Output: false
 * Explanation: The only way to decode it is two-bit character and two-bit
 * character.
 * So the last character is not one-bit character.
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= bits.length <= 1000
 * bits[i] is either 0 or 1.
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function(bits) {
  let zeroCount = 0
  let prevBit = 0

  /**
   * 削除头部连续的 0, 以便最后判断奇偶数
   *
   */
  for (let i = 0; i < bits.length - 1; i++) {
    const bit = bits[i]

    if (bit === 0) {
      if (prevBit === 0) {
        zeroCount += 1

        continue
      }

      prevBit = 0
    } else {
      // e.g. [1, 1, 0, 1, 0] => [0, 1, 0]
      // 连续两个 1 之后, 上一个 prevBit 可以被视为 0, 这样 [0, 1, 0] 中的 第一个 0 也会被计数
      if (prevBit === 1) {
        prevBit = 0

        continue
      }

      prevBit = 1
    }
  }

  const effectiveBit = bits.length - zeroCount
  const isOdd = effectiveBit % 2 === 1

  if (isOdd) {
    return true
  }

  return bits[bits.length - 2] === 0
};
// @lc code=end

console.log(
  isOneBitCharacter([1, 1, 0, 1, 0])
)

/*
 * @lc app=leetcode id=1652 lang=javascript
 *
 * [1652] Defuse the Bomb
 *
 * https://leetcode.com/problems/defuse-the-bomb/description/
 *
 * algorithms
 * Easy (67.04%)
 * Likes:    1379
 * Dislikes: 148
 * Total Accepted:    165.4K
 * Total Submissions: 208.8K
 * Testcase Example:  '[5,7,1,4]\n3'
 *
 * You have a bomb to defuse, and your time is running out! Your informer will
 * provide you with a circular array code of length of n and a key k.
 *
 * To decrypt the code, you must replace every number. All the numbers are
 * replaced simultaneously.
 *
 *
 * If k > 0, replace the i^th number with the sum of the next k numbers.
 * If k < 0, replace the i^th number with the sum of the previous k
 * numbers.
 * If k == 0, replace the i^th number with 0.
 *
 *
 * As code is circular, the next element of code[n-1] is code[0], and the
 * previous element of code[0] is code[n-1].
 *
 * Given the circular array code and an integer key k, return the decrypted
 * code to defuse the bomb!
 *
 *
 * Example 1:
 *
 *
 * Input: code = [5,7,1,4], k = 3
 * Output: [12,10,16,13]
 * Explanation: Each number is replaced by the sum of the next 3 numbers. The
 * decrypted code is [7+1+4, 1+4+5, 4+5+7, 5+7+1]. Notice that the numbers wrap
 * around.
 *
 *
 * Example 2:
 *
 *
 * Input: code = [1,2,3,4], k = 0
 * Output: [0,0,0,0]
 * Explanation: When k is zero, the numbers are replaced by 0.
 *
 *
 * Example 3:
 *
 *
 * Input: code = [2,4,9,3], k = -2
 * Output: [12,5,6,13]
 * Explanation: The decrypted code is [3+9, 2+3, 4+2, 9+4]. Notice that the
 * numbers wrap around again. If k is negative, the sum is of the previous
 * numbers.
 *
 *
 *
 * Constraints:
 *
 *
 * n == code.length
 * 1 <= n <= 100
 * 1 <= code[i] <= 100
 * -(n - 1) <= k <= n - 1
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function(code, k) {
  const result = []

  if (k === 0) {
    for (let i = 0; i < code.length; i++) {
      result[i] = 0
    }

    return result
  }

  const slider = Slider(code, k)

  for (let i = 0; i < code.length; i++) {
    result[i] = slider.sum()
    slider.move()
  }

  return result
};

function Slider(arr, k) {
  let acc
  let start

  const len = arr.length

  const sum = () => acc

  const move = () => {
    acc -= arr[start]

    start = (start + 1) % len

    const end = (start + k - 1) % len

    acc += arr[end]

    return
  }

  init()

  return {
    sum,
    move,
  }

  function init() {
    acc = 0

    start = k > 0 ? 1 : arr.length + k
    k = Math.abs(k)

    for (let i = start; i < start + k; i++) {
      acc += arr[i]
    }
  }
}
// @lc code=end
console.log(
  // decrypt([5,7,1,4], 3)
  // decrypt([1,2,3,4], 0)
  decrypt([2,4,9,3], -2)
)

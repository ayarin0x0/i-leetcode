/*
 * @lc app=leetcode id=1566 lang=javascript
 *
 * [1566] Detect Pattern of Length M Repeated K or More Times
 *
 * https://leetcode.com/problems/detect-pattern-of-length-m-repeated-k-or-more-times/description/
 *
 * algorithms
 * Easy (43.41%)
 * Likes:    665
 * Dislikes: 137
 * Total Accepted:    37.9K
 * Total Submissions: 87.4K
 * Testcase Example:  '[1,2,4,4,4,4]\n1\n3'
 *
 * Given an array of positive integers arr, find a pattern of length m that is
 * repeated k or more times.
 *
 * A pattern is a subarray (consecutive sub-sequence) that consists of one or
 * more values, repeated multiple times consecutively without overlapping. A
 * pattern is defined by its length and the number of repetitions.
 *
 * Return true if there exists a pattern of length m that is repeated k or more
 * times, otherwise return false.
 *
 *
 * Example 1:
 *
 *
 * Input: arr = [1,2,4,4,4,4], m = 1, k = 3
 * Output: true
 * Explanation: The pattern (4) of length 1 is repeated 4 consecutive times.
 * Notice that pattern can be repeated k or more times but not less.
 *
 *
 * Example 2:
 *
 *
 * Input: arr = [1,2,1,2,1,1,1,3], m = 2, k = 2
 * Output: true
 * Explanation: The pattern (1,2) of length 2 is repeated 2 consecutive times.
 * Another valid pattern (2,1) is also repeated 2 times.
 *
 *
 * Example 3:
 *
 *
 * Input: arr = [1,2,1,2,1,3], m = 2, k = 3
 * Output: false
 * Explanation: The pattern (1,2) is of length 2 but is repeated only 2 times.
 * There is no pattern of length 2 that is repeated 3 or more times.
 *
 *
 *
 * Constraints:
 *
 *
 * 2 <= arr.length <= 100
 * 1 <= arr[i] <= 100
 * 1 <= m <= 100
 * 2 <= k <= 100
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number} m
 * @param {number} k
 * @return {boolean}
 */
var containsPattern = function(arr, m, k) {
  const len = arr.length - m * k

  for (let i = 0; i <= len;) {
    const [ok, next] = findNextPattern(arr, i, m, k)

    // console.log('ok', ok, 'next', next)

    if (ok) {
      return true
    }

    i = next
  }

  return false
};

function findNextPattern(arr, offset, pattern, times) {
  let count = 1

  for (;count < times;) {
    for (let i = 0; i < pattern; i++) {
      const cur = arr[offset + i]

      const nextPosition = offset + i + pattern
      const next = arr[nextPosition]

      if (cur === next) {
        continue
      }

      return [false, nextPosition - pattern + 1]
    }

    offset += pattern
    count += 1
  }

  return [true, -1]
}
// @lc code=end

console.log(
  // containsPattern([1, 2, 4, 4, 4, 4], 1, 3)
  // containsPattern([1, 2, 1, 2, 1, 1, 1, 3], 2, 2)
  // containsPattern([1, 2, 1, 2, 1, 3], 2, 3)
  // containsPattern([2, 2], 1, 2)
)

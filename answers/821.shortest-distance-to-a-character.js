/*
 * @lc app=leetcode id=821 lang=javascript
 *
 * [821] Shortest Distance to a Character
 *
 * https://leetcode.com/problems/shortest-distance-to-a-character/description/
 *
 * algorithms
 * Easy (71.84%)
 * Likes:    3161
 * Dislikes: 182
 * Total Accepted:    197.5K
 * Total Submissions: 274.7K
 * Testcase Example:  '"loveleetcode"\n"e"'
 *
 * Given a string s and a character c that occurs in s, return an array of
 * integers answer where answer.length == s.length and answer[i] is the
 * distance from index i to the closest occurrence of character c in s.
 *
 * The distance between two indices i and j is abs(i - j), where abs is the
 * absolute value function.
 *
 *
 * Example 1:
 *
 *
 * Input: s = "loveleetcode", c = "e"
 * Output: [3,2,1,0,1,0,0,1,2,2,1,0]
 * Explanation: The character 'e' appears at indices 3, 5, 6, and 11
 * (0-indexed).
 * The closest occurrence of 'e' for index 0 is at index 3, so the distance is
 * abs(0 - 3) = 3.
 * The closest occurrence of 'e' for index 1 is at index 3, so the distance is
 * abs(1 - 3) = 2.
 * For index 4, there is a tie between the 'e' at index 3 and the 'e' at index
 * 5, but the distance is still the same: abs(4 - 3) == abs(4 - 5) = 1.
 * The closest occurrence of 'e' for index 8 is at index 6, so the distance is
 * abs(8 - 6) = 2.
 *
 *
 * Example 2:
 *
 *
 * Input: s = "aaab", c = "b"
 * Output: [3,2,1,0]
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= s.length <= 10^4
 * s[i] and c are lowercase English letters.
 * It is guaranteed that c occurs at least once in s.
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function(s, c) {
  const result = []

  // Trim left
  let leftPointer = 0
  let count = 0

  for (; leftPointer < s.length; leftPointer++) {
    const char = s[leftPointer]

    if (char !== c) {
      count += 1

      continue
    }

    for (let i = count; i >= 0; i--) {
      result.push(i)
    }

    break
  }

  // Trim right
  let rightPointer = s.length - 1
  let rightCount = 0

  for (; rightPointer > leftPointer; rightPointer--) {
    const char = s[rightPointer]

    if (char !== c) {
      rightCount += 1

      continue
    }

    break
  }


  count = 0

  for (let i = leftPointer + 1; i <= rightPointer; i++) {
    const char = s[i]

    if (char !== c) {
      count += 1

      continue
    }

    const half = Math.floor(count / 2)

    if (count % 2 === 0) {
      for (let j = 1; j <= half; j++) {
        result.push(j)
      }
      for (let j = half; j >= 0; j--) {
        result.push(j)
      }
    } else {
      for (let j = 1; j <= half; j++) {
        result.push(j)
      }
      result.push(half + 1)
      for (let j = half; j >= 0; j--) {
        result.push(j)
      }
    }

    count = 0
  }

  // Trim right
  for (let i = 1; i <= rightCount; i++) {
    result.push(i)
  }

  return result
};
// @lc code=end

console.log(
  shortestToChar('cizokxcijwbyspcfcqws', 'c')
)

/*
 * @lc app=leetcode id=1422 lang=javascript
 *
 * [1422] Maximum Score After Splitting a String
 *
 * https://leetcode.com/problems/maximum-score-after-splitting-a-string/description/
 *
 * algorithms
 * Easy (62.25%)
 * Likes:    1579
 * Dislikes: 66
 * Total Accepted:    171.4K
 * Total Submissions: 275.6K
 * Testcase Example:  '"011101"'
 *
 * Given a string s of zeros and ones, return the maximum score after splitting
 * the string into two non-empty substrings (i.e. left substring and right
 * substring).
 *
 * The score after splitting a string is the number of zeros in the left
 * substring plus the number of ones in the right substring.
 *
 *
 * Example 1:
 *
 *
 * Input: s = "011101"
 * Output: 5
 * Explanation:
 * All possible ways of splitting s into two non-empty substrings are:
 * left = "0" and right = "11101", score = 1 + 4 = 5
 * left = "01" and right = "1101", score = 1 + 3 = 4
 * left = "011" and right = "101", score = 1 + 2 = 3
 * left = "0111" and right = "01", score = 1 + 1 = 2
 * left = "01110" and right = "1", score = 2 + 1 = 3
 *
 *
 * Example 2:
 *
 *
 * Input: s = "00111"
 * Output: 5
 * Explanation: When left = "00" and right = "111", we get the maximum score =
 * 2 + 3 = 5
 *
 *
 * Example 3:
 *
 *
 * Input: s = "1111"
 * Output: 3
 *
 *
 *
 * Constraints:
 *
 *
 * 2 <= s.length <= 500
 * The string s consists of characters '0' and '1' only.
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
  let leftPointer = 0
  for (;leftPointer < s.length - 1;) {
    const char = s[leftPointer]

    if (char === '1') {
      break
    }

    leftPointer += 1
  }

  let rightPointer = s.length - 1
  for (;rightPointer > 0;) {
    const char = s[rightPointer]

    if (char === '0') {
      break
    }

    rightPointer -= 1
  }

  let leftScore = leftPointer
  let rightScore = s.length - 1 - rightPointer

  leftPointer = leftPointer < 1 ? 1 : leftPointer
  rightPointer = rightPointer > s.length - 2 ? s.length - 2 : rightPointer

  for (let i = rightPointer; i >= leftPointer; i--) {
    const char = s[i]

    if (char === '1') {
      rightScore += 1
    }
  }

  let result = leftScore + rightScore

  for (let i = leftPointer; i <= rightPointer; i++) {
    const char = s[i]

    if (char === '0') {
      leftScore += 1
    } else {
      rightScore -= 1
    }

    result = Math.max(result, leftScore + rightScore)
  }

  return result
};
// @lc code=end

console.log(
  // maxScore("011101")
  // maxScore("00111")
  // maxScore("1111")
  // maxScore("010")
  // maxScore("01001")
)

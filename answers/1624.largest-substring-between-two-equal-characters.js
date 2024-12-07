/*
 * @lc app=leetcode id=1624 lang=javascript
 *
 * [1624] Largest Substring Between Two Equal Characters
 *
 * https://leetcode.com/problems/largest-substring-between-two-equal-characters/description/
 *
 * algorithms
 * Easy (68.55%)
 * Likes:    1353
 * Dislikes: 65
 * Total Accepted:    162.5K
 * Total Submissions: 237.4K
 * Testcase Example:  '"aa"'
 *
 * Given a string s, return the length of the longest substring between two
 * equal characters, excluding the two characters. If there is no such
 * substring return -1.
 *
 * A substring is a contiguous sequence of characters within a string.
 *
 *
 * Example 1:
 *
 *
 * Input: s = "aa"
 * Output: 0
 * Explanation: The optimal substring here is an empty substring between the
 * two 'a's.
 *
 * Example 2:
 *
 *
 * Input: s = "abca"
 * Output: 2
 * Explanation: The optimal substring here is "bc".
 *
 *
 * Example 3:
 *
 *
 * Input: s = "cbzxy"
 * Output: -1
 * Explanation: There are no characters that appear twice in s.
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= s.length <= 300
 * s contains only lowercase English letters.
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function(s) {
  const leftMap = Object.create(null)
  const rightMap = Object.create(null)

  let leftPointer = 0
  let rightPointer = s.length - 1

  let result = -1

  for (;leftPointer < rightPointer;) {
    const leftChar = s[leftPointer]

    if (leftMap[leftChar] === undefined) {
      leftMap[leftChar] = leftPointer
    } else {
      result = Math.max(leftPointer - leftMap[leftChar] - 1, result)
    }

    if (rightMap[leftChar] !== undefined) {
      result = Math.max(rightMap[leftChar] - leftPointer- 1, result)
    }

    const rightChar = s[rightPointer]

    if (rightMap[rightChar] === undefined) {
      rightMap[rightChar] = rightPointer
    } else {
      result = Math.max(rightPointer - rightMap[rightChar] - 1, result)
    }

    if (leftMap[rightChar] !== undefined) {
      result = Math.max(rightPointer - leftMap[rightChar] - 1, result)
    }

    leftPointer += 1
    rightPointer -= 1
  }

  return result
};
// @lc code=end

console.log(
  // maxLengthBetweenEqualCharacters("aa")
  // maxLengthBetweenEqualCharacters("abca")
  // maxLengthBetweenEqualCharacters("cbzxy")
  maxLengthBetweenEqualCharacters("pfwftcwdbiodyoojbebtwoyqemmsgmsryugkkcwykhtaczj")
)

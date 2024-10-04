/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 *
 * https://leetcode.com/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (41.59%)
 * Likes:    15963
 * Dislikes: 4231
 * Total Accepted:    2.7M
 * Total Submissions: 6.6M
 * Testcase Example:  '["flower","flow","flight"]'
 *
 * Write a function to find the longest common prefix string amongst an array
 * of strings.
 *
 * If there is no common prefix, return an empty string "".
 *
 *
 * Example 1:
 *
 *
 * Input: strs = ["flower","flow","flight"]
 * Output: "fl"
 *
 *
 * Example 2:
 *
 *
 * Input: strs = ["dog","racecar","car"]
 * Output: ""
 * Explanation: There is no common prefix among the input strings.
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= strs.length <= 200
 * 0 <= strs[i].length <= 200
 * strs[i] consists of only lowercase English letters.
 *
 *
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let commonPrefix = ''
  let charPointer = 0

  if (strs.length === 1) {
    return strs[0]
  }

  Outer: for(;;) {
    const anchor = strs[0][charPointer]

    for (let i = 1; i < strs.length; i++) {
      const char = strs[i][charPointer]

      if (char === undefined) {
        break Outer
      }

      if (char === anchor) {
        continue
      }

      break Outer
    }

    commonPrefix += anchor
    charPointer += 1
  }

  return commonPrefix
}
// @lc code=end

/*
 * @lc app=leetcode id=28 lang=javascript
 *
 * [28] Find the Index of the First Occurrence in a String
 *
 * https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description/
 *
 * algorithms
 * Easy (40.57%)
 * Likes:    4858
 * Dislikes: 273
 * Total Accepted:    2M
 * Total Submissions: 4.9M
 * Testcase Example:  '"sadbutsad"\n"sad"'
 *
 * Given two strings needle and haystack, return the index of the first
 * occurrence of needle in haystack, or -1 if needle is not part of
 * haystack.
 *
 *
 * Example 1:
 *
 *
 * Input: haystack = "sadbutsad", needle = "sad"
 * Output: 0
 * Explanation: "sad" occurs at index 0 and 6.
 * The first occurrence is at index 0, so we return 0.
 *
 *
 * Example 2:
 *
 *
 * Input: haystack = "leetcode", needle = "leeto"
 * Output: -1
 * Explanation: "leeto" did not occur in "leetcode", so we return -1.
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= haystack.length, needle.length <= 10^4
 * haystack and needle consist of only lowercase English characters.
 *
 *
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if (haystack.length < needle.length) {
    return -1
  }

  if (haystack.length === needle.length) {
    return haystack === needle ? 0 : -1
  }

  let haystackPointer = 0
  Outer: for (; haystackPointer < haystack.length;) {
    for (let offset = 0; offset < needle.length; offset++) {
      const hayChar = haystack[haystackPointer + offset]
      const needleChar = needle[offset]

      if (hayChar !== needleChar) {
        haystackPointer += 1 // Math.min(1, offset)

        continue Outer
      }
    }

    return haystackPointer
  }

  return -1
}
// @lc code=end

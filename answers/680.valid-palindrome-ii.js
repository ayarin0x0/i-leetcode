/*
 * @lc app=leetcode id=680 lang=javascript
 *
 * [680] Valid Palindrome II
 *
 * https://leetcode.com/problems/valid-palindrome-ii/description/
 *
 * algorithms
 * Easy (41.44%)
 * Likes:    8335
 * Dislikes: 456
 * Total Accepted:    828.2K
 * Total Submissions: 2M
 * Testcase Example:  '"aba"'
 *
 * Given a string s, return true if the s can be palindrome after deleting at
 * most one character from it.
 *
 *
 * Example 1:
 *
 *
 * Input: s = "aba"
 * Output: true
 *
 *
 * Example 2:
 *
 *
 * Input: s = "abca"
 * Output: true
 * Explanation: You could delete the character 'c'.
 *
 *
 * Example 3:
 *
 *
 * Input: s = "abc"
 * Output: false
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= s.length <= 10^5
 * s consists of lowercase English letters.
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
  if (s.length < 3) {
    return true
  }

  return step(s, 0, s.length - 1, 1)

  function step(s, left, right, hp) {
    if (left >= right) {
      return true
    }

    if (s[left] === s[right]) {
      return step(s, left + 1, right - 1, hp)
    }

    if (hp < 1) {
      return false
    }

    return step(s, left + 1, right, hp - 1) || step(s, left, right - 1, hp - 1)
  }
};
// @lc code=end

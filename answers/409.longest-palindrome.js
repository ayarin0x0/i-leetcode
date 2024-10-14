/*
 * @lc app=leetcode id=409 lang=javascript
 *
 * [409] Longest Palindrome
 *
 * https://leetcode.com/problems/longest-palindrome/description/
 *
 * algorithms
 * Easy (55.38%)
 * Likes:    5962
 * Dislikes: 413
 * Total Accepted:    831.6K
 * Total Submissions: 1.5M
 * Testcase Example:  '"abccccdd"'
 *
 * Given a string s which consists of lowercase or uppercase letters, return
 * the length of the longest palindrome that can be built with those letters.
 *
 * Letters are case sensitive, for example, "Aa" is not considered a
 * palindrome.
 *
 *
 * Example 1:
 *
 *
 * Input: s = "abccccdd"
 * Output: 7
 * Explanation: One longest palindrome that can be built is "dccaccd", whose
 * length is 7.
 *
 *
 * Example 2:
 *
 *
 * Input: s = "a"
 * Output: 1
 * Explanation: The longest palindrome that can be built is "a", whose length
 * is 1.
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= s.length <= 2000
 * s consists of lowercase and/or uppercase English letters only.
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  const map = {}
  for (const char of s) {
    map[char] = map[char] ? map[char] + 1 : 1
  }

  let result = 0
  for (const char in map) {
    const count = map[char]
    if (count % 2 === 0) {
      result += count
    } else {
      result += count - 1
    }
  }

  return result + (result < s.length ? 1 : 0)
};
// @lc code=end

console.log(
  longestPalindrome("aba")
)

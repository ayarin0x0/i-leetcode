/*
 * @lc app=leetcode id=482 lang=javascript
 *
 * [482] License Key Formatting
 *
 * https://leetcode.com/problems/license-key-formatting/description/
 *
 * algorithms
 * Easy (44.11%)
 * Likes:    1122
 * Dislikes: 1421
 * Total Accepted:    295.9K
 * Total Submissions: 670.5K
 * Testcase Example:  '"5F3Z-2e-9-w"\n4'
 *
 * You are given a license key represented as a string s that consists of only
 * alphanumeric characters and dashes. The string is separated into n + 1
 * groups by n dashes. You are also given an integer k.
 *
 * We want to reformat the string s such that each group contains exactly k
 * characters, except for the first group, which could be shorter than k but
 * still must contain at least one character. Furthermore, there must be a dash
 * inserted between two groups, and you should convert all lowercase letters to
 * uppercase.
 *
 * Return the reformatted license key.
 *
 *
 * Example 1:
 *
 *
 * Input: s = "5F3Z-2e-9-w", k = 4
 * Output: "5F3Z-2E9W"
 * Explanation: The string s has been split into two parts, each part has 4
 * characters.
 * Note that the two extra dashes are not needed and can be removed.
 *
 *
 * Example 2:
 *
 *
 * Input: s = "2-5g-3-J", k = 2
 * Output: "2-5G-3J"
 * Explanation: The string s has been split into three parts, each part has 2
 * characters except the first part as it could be shorter as mentioned
 * above.
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= s.length <= 10^5
 * s consists of English letters, digits, and dashes '-'.
 * 1 <= k <= 10^4
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function(s, k) {
  s = s.split('-').join('').toUpperCase()
  const sLen = s.length
  const groups = Math.floor(sLen / k)
  const firstGroupLen = sLen % k

  let result = ''

  let offset = 0

  // Build the first group
  for (; offset < firstGroupLen; offset++) {
    result += s[offset]
  }

  if (firstGroupLen > 0 && groups > 0) {
    result += '-'
  }

  if (groups > 0) {
    // Build the rest of the groups
    for (let group = 0; group < groups - 1; group++) {
      for (let i = 0; i < k; i++) {
        result += s[offset + i]
      }

      result += '-'
      offset += k
    }

    for (let i = 0; i < k; i++) {
      result += s[offset + i]
    }
  }

  return result
};
// @lc code=end

console.log(
  licenseKeyFormatting('2-5g2-3K-J', 3)
)

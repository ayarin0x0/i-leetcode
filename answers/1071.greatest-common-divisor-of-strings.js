/*
 * @lc app=leetcode id=1071 lang=javascript
 *
 * [1071] Greatest Common Divisor of Strings
 *
 * https://leetcode.com/problems/greatest-common-divisor-of-strings/description/
 *
 * algorithms
 * Easy (51.93%)
 * Likes:    5352
 * Dislikes: 1441
 * Total Accepted:    612.8K
 * Total Submissions: 1.2M
 * Testcase Example:  '"ABCABC"\n"ABC"'
 *
 * For two strings s and t, we say "t divides s" if and only if s = t + t + t +
 * ... + t + t (i.e., t is concatenated with itself one or more times).
 *
 * Given two strings str1 and str2, return the largest string x such that x
 * divides both str1 and str2.
 *
 *
 * Example 1:
 *
 *
 * Input: str1 = "ABCABC", str2 = "ABC"
 * Output: "ABC"
 *
 *
 * Example 2:
 *
 *
 * Input: str1 = "ABABAB", str2 = "ABAB"
 * Output: "AB"
 *
 *
 * Example 3:
 *
 *
 * Input: str1 = "LEET", str2 = "CODE"
 * Output: ""
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= str1.length, str2.length <= 1000
 * str1 and str2 consist of English uppercase letters.
 *
 *
 */

// @lc code=start
/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
  const GCD = getGCD(str1.length, str2.length)

  const common1 = str1.substring(0, GCD)
  const common2 = str2.substring(0, GCD)

  if (common1 !== common2) {
    return ""
  }

  if (str1 !== common1.repeat(str1.length / GCD) || str2 !== common2.repeat(str2.length / GCD)) {
    return ""
  }

  return common1
};

function getGCD(a, b) {
  for (;b !== 0;) {
    const value = a % b

    a = b
    b = value
  }

  return a
}
// @lc code=end

console.log(
  gcdOfStrings("ABCABC", "ABC")
)

/*
 * @lc app=leetcode id=1576 lang=javascript
 *
 * [1576] Replace All ?'s to Avoid Consecutive Repeating Characters
 *
 * https://leetcode.com/problems/replace-all-s-to-avoid-consecutive-repeating-characters/description/
 *
 * algorithms
 * Easy (46.08%)
 * Likes:    570
 * Dislikes: 179
 * Total Accepted:    64.4K
 * Total Submissions: 140.8K
 * Testcase Example:  '"?zs"'
 *
 * Given a string s containing only lowercase English letters and the '?'
 * character, convert all the '?' characters into lowercase letters such that
 * the final string does not contain any consecutive repeating characters. You
 * cannot modify the non '?' characters.
 *
 * It is guaranteed that there are no consecutive repeating characters in the
 * given string except for '?'.
 *
 * Return the final string after all the conversions (possibly zero) have been
 * made. If there is more than one solution, return any of them. It can be
 * shown that an answer is always possible with the given constraints.
 *
 *
 * Example 1:
 *
 *
 * Input: s = "?zs"
 * Output: "azs"
 * Explanation: There are 25 solutions for this problem. From "azs" to "yzs",
 * all are valid. Only "z" is an invalid modification as the string will
 * consist of consecutive repeating characters in "zzs".
 *
 *
 * Example 2:
 *
 *
 * Input: s = "ubv?w"
 * Output: "ubvaw"
 * Explanation: There are 24 solutions for this problem. Only "v" and "w" are
 * invalid modifications as the strings will consist of consecutive repeating
 * characters in "ubvvw" and "ubvww".
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= s.length <= 100
 * s consist of lowercase English letters and '?'.
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var modifyString = function(s) {
  const result = []

  for (let i = 0; i < s.length; i++) {
    const char = s[i]

    if (char !== '?') {
      result[i] = char
      continue
    }

    result[i] = pickChar(s, result[i - 1], s[i + 1])
  }

  return result.join('')
};

const ALPHA_MAP = "abcdefghijklmnopqrstuvwxyz"
function pickChar(s, prev, next) {
  let char = ''

  for (let i = 0; i < ALPHA_MAP.length; i++) {
    char = ALPHA_MAP[i]

    if (char !== prev && char !== next) {
      return char
    }
  }
}
// @lc code=end
console.log(
  modifyString("???zs")
)

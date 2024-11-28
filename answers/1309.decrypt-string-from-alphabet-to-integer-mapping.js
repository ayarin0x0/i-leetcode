/*
 * @lc app=leetcode id=1309 lang=javascript
 *
 * [1309] Decrypt String from Alphabet to Integer Mapping
 *
 * https://leetcode.com/problems/decrypt-string-from-alphabet-to-integer-mapping/description/
 *
 * algorithms
 * Easy (79.91%)
 * Likes:    1550
 * Dislikes: 112
 * Total Accepted:    131.9K
 * Total Submissions: 165K
 * Testcase Example:  '"10#11#12"'
 *
 * You are given a string s formed by digits and '#'. We want to map s to
 * English lowercase characters as follows:
 *
 *
 * Characters ('a' to 'i') are represented by ('1' to '9') respectively.
 * Characters ('j' to 'z') are represented by ('10#' to '26#') respectively.
 *
 *
 * Return the string formed after mapping.
 *
 * The test cases are generated so that a unique mapping will always exist.
 *
 *
 * Example 1:
 *
 *
 * Input: s = "10#11#12"
 * Output: "jkab"
 * Explanation: "j" -> "10#" , "k" -> "11#" , "a" -> "1" , "b" -> "2".
 *
 *
 * Example 2:
 *
 *
 * Input: s = "1326#"
 * Output: "acz"
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= s.length <= 1000
 * s consists of digits and the '#' letter.
 * s will be a valid string such that mapping is always possible.
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function(s) {
  const map = {
    '1': 'a',
    '2': 'b',
    '3': 'c',
    '4': 'd',
    '5': 'e',
    '6': 'f',
    '7': 'g',
    '8': 'h',
    '9': 'i',
    '10#': 'j',
    '11#': 'k',
    '12#': 'l',
    '13#': 'm',
    '14#': 'n',
    '15#': 'o',
    '16#': 'p',
    '17#': 'q',
    '18#': 'r',
    '19#': 's',
    '20#': 't',
    '21#': 'u',
    '22#': 'v',
    '23#': 'w',
    '24#': 'x',
    '25#': 'y',
    '26#': 'z',
  }

  const arr = []

  for (let i = s.length - 1; i >= 0; i--) {
    const char = s[i]

    if (char === '#') {
      const str = s.substring(i - 2, i + 1)

      arr.push(map[str])
      i -= 2
    } else {
      arr.push(map[char])
    }
  }

  return arr.reverse().join('')
};
// @lc code=end
console.log(
  freqAlphabets("10#11#12")
)

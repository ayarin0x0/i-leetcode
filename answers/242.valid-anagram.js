/*
 * @lc app=leetcode id=242 lang=javascript
 *
 * [242] Valid Anagram
 *
 * https://leetcode.com/problems/valid-anagram/description/
 *
 * algorithms
 * Easy (63.33%)
 * Likes:    12325
 * Dislikes: 409
 * Total Accepted:    3.9M
 * Total Submissions: 6M
 * Testcase Example:  '"anagram"\n"nagaram"'
 *
 * Given two strings s and t, return true if t is an anagram of s, and false
 * otherwise.
 *
 *
 * Example 1:
 *
 *
 * Input: s = "anagram", t = "nagaram"
 *
 * Output: true
 *
 *
 * Example 2:
 *
 *
 * Input: s = "rat", t = "car"
 *
 * Output: false
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= s.length, t.length <= 5 * 10^4
 * s and t consist of lowercase English letters.
 *
 *
 *
 * Follow up: What if the inputs contain Unicode characters? How would you
 * adapt your solution to such a case?
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s === t) {
    return true
  }

  if (s.length !== t.length) {
    return false
  }

  const map = Object.create(null)

  for (let i = 0; i < s.length; i++) {
    const char = s[i]

    if (!map[char]) {
      map[char] = 1
    } else {
      map[char] += 1
    }
  }

  for (let i = 0; i < t.length; i++) {
    const char = t[i]

    if (!map[char]) {
      return false
    } else {
      map[char] -= 1

      if (map[char] < 0) {
        return false
      }
    }
  }

  return true
}
// @lc code=end

console.log(
  isAnagram('anagram', 'nagaram')
)

/*
 * @lc app=leetcode id=383 lang=javascript
 *
 * [383] Ransom Note
 *
 * https://leetcode.com/problems/ransom-note/description/
 *
 * algorithms
 * Easy (59.55%)
 * Likes:    5067
 * Dislikes: 508
 * Total Accepted:    1.3M
 * Total Submissions: 2.1M
 * Testcase Example:  '"a"\n"b"'
 *
 * Given two strings ransomNote and magazine, return true if ransomNote can be
 * constructed by using the letters from magazine and false otherwise.
 *
 * Each letter in magazine can only be used once in ransomNote.
 *
 *
 * Example 1:
 * Input: ransomNote = "a", magazine = "b"
 * Output: false
 * Example 2:
 * Input: ransomNote = "aa", magazine = "ab"
 * Output: false
 * Example 3:
 * Input: ransomNote = "aa", magazine = "aab"
 * Output: true
 *
 *
 * Constraints:
 *
 *
 * 1 <= ransomNote.length, magazine.length <= 10^5
 * ransomNote and magazine consist of lowercase English letters.
 *
 *
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  if (ransomNote.length > magazine.length) {
    return false
  }

  const map = Object.create(null)

  for (let i = 0; i < magazine.length; i++) {
    const char = magazine[i]

    if (map[char] === undefined) {
      map[char] = 1
    } else {
      map[char] += 1
    }
  }

  for (let i = 0; i < ransomNote.length; i++) {
    const char = ransomNote[i]

    if (map[char] === undefined || map[char] === 0) {
      return false
    } else {
      map[char] -= 1
    }
  }

  return true
}
// @lc code=end

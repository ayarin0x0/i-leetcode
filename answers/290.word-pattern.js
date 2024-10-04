/*
 * @lc app=leetcode id=290 lang=javascript
 *
 * [290] Word Pattern
 *
 * https://leetcode.com/problems/word-pattern/description/
 *
 * algorithms
 * Easy (41.72%)
 * Likes:    7340
 * Dislikes: 1045
 * Total Accepted:    798.1K
 * Total Submissions: 1.9M
 * Testcase Example:  '"abba"\n"dog cat cat dog"'
 *
 * Given a pattern and a string s, find if s follows the same pattern.
 *
 * Here follow means a full match, such that there is a bijection between a
 * letter in pattern and a non-empty word in s. Specifically:
 *
 *
 * Each letter in pattern maps to exactly one unique word in s.
 * Each unique word in s maps to exactly one letter in pattern.
 * No two letters map to the same word, and no two words map to the same
 * letter.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: pattern = "abba", s = "dog cat cat dog"
 *
 * Output: true
 *
 * Explanation:
 *
 * The bijection can be established as:
 *
 *
 * 'a' maps to "dog".
 * 'b' maps to "cat".
 *
 *
 *
 * Example 2:
 *
 *
 * Input: pattern = "abba", s = "dog cat cat fish"
 *
 * Output: false
 *
 *
 * Example 3:
 *
 *
 * Input: pattern = "aaaa", s = "dog cat cat dog"
 *
 * Output: false
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= pattern.length <= 300
 * pattern contains only lower-case English letters.
 * 1 <= s.length <= 3000
 * s contains only lowercase English letters and spaces ' '.
 * s does not contain any leading or trailing spaces.
 * All the words in s are separated by a single space.
 *
 *
 */

// @lc code=start
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
  const patternMap = Object.create(null)
  const wordMap = Object.create(null)

  s = s.split(' ')

  if (pattern.length !== s.length) {
    return false
  }

  for (let i = 0; i < pattern.length; i++) {
    const patternChar = pattern[i]
    const word = s[i]

    const mappedWord = patternMap[patternChar]

    if (mappedWord === undefined) {
      patternMap[patternChar] = word
    } else {
      if (mappedWord !== word) {
        return false
      }
    }

    const mappedPattern = wordMap[word]

    if (mappedPattern === undefined) {
      wordMap[word] = patternChar
    } else {
      if (mappedPattern !== patternChar) {
        return false
      }
    }
  }

  return true
}
// @lc code=end

console.log(
  wordPattern('abba', 'dog dog dog dog')
)

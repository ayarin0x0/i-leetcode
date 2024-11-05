/*
 * @lc app=leetcode id=819 lang=javascript
 *
 * [819] Most Common Word
 *
 * https://leetcode.com/problems/most-common-word/description/
 *
 * algorithms
 * Easy (44.35%)
 * Likes:    1726
 * Dislikes: 3072
 * Total Accepted:    379.3K
 * Total Submissions: 854.5K
 * Testcase Example:  '"Bob hit a ball, the hit BALL flew far after it was hit."\n["hit"]'
 *
 * Given a string paragraph and a string array of the banned words banned,
 * return the most frequent word that is not banned. It is guaranteed there is
 * at least one word that is not banned, and that the answer is unique.
 *
 * The words in paragraph are case-insensitive and the answer should be
 * returned in lowercase.
 *
 *
 * Example 1:
 *
 *
 * Input: paragraph = "Bob hit a ball, the hit BALL flew far after it was
 * hit.", banned = ["hit"]
 * Output: "ball"
 * Explanation:
 * "hit" occurs 3 times, but it is a banned word.
 * "ball" occurs twice (and no other word does), so it is the most frequent
 * non-banned word in the paragraph.
 * Note that words in the paragraph are not case sensitive,
 * that punctuation is ignored (even if adjacent to words, such as "ball,"),
 * and that "hit" isn't the answer even though it occurs more because it is
 * banned.
 *
 *
 * Example 2:
 *
 *
 * Input: paragraph = "a.", banned = []
 * Output: "a"
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= paragraph.length <= 1000
 * paragraph consists of English letters, space ' ', or one of the symbols:
 * "!?',;.".
 * 0 <= banned.length <= 100
 * 1 <= banned[i].length <= 10
 * banned[i] consists of only lowercase English letters.
 *
 *
 */

// @lc code=start
/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
function Detector(banned) {
  const map = Object.create(null)

  let max = 0
  let result = []

  return {
    detect(word) {
      if (word.length === 0) {
        return
      }

      word = word.toLowerCase()

      if (banned.includes(word)) {
        return
      }

      if (map[word] === undefined) {
        map[word] = 0
      }

      const newCount = map[word] + 1
      map[word] = newCount

      if (newCount > max) {
        max = newCount
        result = [word]
      } else if (newCount === max) {
        result.push(word)
      }
    },

    output() {
      return result[0]
    }
  }
}

var mostCommonWord = function(paragraph, banned) {
  const SPLIT_CHARS = {
    ' ': true,
    '!': true,
    '?': true,
    "'": true,
    ',': true,
    ';': true,
    '.': true,
  }

  const detector = Detector(banned)

  let word = ''

  for (let i = 0; i < paragraph.length; i++) {
    const char = paragraph[i]

    if (SPLIT_CHARS[char] === undefined) {
      word += char

      continue
    }

    detector.detect(word)
    word = ''
  }

  detector.detect(word)

  return detector.output()
};
// @lc code=end

console.log(
  // mostCommonWord('Bob hit a ball, the hit BALL flew far after it was hit.', ['hit'])
  // mostCommonWord('a.', [])
  mostCommonWord("Bob", [])
)

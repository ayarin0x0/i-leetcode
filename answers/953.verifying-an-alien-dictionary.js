/*
 * @lc app=leetcode id=953 lang=javascript
 *
 * [953] Verifying an Alien Dictionary
 *
 * https://leetcode.com/problems/verifying-an-alien-dictionary/description/
 *
 * algorithms
 * Easy (55.24%)
 * Likes:    4915
 * Dislikes: 1646
 * Total Accepted:    529.5K
 * Total Submissions: 957.5K
 * Testcase Example:  '["hello","leetcode"]\n"hlabcdefgijkmnopqrstuvwxyz"'
 *
 * In an alien language, surprisingly, they also use English lowercase letters,
 * but possibly in a different order. The order of the alphabet is some
 * permutation of lowercase letters.
 *
 * Given a sequence of words written in the alien language, and the order of
 * the alphabet, return true if and only if the given words are sorted
 * lexicographically in this alien language.
 *
 *
 * Example 1:
 *
 *
 * Input: words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
 * Output: true
 * Explanation: As 'h' comes before 'l' in this language, then the sequence is
 * sorted.
 *
 *
 * Example 2:
 *
 *
 * Input: words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz"
 * Output: false
 * Explanation: As 'd' comes after 'l' in this language, then words[0] >
 * words[1], hence the sequence is unsorted.
 *
 *
 * Example 3:
 *
 *
 * Input: words = ["apple","app"], order = "abcdefghijklmnopqrstuvwxyz"
 * Output: false
 * Explanation: The first three characters "app" match, and the second string
 * is shorter (in size.) According to lexicographical rules "apple" > "app",
 * because 'l' > '∅', where '∅' is defined as the blank character which is less
 * than any other character (More info).
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= words.length <= 100
 * 1 <= words[i].length <= 20
 * order.length == 26
 * All characters in words[i] and order are English lowercase letters.
 *
 *
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
  outer: for (let i = 1; i < words.length; i++) {
    const prev = words[i - 1]
    const cur = words[i]

    if (cur === prev) {
      continue
    }

    const len = Math.min(prev.length, cur.length)
    for (let j = 0; j < len + 1; j++) {
      const prevIndex = order.indexOf(prev[j])
      const curIndex = order.indexOf(cur[j])

      if (curIndex === prevIndex) {
        continue
      }

      if (curIndex > prevIndex) {
        continue outer
      }

      if (curIndex < prevIndex) {
        return false
      }
    }
  }

  return true
};
// @lc code=end

console.log(
  isAlienSorted(["hello","leetcode"], "hlabcdefgijkmnopqrstuvwxyz")
  // isAlienSorted(["word","world","row"], "worldabcefghijkmnpqstuvxyz")
  // isAlienSorted(["apple","app"], "abcdefghijklmnopqrstuvwxyz")
)

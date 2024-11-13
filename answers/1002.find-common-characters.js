/*
 * @lc app=leetcode id=1002 lang=javascript
 *
 * [1002] Find Common Characters
 *
 * https://leetcode.com/problems/find-common-characters/description/
 *
 * algorithms
 * Easy (74.64%)
 * Likes:    4309
 * Dislikes: 413
 * Total Accepted:    375.6K
 * Total Submissions: 503.5K
 * Testcase Example:  '["bella","label","roller"]'
 *
 * Given a string array words, return an array of all characters that show up
 * in all strings within the words (including duplicates). You may return the
 * answer in any order.
 *
 *
 * Example 1:
 * Input: words = ["bella","label","roller"]
 * Output: ["e","l","l"]
 * Example 2:
 * Input: words = ["cool","lock","cook"]
 * Output: ["c","o"]
 *
 *
 * Constraints:
 *
 *
 * 1 <= words.length <= 100
 * 1 <= words[i].length <= 100
 * words[i] consists of lowercase English letters.
 *
 *
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
  let base = mapping(words[0])

  for (let i = 1; i < words.length; i++) {
    const word = words[i]

    remapping(base, mapping(word))
  }

  const result = []

  for (let i = 0; i < base.length; i++) {
    const count = base[i]

    if (count > 0) {
      const char = String.fromCodePoint(97 + i)

      for (let j = 0; j < count; j++) {
        result.push(char)
      }
    }
  }

  return result
};

function remapping(base, map) {
  const len = Math.max(base.length, map.length)
  for (let i = 0; i < len; i++) {
    if (base[i] > 0 && map[i] > 0) {
      base[i] = Math.min(base[i], map[i])
    } else {
      base[i] = 0
    }
  }

  return base
}

function mapping(word) {
  const map = []

  for (let i = 0; i < word.length; i++) {
    const code = word[i].codePointAt() - 97

    if (map[code] === undefined) {
      map[code] = 0
    }

    map[code] += 1
  }

  return map
}
// @lc code=end

console.log(
  commonChars(["bella","label","roller"])
)

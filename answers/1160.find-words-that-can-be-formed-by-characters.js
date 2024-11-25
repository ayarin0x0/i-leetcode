/*
 * @lc app=leetcode id=1160 lang=javascript
 *
 * [1160] Find Words That Can Be Formed by Characters
 *
 * https://leetcode.com/problems/find-words-that-can-be-formed-by-characters/description/
 *
 * algorithms
 * Easy (70.71%)
 * Likes:    2142
 * Dislikes: 186
 * Total Accepted:    278K
 * Total Submissions: 392.8K
 * Testcase Example:  '["cat","bt","hat","tree"]\n"atach"'
 *
 * You are given an array of strings words and a string chars.
 *
 * A string is good if it can be formed by characters from chars (each
 * character can only be used once).
 *
 * Return the sum of lengths of all good strings in words.
 *
 *
 * Example 1:
 *
 *
 * Input: words = ["cat","bt","hat","tree"], chars = "atach"
 * Output: 6
 * Explanation: The strings that can be formed are "cat" and "hat" so the
 * answer is 3 + 3 = 6.
 *
 *
 * Example 2:
 *
 *
 * Input: words = ["hello","world","leetcode"], chars = "welldonehoneyr"
 * Output: 10
 * Explanation: The strings that can be formed are "hello" and "world" so the
 * answer is 5 + 5 = 10.
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= words.length <= 1000
 * 1 <= words[i].length, chars.length <= 100
 * words[i] and chars consist of lowercase English letters.
 *
 *
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
  const map = Object.create(null)

  for (let i = 0; i < chars.length; i++) {
    const char = chars[i]

    if (map[char] === undefined) {
      map[char] = 0
    }

    map[char] += 1
  }

  let result = 0

  for (let i = 0; i < words.length; i++) {
    const word = words[i]

    if (word.length > chars.length) {
      continue
    }

    const count = resolveWord(word, map)

    result += count
  }

  return result
};

function resolveWord(word, map) {
  const damage = Object.create(null)

  for (let i = 0; i < word.length; i++) {
    const target = word[i]
    const hp = map[target]

    if (hp === undefined) {
      return 0
    }

    if (damage[target] === undefined) {
      damage[target] = 0
    }

    damage[target] += 1

    if (damage[target] > hp) {
      return 0
    }
  }

  return word.length
}

// @lc code=end

console.log(
  // countCharacters(["cat","bt","hat","tree"], "atach")
  countCharacters(["hello","world","leetcode"], "welldonehoneyr")
)

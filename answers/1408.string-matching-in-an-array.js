/*
 * @lc app=leetcode id=1408 lang=javascript
 *
 * [1408] String Matching in an Array
 *
 * https://leetcode.com/problems/string-matching-in-an-array/description/
 *
 * algorithms
 * Easy (64.17%)
 * Likes:    915
 * Dislikes: 88
 * Total Accepted:    98.2K
 * Total Submissions: 153K
 * Testcase Example:  '["mass","as","hero","superhero"]'
 *
 * Given an array of string words, return all strings in words that is a
 * substring of another word. You can return the answer in any order.
 *
 * A substring is a contiguous sequence of characters within a string
 *
 *
 * Example 1:
 *
 *
 * Input: words = ["mass","as","hero","superhero"]
 * Output: ["as","hero"]
 * Explanation: "as" is substring of "mass" and "hero" is substring of
 * "superhero".
 * ["hero","as"] is also a valid answer.
 *
 *
 * Example 2:
 *
 *
 * Input: words = ["leetcode","et","code"]
 * Output: ["et","code"]
 * Explanation: "et", "code" are substring of "leetcode".
 *
 *
 * Example 3:
 *
 *
 * Input: words = ["blue","green","bu"]
 * Output: []
 * Explanation: No string of words is substring of another string.
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= words.length <= 100
 * 1 <= words[i].length <= 30
 * words[i] contains only lowercase English letters.
 * All the strings of words are unique.
 *
 *
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function(words) {
  const result = []

  words.sort((a, b) => a.length - b.length)

  for (let i = 0; i < words.length - 1; i++) {
    const word = words[i]

    for (let j = i + 1; j < words.length; j++) {
      const target = words[j]

      if (target.includes(word)) {
        result.push(word)

        break
      }
    }
  }

  return result
};
// @lc code=end

console.log(
  // stringMatching(["mass","as","hero","superhero"])
  // stringMatching(["leetcode","et","code"])
  stringMatching(["leetcoder","leetcode","od","hamlet","am"])
)

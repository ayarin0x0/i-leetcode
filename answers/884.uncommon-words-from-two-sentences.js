/*
 * @lc app=leetcode id=884 lang=javascript
 *
 * [884] Uncommon Words from Two Sentences
 *
 * https://leetcode.com/problems/uncommon-words-from-two-sentences/description/
 *
 * algorithms
 * Easy (75.19%)
 * Likes:    1822
 * Dislikes: 205
 * Total Accepted:    299.3K
 * Total Submissions: 397.9K
 * Testcase Example:  '"this apple is sweet"\n"this apple is sour"'
 *
 * A sentence is a string of single-space separated words where each word
 * consists only of lowercase letters.
 *
 * A word is uncommon if it appears exactly once in one of the sentences, and
 * does not appear in the other sentence.
 *
 * Given two sentences s1 and s2, return a list of all the uncommon words. You
 * may return the answer in any order.
 *
 *
 * Example 1:
 *
 *
 * Input: s1 = "this apple is sweet", s2 = "this apple is sour"
 *
 * Output: ["sweet","sour"]
 *
 * Explanation:
 *
 * The word "sweet" appears only in s1, while the word "sour" appears only in
 * s2.
 *
 *
 * Example 2:
 *
 *
 * Input: s1 = "apple apple", s2 = "banana"
 *
 * Output: ["banana"]
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= s1.length, s2.length <= 200
 * s1 and s2 consist of lowercase English letters and spaces.
 * s1 and s2 do not have leading or trailing spaces.
 * All the words in s1 and s2 are separated by a single space.
 *
 *
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
  const map = Object.create(null)
  const words = []

  const s1words = s1.split(' ')

  for (let i = 0; i < s1words.length; i++) {
    const word = s1words[i]

    if (map[word] === undefined) {
      words.push(word)
      map[word] = words.length - 1
    } else {
      map[word] = -1
    }
  }

  const s2words = s2.split(' ')

  for (let i = 0; i < s2words.length; i++) {
    const word = s2words[i]

    if (map[word] === undefined) {
      words.push(word)
      map[word] = words.length - 1
    } else {
      map[word] = -1
    }
  }

  const result = []

  for (let i = 0; i < words.length; i++) {
    const word = words[i]

    if (map[word] !== -1) {
      result.push(word)
    }
  }

  return result
};

// @lc code=end

console.log(
  // uncommonFromSentences("this apple is sweet", "this apple is sour")
  uncommonFromSentences("apple apple", "banana")
)

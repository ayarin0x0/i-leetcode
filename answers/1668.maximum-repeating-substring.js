/*
 * @lc app=leetcode id=1668 lang=javascript
 *
 * [1668] Maximum Repeating Substring
 *
 * https://leetcode.com/problems/maximum-repeating-substring/description/
 *
 * algorithms
 * Easy (38.99%)
 * Likes:    737
 * Dislikes: 273
 * Total Accepted:    66.2K
 * Total Submissions: 169.6K
 * Testcase Example:  '"ababc"\n"ab"'
 *
 * For a string sequence, a string word is k-repeating if word concatenated k
 * times is a substring of sequence. The word's maximum k-repeating value is
 * the highest value k where word is k-repeating in sequence. If word is not a
 * substring of sequence, word's maximum k-repeating value is 0.
 *
 * Given strings sequence and word, return the maximum k-repeating value of
 * word in sequence.
 *
 *
 * Example 1:
 *
 *
 * Input: sequence = "ababc", word = "ab"
 * Output: 2
 * Explanation: "abab" is a substring in "ababc".
 *
 *
 * Example 2:
 *
 *
 * Input: sequence = "ababc", word = "ba"
 * Output: 1
 * Explanation: "ba" is a substring in "ababc". "baba" is not a substring in
 * "ababc".
 *
 *
 * Example 3:
 *
 *
 * Input: sequence = "ababc", word = "ac"
 * Output: 0
 * Explanation: "ac" is not a substring in "ababc".
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= sequence.length <= 100
 * 1 <= word.length <= 100
 * sequence and word contains only lowercase English letters.
 *
 *
 */

// @lc code=start
/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
var maxRepeating = function(sequence, word) {
  if (word.length > sequence.length) {
    return 0
  }

  if (word.length === sequence.length) {
    return word === sequence ? 1 : 0
  }

  let maxK = 0
  const wordAnchor = word[0]

  for (let i = 0; i < sequence.length; i++) {
    const anchor = sequence[i]

    if (anchor !== wordAnchor) {
      continue
    }

    let k = 0
    let isBreak = false

    for (;;) {
      const offset = k * word.length + i
      let index
      for (let j = 0; j < word.length; j++) {
        index = offset + j

        if (sequence[index] !== word[j]) {
          isBreak = true

          break
        }
      }

      if (!isBreak) {
        k += 1

        continue
      }

      maxK = Math.max(k, maxK)
      // i = index

      break
    }

    if (maxK * word.length > sequence.length - (i + 1)) {
      break
    }
  }

  return maxK
};
// @lc code=end

console.log(
  // maxRepeating("ababc", "ab")
  // maxRepeating("ababc", "ba")
  // maxRepeating("aaaaa", "aa")
  maxRepeating("aaabaaaabaaabaaaabaaaabaaaabaaaaba", "aaaba")
)

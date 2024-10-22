/*
 * @lc app=leetcode id=520 lang=javascript
 *
 * [520] Detect Capital
 *
 * https://leetcode.com/problems/detect-capital/description/
 *
 * algorithms
 * Easy (56.37%)
 * Likes:    3426
 * Dislikes: 462
 * Total Accepted:    455.2K
 * Total Submissions: 807.8K
 * Testcase Example:  '"USA"'
 *
 * We define the usage of capitals in a word to be right when one of the
 * following cases holds:
 *
 *
 * All letters in this word are capitals, like "USA".
 * All letters in this word are not capitals, like "leetcode".
 * Only the first letter in this word is capital, like "Google".
 *
 *
 * Given a string word, return true if the usage of capitals in it is right.
 *
 *
 * Example 1:
 * Input: word = "USA"
 * Output: true
 * Example 2:
 * Input: word = "FlaG"
 * Output: false
 *
 *
 * Constraints:
 *
 *
 * 1 <= word.length <= 100
 * word consists of lowercase and uppercase English letters.
 *
 *
 */

// @lc code=start
/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
  if (word.length < 2) {
    return true
  }

  const firstChar = word[0]

  let matcher

  if (lowercaseMatcher(firstChar)) {
    matcher = lowercaseMatcher
  } else {
    const secondChar = word[1]

    matcher = uppercaseMatcher(secondChar) ? uppercaseMatcher : lowercaseMatcher
  }

  for (let i = 1; i < word.length; i++) {
    if (matcher(word[i]) === false) {
      return false
    }
  }

  return true

  function lowercaseMatcher(char) {
    return char === char.toLowerCase()
  }

  function uppercaseMatcher(char) {
    return char === char.toUpperCase()
  }
};
// @lc code=end

console.log(
  detectCapitalUse('mL')
)

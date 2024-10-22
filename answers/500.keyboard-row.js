/*
 * @lc app=leetcode id=500 lang=javascript
 *
 * [500] Keyboard Row
 *
 * https://leetcode.com/problems/keyboard-row/description/
 *
 * algorithms
 * Easy (71.36%)
 * Likes:    1635
 * Dislikes: 1140
 * Total Accepted:    249.2K
 * Total Submissions: 348.8K
 * Testcase Example:  '["Hello","Alaska","Dad","Peace"]'
 *
 * Given an array of strings words, return the words that can be typed using
 * letters of the alphabet on only one row of American keyboard like the image
 * below.
 *
 * In the American keyboard:
 *
 *
 * the first row consists of the characters "qwertyuiop",
 * the second row consists of the characters "asdfghjkl", and
 * the third row consists of the characters "zxcvbnm".
 *
 *
 *
 * Example 1:
 *
 *
 * Input: words = ["Hello","Alaska","Dad","Peace"]
 * Output: ["Alaska","Dad"]
 *
 *
 * Example 2:
 *
 *
 * Input: words = ["omk"]
 * Output: []
 *
 *
 * Example 3:
 *
 *
 * Input: words = ["adsdf","sfd"]
 * Output: ["adsdf","sfd"]
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= words.length <= 20
 * 1 <= words[i].length <= 100
 * words[i] consists of English letters (both lowercase and uppercase). 
 *
 *
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
  const row1 = new Set(['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'])
  const row2 = new Set(['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'])
  const row3 = new Set(['z', 'x', 'c', 'v', 'b', 'n', 'm'])

  return words.filter(word => {
    const chars = word.toLowerCase().split('')

    const matcher = (function () {
      const char0 = chars[0]

      if (row1.has(char0)) {
        return row1
      } else if (row2.has(char0)) {
        return row2
      } else {
        return row3
      }
    })()

    for (let i = 1; i < chars.length; i++) {
      const char = chars[i]

      if (!matcher.has(char)) {
        return false
      }
    }

    return true
  })
};
// @lc code=end

console.log(
  findWords(['omk', 'Alaska', 'Dad', 'Peace'])
)

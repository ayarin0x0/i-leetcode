/*
 * @lc app=leetcode id=1592 lang=javascript
 *
 * [1592] Rearrange Spaces Between Words
 *
 * https://leetcode.com/problems/rearrange-spaces-between-words/description/
 *
 * algorithms
 * Easy (43.35%)
 * Likes:    467
 * Dislikes: 350
 * Total Accepted:    62.4K
 * Total Submissions: 142.2K
 * Testcase Example:  '"  this   is  a sentence "'
 *
 * You are given a string text of words that are placed among some number of
 * spaces. Each word consists of one or more lowercase English letters and are
 * separated by at least one space. It's guaranteed that text contains at least
 * one word.
 *
 * Rearrange the spaces so that there is an equal number of spaces between
 * every pair of adjacent words and that number is maximized. If you cannot
 * redistribute all the spaces equally, place the extra spaces at the end,
 * meaning the returned string should be the same length as text.
 *
 * Return the string after rearranging the spaces.
 *
 *
 * Example 1:
 *
 *
 * Input: text = "  this   is  a sentence "
 * Output: "this   is   a   sentence"
 * Explanation: There are a total of 9 spaces and 4 words. We can evenly divide
 * the 9 spaces between the words: 9 / (4-1) = 3 spaces.
 *
 *
 * Example 2:
 *
 *
 * Input: text = " practice   makes   perfect"
 * Output: "practice   makes   perfect "
 * Explanation: There are a total of 7 spaces and 3 words. 7 / (3-1) = 3 spaces
 * plus 1 extra space. We place this extra space at the end of the string.
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= text.length <= 100
 * text consists of lowercase English letters and ' '.
 * text contains at least one word.
 *
 *
 */

// @lc code=start
const SETUP = 1
const SPACE = 2
const WORD = 4

/**
 * @param {string} text
 * @return {string}
 */
var reorderSpaces = function(text) {
  let spaceStocks = 0
  let gapStocks = 0

  let mode = SETUP

  const words = []
  let word = ''

  function onWord(char) {
    word += char
  }

  function onSpace() {
    words.push(word)
    word = ''
  }

  for (let i = 0; i < text.length; i++) {
    const char = text[i]

    if (mode === SETUP) {
      if (char === ' ') {
        spaceStocks += 1
      } else {
        mode = WORD
        onWord(char)
      }

      continue
    }

    if (mode === WORD) {
      if (char === ' ') {
        spaceStocks += 1
        mode = SPACE
        onSpace()
      } else {
        onWord(char)
      }

      continue
    }

    // mode === SPACE
    if (char === ' ') {
      spaceStocks += 1
    } else {
      gapStocks += 1
      mode = WORD
      onWord(char)
    }
  }

  if (word.length > 0) {
    onSpace()
  }

  let result = ''

  if (gapStocks > 0) {
    const spaceTemplate = ' '.repeat(Math.floor(spaceStocks / gapStocks))
    spaceStocks = spaceStocks % gapStocks

    for (let i = 0; i < words.length - 1; i++) {
      result += words[i]
      result += spaceTemplate
    }
  }

  result += words[words.length - 1]
  result += ' '.repeat(spaceStocks)

  return result
};
// @lc code=end

console.log(
  // reorderSpaces("  this   is  a sentence ")
  // reorderSpaces(" practice   makes   perfect")
  reorderSpaces("  hello")
)

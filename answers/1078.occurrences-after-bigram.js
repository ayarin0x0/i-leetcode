/*
 * @lc app=leetcode id=1078 lang=javascript
 *
 * [1078] Occurrences After Bigram
 *
 * https://leetcode.com/problems/occurrences-after-bigram/description/
 *
 * algorithms
 * Easy (63.56%)
 * Likes:    500
 * Dislikes: 362
 * Total Accepted:    78.3K
 * Total Submissions: 123.2K
 * Testcase Example:  '"alice is a good girl she is a good student"\n"a"\n"good"'
 *
 * Given two strings first and second, consider occurrences in some text of the
 * form "first second third", where second comes immediately after first, and
 * third comes immediately after second.
 *
 * Return an array of all the words third for each occurrence of "first second
 * third".
 *
 *
 * Example 1:
 * Input: text = "alice is a good girl she is a good student", first = "a",
 * second = "good"
 * Output: ["girl","student"]
 * Example 2:
 * Input: text = "we will we will rock you", first = "we", second = "will"
 * Output: ["we","rock"]
 *
 *
 * Constraints:
 *
 *
 * 1 <= text.length <= 1000
 * text consists of lowercase English letters and spaces.
 * All the words in text are separated by a single space.
 * 1 <= first.length, second.length <= 10
 * first and second consist of lowercase English letters.
 * text will not have any leading or trailing spaces.
 *
 *
 */

// @lc code=start
/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
var findOcurrences = function(text, first, second) {
  const result = []

  const words = text.split(' ')

  if (words.length < 3) {
    return result
  }

  /**
   * 考虑 first: a, second: a, 此时不能连续跳过 a 和 b
   * 考虑 first: a, second: b, 此时可以直接去判断 i += 2 的地方
   *
   */
  const bonus = first === second ? 0 : 1

  for (let i = 0; i < words.length - 2; i++) {
    const firstWord = words[i]
    const secondWord = words[i + 1]

    if (firstWord !== first || secondWord !== second) {
      continue
    }

    result.push(words[i + 2])
    i += bonus
  }

  return result
};
// @lc code=end

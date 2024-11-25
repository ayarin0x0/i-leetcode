/*
 * @lc app=leetcode id=1189 lang=javascript
 *
 * [1189] Maximum Number of Balloons
 *
 * https://leetcode.com/problems/maximum-number-of-balloons/description/
 *
 * algorithms
 * Easy (59.70%)
 * Likes:    1755
 * Dislikes: 108
 * Total Accepted:    239.7K
 * Total Submissions: 401.5K
 * Testcase Example:  '"nlaebolko"'
 *
 * Given a string text, you want to use the characters of text to form as many
 * instances of the word "balloon" as possible.
 *
 * You can use each character in text at most once. Return the maximum number
 * of instances that can be formed.
 *
 *
 * Example 1:
 *
 *
 *
 *
 * Input: text = "nlaebolko"
 * Output: 1
 *
 *
 * Example 2:
 *
 *
 *
 *
 * Input: text = "loonbalxballpoon"
 * Output: 2
 *
 *
 * Example 3:
 *
 *
 * Input: text = "leetcode"
 * Output: 0
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= text.length <= 10^4
 * text consists of lower case English letters only.
 *
 *
 *
 * Note: This question is the same as  2287: Rearrange Characters to Make
 * Target String.
 *
 */

// @lc code=start
/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
  const map = {
    b: 0.0,
    a: 0.0,
    l: 0.0,
    o: 0.0,
    n: 0.0,
  }

  const charMap = {
    b: 1.0,
    a: 1.0,
    l: 0.5,
    o: 0.5,
    n: 1.0,
  }

  for (let i = 0; i < text.length; i++) {
    const char = text[i]
    const power = charMap[char]

    if (power === undefined) {
      continue
    }

    map[char] += power
  }

  let min = Infinity

  const chars = Object.keys(map)

  for (let i = 0; i < chars.length; i++) {
    const char = chars[i]
    const power = map[char]

    min = Math.min(min, power)
  }

  return Math.floor(min)
};
// @lc code=end
console.log(
  maxNumberOfBalloons('nlaebolko')
)

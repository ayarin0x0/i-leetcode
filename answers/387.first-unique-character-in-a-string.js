/*
 * @lc app=leetcode id=387 lang=javascript
 *
 * [387] First Unique Character in a String
 *
 * https://leetcode.com/problems/first-unique-character-in-a-string/description/
 *
 * algorithms
 * Easy (60.14%)
 * Likes:    9035
 * Dislikes: 300
 * Total Accepted:    1.8M
 * Total Submissions: 2.9M
 * Testcase Example:  '"leetcode"'
 *
 * Given a string s, find the first non-repeating character in it and return
 * its index. If it does not exist, return -1.
 *
 *
 * Example 1:
 *
 *
 * Input: s = "leetcode"
 *
 * Output: 0
 *
 * Explanation:
 *
 * The character 'l' at index 0 is the first character that does not occur at
 * any other index.
 *
 *
 * Example 2:
 *
 *
 * Input: s = "loveleetcode"
 *
 * Output: 2
 *
 *
 * Example 3:
 *
 *
 * Input: s = "aabb"
 *
 * Output: -1
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= s.length <= 10^5
 * s consists of only lowercase English letters.
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  const map = new Map
  const charList = []
  const charIndexList = []

  for (let i = 0; i < s.length; i++) {
    const char = s[i]
    const count = map.get(char)

    if (count === undefined) {
      map.set(char, 1)
      charList.push(char)
      charIndexList.push(i)
    } else {
      map.set(char, count + 1)
    }
  }


  for (let i = 0; i < charList.length; i++) {
    const char = charList[i]

    if (map.get(char) === 1) {
      return charIndexList[i]
    }
  }

  return -1
}
// @lc code=end

console.log(
  firstUniqChar('dddccdbba')
)

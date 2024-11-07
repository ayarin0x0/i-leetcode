/*
 * @lc app=leetcode id=859 lang=javascript
 *
 * [859] Buddy Strings
 *
 * https://leetcode.com/problems/buddy-strings/description/
 *
 * algorithms
 * Easy (33.25%)
 * Likes:    3210
 * Dislikes: 1809
 * Total Accepted:    256.3K
 * Total Submissions: 769.3K
 * Testcase Example:  '"ab"\n"ba"'
 *
 * Given two strings s and goal, return true if you can swap two letters in s
 * so the result is equal to goal, otherwise, return false.
 *
 * Swapping letters is defined as taking two indices i and j (0-indexed) such
 * that i != j and swapping the characters at s[i] and s[j].
 *
 *
 * For example, swapping at indices 0 and 2 in "abcd" results in "cbad".
 *
 *
 *
 * Example 1:
 *
 *
 * Input: s = "ab", goal = "ba"
 * Output: true
 * Explanation: You can swap s[0] = 'a' and s[1] = 'b' to get "ba", which is
 * equal to goal.
 *
 *
 * Example 2:
 *
 *
 * Input: s = "ab", goal = "ab"
 * Output: false
 * Explanation: The only letters you can swap are s[0] = 'a' and s[1] = 'b',
 * which results in "ba" != goal.
 *
 *
 * Example 3:
 *
 *
 * Input: s = "aa", goal = "aa"
 * Output: true
 * Explanation: You can swap s[0] = 'a' and s[1] = 'a' to get "aa", which is
 * equal to goal.
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= s.length, goal.length <= 2 * 10^4
 * s and goal consist of lowercase letters.
 *
 *
 */

// @lc code=start
/**
 * 将任意两个字符串缩减成两个字符, 如果无法缩减成2个字符, 则一定失败
 *
 * 如果可以缩减成2个字符, 那么只存在以下两种情况
 * - ab, ba 一定 true (考虑 abc, bac 缩减后 ab 一定可以互换成功)
 * - aa, aa 一定 true
 * - ax, bx 一定 false
 *
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function(s, goal) {
  if (s.length !== goal.length) {
    return false
  }

  if (s === goal) {
    // 检查是否有相同的字符
    const map = Object.create(null)

    for (let i = 0; i < s.length; i++) {
      const char = s[i]

      if (map[char] === undefined) {
        map[char] = 1

        continue
      }

      // 包含任意两个相同的字符
      return true
    }

    return false
  }

  const diffIndex = []

  let hp = 2

  for (let i = 0; i < s.length; i++) {
    const sChar = s[i]
    const gChar = goal[i]

    if (sChar === gChar) {
      continue
    }

    diffIndex.push(i)
    hp -= 1

    if (hp < 0) {
      return false
    }
  }

  // hp = 2 => s === goal
  // if (hp === 2) {
  //   ...
  // }

  if (hp === 1) {
    return false
  }

  if (hp === 0) {
    s = s[diffIndex[0]] + s[diffIndex[1]]
    goal = goal[diffIndex[1]] + goal[diffIndex[0]]

    if (s === goal) {
      return true
    }

    return false
  }
};
// @lc code=end

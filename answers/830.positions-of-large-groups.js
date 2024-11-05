/*
 * @lc app=leetcode id=830 lang=javascript
 *
 * [830] Positions of Large Groups
 *
 * https://leetcode.com/problems/positions-of-large-groups/description/
 *
 * algorithms
 * Easy (52.56%)
 * Likes:    883
 * Dislikes: 124
 * Total Accepted:    101.2K
 * Total Submissions: 192.4K
 * Testcase Example:  '"abbxxxxzzy"'
 *
 * In a string s of lowercase letters, these letters form consecutive groups of
 * the same character.
 *
 * For example, a string like s = "abbxxxxzyy" has the groups "a", "bb",
 * "xxxx", "z", and "yy".
 *
 * A group is identified by an interval [start, end], where start and end
 * denote the start and end indices (inclusive) of the group. In the above
 * example, "xxxx" has the interval [3,6].
 *
 * A group is considered large if it has 3 or more characters.
 *
 * Return the intervals of every large group sorted in increasing order by
 * start index.
 *
 *
 * Example 1:
 *
 *
 * Input: s = "abbxxxxzzy"
 * Output: [[3,6]]
 * Explanation: "xxxx" is the only large group with start index 3 and end index
 * 6.
 *
 *
 * Example 2:
 *
 *
 * Input: s = "abc"
 * Output: []
 * Explanation: We have groups "a", "b", and "c", none of which are large
 * groups.
 *
 *
 * Example 3:
 *
 *
 * Input: s = "abcdddeeeeaabbbcd"
 * Output: [[3,5],[6,9],[12,14]]
 * Explanation: The large groups are "ddd", "eeee", and "bbb".
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= s.length <= 1000
 * s contains lowercase English letters only.
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function(s) {
  const result = []

  let count = 1
  let prevChar = s[0]
  let prevCharStart = 0

  for (let i = 1; i < s.length + 1; i++) {
    const char = s[i]

    if (char === prevChar) {
      count += 1

      continue
    }

    if (count >= 3) {
      result.push([prevCharStart, i - 1])
    }

    count = 1
    prevChar = char
    prevCharStart = i
  }

  return result
};
// @lc code=end

console.log(
  largeGroupPositions('abcdddeeeeaabbbcd')
)

/*
 * @lc app=leetcode id=942 lang=javascript
 *
 * [942] DI String Match
 *
 * https://leetcode.com/problems/di-string-match/description/
 *
 * algorithms
 * Easy (79.29%)
 * Likes:    2482
 * Dislikes: 1039
 * Total Accepted:    167.7K
 * Total Submissions: 211.3K
 * Testcase Example:  '"IDID"'
 *
 * A permutation perm of n + 1 integers of all the integers in the range [0, n]
 * can be represented as a string s of length n where:
 *
 *
 * s[i] == 'I' if perm[i] < perm[i + 1], and
 * s[i] == 'D' if perm[i] > perm[i + 1].
 *
 *
 * Given a string s, reconstruct the permutation perm and return it. If there
 * are multiple valid permutations perm, return any of them.
 *
 *
 * Example 1:
 * Input: s = "IDID"
 * Output: [0,4,1,3,2]
 * Example 2:
 * Input: s = "III"
 * Output: [0,1,2,3]
 * Example 3:
 * Input: s = "DDI"
 * Output: [3,2,0,1]
 *
 *
 * Constraints:
 *
 *
 * 1 <= s.length <= 10^5
 * s[i] is either 'I' or 'D'.
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function(s) {
  const result = []

  let nextI = 0
  let nextD = s.length

  for (let i = 0; i < s.length; i++) {
    const char = s[i]

    if (char === 'I') {
      result.push(nextI++)
    } else {
      result.push(nextD--)
    }
  }

  result.push(nextI)

  return result
};
// @lc code=end
console.log(
  diStringMatch("IDD")
)

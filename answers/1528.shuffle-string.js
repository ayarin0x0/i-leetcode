/*
 * @lc app=leetcode id=1528 lang=javascript
 *
 * [1528] Shuffle String
 *
 * https://leetcode.com/problems/shuffle-string/description/
 *
 * algorithms
 * Easy (84.90%)
 * Likes:    2793
 * Dislikes: 527
 * Total Accepted:    417.1K
 * Total Submissions: 491.1K
 * Testcase Example:  '"codeleet"\n[4,5,6,7,0,2,1,3]'
 *
 * You are given a string s and an integer array indices of the same length.
 * The string s will be shuffled such that the character at the i^th position
 * moves to indices[i] in the shuffled string.
 *
 * Return the shuffled string.
 *
 *
 * Example 1:
 *
 *
 * Input: s = "codeleet", indices = [4,5,6,7,0,2,1,3]
 * Output: "leetcode"
 * Explanation: As shown, "codeleet" becomes "leetcode" after shuffling.
 *
 *
 * Example 2:
 *
 *
 * Input: s = "abc", indices = [0,1,2]
 * Output: "abc"
 * Explanation: After shuffling, each character remains in its position.
 *
 *
 *
 * Constraints:
 *
 *
 * s.length == indices.length == n
 * 1 <= n <= 100
 * s consists of only lowercase English letters.
 * 0 <= indices[i] < n
 * All values of indices are unique.
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
  const result = []

  for (let i = 0; i < s.length; i++) {
    const char = s[i]
    const index = indices[i]

    result[index] = char
  }

  return result.join('')
};
// @lc code=end

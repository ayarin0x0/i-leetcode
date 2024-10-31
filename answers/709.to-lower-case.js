/*
 * @lc app=leetcode id=709 lang=javascript
 *
 * [709] To Lower Case
 *
 * https://leetcode.com/problems/to-lower-case/description/
 *
 * algorithms
 * Easy (83.70%)
 * Likes:    1877
 * Dislikes: 2781
 * Total Accepted:    565.3K
 * Total Submissions: 674.9K
 * Testcase Example:  '"Hello"'
 *
 * Given a string s, return the string after replacing every uppercase letter
 * with the same lowercase letter.
 *
 *
 * Example 1:
 *
 *
 * Input: s = "Hello"
 * Output: "hello"
 *
 *
 * Example 2:
 *
 *
 * Input: s = "here"
 * Output: "here"
 *
 *
 * Example 3:
 *
 *
 * Input: s = "LOVELY"
 * Output: "lovely"
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= s.length <= 100
 * s consists of printable ASCII characters.
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function(s) {
    return s.toLowerCase()
};
// @lc code=end

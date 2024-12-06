/*
 * @lc app=leetcode id=1598 lang=javascript
 *
 * [1598] Crawler Log Folder
 *
 * https://leetcode.com/problems/crawler-log-folder/description/
 *
 * algorithms
 * Easy (71.77%)
 * Likes:    1461
 * Dislikes: 97
 * Total Accepted:    258.5K
 * Total Submissions: 360.5K
 * Testcase Example:  '["d1/","d2/","../","d21/","./"]'
 *
 * The Leetcode file system keeps a log each time some user performs a change
 * folder operation.
 *
 * The operations are described below:
 *
 *
 * "../" : Move to the parent folder of the current folder. (If you are already
 * in the main folder, remain in the same folder).
 * "./" : Remain in the same folder.
 * "x/" : Move to the child folder named x (This folder is guaranteed to always
 * exist).
 *
 *
 * You are given a list of strings logs where logs[i] is the operation
 * performed by the user at the i^th step.
 *
 * The file system starts in the main folder, then the operations in logs are
 * performed.
 *
 * Return the minimum number of operations needed to go back to the main folder
 * after the change folder operations.
 *
 *
 * Example 1:
 *
 *
 *
 *
 * Input: logs = ["d1/","d2/","../","d21/","./"]
 * Output: 2
 * Explanation: Use this change folder operation "../" 2 times and go back to
 * the main folder.
 *
 *
 * Example 2:
 *
 *
 *
 *
 * Input: logs = ["d1/","d2/","./","d3/","../","d31/"]
 * Output: 3
 *
 *
 * Example 3:
 *
 *
 * Input: logs = ["d1/","../","../","../"]
 * Output: 0
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= logs.length <= 10^3
 * 2 <= logs[i].length <= 10
 * logs[i] contains lowercase English letters, digits, '.', and '/'.
 * logs[i] follows the format described in the statement.
 * Folder names consist of lowercase English letters and digits.
 *
 *
 */

// @lc code=start
/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function(logs) {
  let result = 0

  for (let i = 0; i < logs.length; i++) {
    const path = logs[i]

    if (path === './') {
      continue
    }

    if (path === '../') {
      result = Math.max(result - 1, 0)

      continue
    }

    result += 1
  }

  return result
};
// @lc code=end
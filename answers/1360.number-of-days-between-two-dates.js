/*
 * @lc app=leetcode id=1360 lang=javascript
 *
 * [1360] Number of Days Between Two Dates
 *
 * https://leetcode.com/problems/number-of-days-between-two-dates/description/
 *
 * algorithms
 * Easy (50.64%)
 * Likes:    384
 * Dislikes: 1292
 * Total Accepted:    58.2K
 * Total Submissions: 115.1K
 * Testcase Example:  '"2019-06-29"\n"2019-06-30"'
 *
 * Write a program to count the number of days between two dates.
 *
 * The two dates are given as strings, their format is YYYY-MM-DD as shown in
 * the examples.
 *
 *
 * Example 1:
 * Input: date1 = "2019-06-29", date2 = "2019-06-30"
 * Output: 1
 * Example 2:
 * Input: date1 = "2020-01-15", date2 = "2019-12-31"
 * Output: 15
 *
 *
 * Constraints:
 *
 *
 * The given dates are valid dates between the years 1971 and 2100.
 *
 *
 */

// @lc code=start
/**
 * @param {string} date1
 * @param {string} date2
 * @return {number}
 */
var daysBetweenDates = function(date1, date2) {
  const second1 = new Date(date1).getTime()
  const second2 = new Date(date2).getTime()

  return Math.abs(second1 - second2) / 1000 / 60 / 60 / 24
};
// @lc code=end

console.log(
  // daysBetweenDates("2019-06-29", "2019-06-30")
  daysBetweenDates("2020-01-15", "2019-12-31")
)

/*
 * @lc app=leetcode id=1185 lang=javascript
 *
 * [1185] Day of the Week
 *
 * https://leetcode.com/problems/day-of-the-week/description/
 *
 * algorithms
 * Easy (57.87%)
 * Likes:    409
 * Dislikes: 2471
 * Total Accepted:    72.4K
 * Total Submissions: 125.1K
 * Testcase Example:  '31\n8\n2019'
 *
 * Given a date, return the corresponding day of the week for that date.
 *
 * The input is given as three integers representing the day, month and year
 * respectively.
 *
 * Return the answer as one of the following values {"Sunday", "Monday",
 * "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"}.
 *
 *
 * Example 1:
 *
 *
 * Input: day = 31, month = 8, year = 2019
 * Output: "Saturday"
 *
 *
 * Example 2:
 *
 *
 * Input: day = 18, month = 7, year = 1999
 * Output: "Sunday"
 *
 *
 * Example 3:
 *
 *
 * Input: day = 15, month = 8, year = 1993
 * Output: "Sunday"
 *
 *
 *
 * Constraints:
 *
 *
 * The given dates are valid dates between the years 1971 and 2100.
 *
 *
 */

// @lc code=start
/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
var dayOfTheWeek = function(day, month, year) {
  const date = new Date(year, month - 1, day)
  const WEEK_MAP = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

  return WEEK_MAP[date.getDay()]
};

function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
}
// @lc code=end

console.log(
  dayOfTheWeek(31, 8, 2019) // Monday +2 -5
  // dayOfTheWeek(18, 7, 1999) // Saturday +1 -
)

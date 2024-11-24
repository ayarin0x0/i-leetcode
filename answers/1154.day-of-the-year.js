/*
 * @lc app=leetcode id=1154 lang=javascript
 *
 * [1154] Day of the Year
 *
 * https://leetcode.com/problems/day-of-the-year/description/
 *
 * algorithms
 * Easy (48.96%)
 * Likes:    464
 * Dislikes: 480
 * Total Accepted:    68.4K
 * Total Submissions: 140.4K
 * Testcase Example:  '"2019-01-09"'
 *
 * Given a string date representing a Gregorian calendar date formatted as
 * YYYY-MM-DD, return the day number of the year.
 *
 *
 * Example 1:
 *
 *
 * Input: date = "2019-01-09"
 * Output: 9
 * Explanation: Given date is the 9th day of the year in 2019.
 *
 *
 * Example 2:
 *
 *
 * Input: date = "2019-02-10"
 * Output: 41
 *
 *
 *
 * Constraints:
 *
 *
 * date.length == 10
 * date[4] == date[7] == '-', and all other date[i]'s are digits
 * date represents a calendar date between Jan 1^st, 1900 and Dec 31^th, 2019.
 *
 *
 */

// @lc code=start
/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function(date) {
  const MONTH_MAP = [-1, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

  const year = Number(date.slice(0, 4))
  const month = Number(date.slice(5, 7))
  let day = Number(date.slice(8, 10))

  const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
  const bonus = month > 2 && isLeapYear ? 1 : 0

  day += bonus

  for (let i = 1; i < month; i++) {
    day += MONTH_MAP[i]
  }

  return day
};
// @lc code=end
console.log(
  dayOfYear("2019-02-10")
)

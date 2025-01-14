/*
 * @lc app=leetcode id=1491 lang=javascript
 *
 * [1491] Average Salary Excluding the Minimum and Maximum Salary
 *
 * https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/description/
 *
 * algorithms
 * Easy (63.48%)
 * Likes:    2236
 * Dislikes: 187
 * Total Accepted:    354.5K
 * Total Submissions: 558.7K
 * Testcase Example:  '[4000,3000,1000,2000]'
 *
 * You are given an array of unique integers salary where salary[i] is the
 * salary of the i^th employee.
 *
 * Return the average salary of employees excluding the minimum and maximum
 * salary. Answers within 10^-5 of the actual answer will be accepted.
 *
 *
 * Example 1:
 *
 *
 * Input: salary = [4000,3000,1000,2000]
 * Output: 2500.00000
 * Explanation: Minimum salary and maximum salary are 1000 and 4000
 * respectively.
 * Average salary excluding minimum and maximum salary is (2000+3000) / 2 =
 * 2500
 *
 *
 * Example 2:
 *
 *
 * Input: salary = [1000,2000,3000]
 * Output: 2000.00000
 * Explanation: Minimum salary and maximum salary are 1000 and 3000
 * respectively.
 * Average salary excluding minimum and maximum salary is (2000) / 1 = 2000
 *
 *
 *
 * Constraints:
 *
 *
 * 3 <= salary.length <= 100
 * 1000 <= salary[i] <= 10^6
 * All the integers of salary are unique.
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
  salary.sort((a, b) => a - b)

  let sum = 0
  for (let i = 1; i < salary.length - 1; i++) {
    sum += salary[i]
  }

  return sum / (salary.length - 2)
};
// @lc code=end

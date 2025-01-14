/*
 * @lc app=leetcode id=1700 lang=javascript
 *
 * [1700] Number of Students Unable to Eat Lunch
 *
 * https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/description/
 *
 * algorithms
 * Easy (78.39%)
 * Likes:    2453
 * Dislikes: 253
 * Total Accepted:    273.9K
 * Total Submissions: 349.2K
 * Testcase Example:  '[1,1,0,0]\n[0,1,0,1]'
 *
 * The school cafeteria offers circular and square sandwiches at lunch break,
 * referred to by numbers 0 and 1 respectively. All students stand in a queue.
 * Each student either prefers square or circular sandwiches.
 *
 * The number of sandwiches in the cafeteria is equal to the number of
 * students. The sandwiches are placed in a stack. At each step:
 *
 *
 * If the student at the front of the queue prefers the sandwich on the top of
 * the stack, they will take it and leave the queue.
 * Otherwise, they will leave it and go to the queue's end.
 *
 *
 * This continues until none of the queue students want to take the top
 * sandwich and are thus unable to eat.
 *
 * You are given two integer arrays students and sandwiches where sandwiches[i]
 * is the type of the i^​​​​​​th sandwich in the stack (i = 0 is the top of the
 * stack) and students[j] is the preference of the j^​​​​​​th student in the
 * initial queue (j = 0 is the front of the queue). Return the number of
 * students that are unable to eat.
 *
 *
 * Example 1:
 *
 *
 * Input: students = [1,1,0,0], sandwiches = [0,1,0,1]
 * Output: 0
 * Explanation:
 * - Front student leaves the top sandwich and returns to the end of the line
 * making students = [1,0,0,1].
 * - Front student leaves the top sandwich and returns to the end of the line
 * making students = [0,0,1,1].
 * - Front student takes the top sandwich and leaves the line making students =
 * [0,1,1] and sandwiches = [1,0,1].
 * - Front student leaves the top sandwich and returns to the end of the line
 * making students = [1,1,0].
 * - Front student takes the top sandwich and leaves the line making students =
 * [1,0] and sandwiches = [0,1].
 * - Front student leaves the top sandwich and returns to the end of the line
 * making students = [0,1].
 * - Front student takes the top sandwich and leaves the line making students =
 * [1] and sandwiches = [1].
 * - Front student takes the top sandwich and leaves the line making students =
 * [] and sandwiches = [].
 * Hence all students are able to eat.
 *
 *
 * Example 2:
 *
 *
 * Input: students = [1,1,1,0,0,1], sandwiches = [1,0,0,0,1,1]
 * Output: 3
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= students.length, sandwiches.length <= 100
 * students.length == sandwiches.length
 * sandwiches[i] is 0 or 1.
 * students[i] is 0 or 1.
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
  const counter = [0, 0]

  for (let i = 0; i < students.length; i++) {
    const studentPrefer = students[i]

    counter[studentPrefer] += 1
  }

  for (let i = 0; i < sandwiches.length; i++) {
    const sandwich = sandwiches[i]

    counter[sandwich] -= 1

    if (counter[sandwich] < 0) {
      return sandwiches.length - i
    }
  }

  return 0
};
// @lc code=end

console.log(countStudents([1,1,1,0,0,1], [1,0,0,0,1,1]))
// console.log(countStudents([1,1,0,0], [0,1,0,1]))

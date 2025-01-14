/*
 * @lc app=leetcode id=551 lang=javascript
 *
 * [551] Student Attendance Record I
 *
 * https://leetcode.com/problems/student-attendance-record-i/description/
 *
 * algorithms
 * Easy (49.33%)
 * Likes:    786
 * Dislikes: 53
 * Total Accepted:    235.1K
 * Total Submissions: 476.3K
 * Testcase Example:  '"PPALLP"'
 *
 * You are given a string s representing an attendance record for a student
 * where each character signifies whether the student was absent, late, or
 * present on that day. The record only contains the following three
 * characters:
 *
 *
 * 'A': Absent.
 * 'L': Late.
 * 'P': Present.
 *
 *
 * The student is eligible for an attendance award if they meet both of the
 * following criteria:
 *
 *
 * The student was absent ('A') for strictly fewer than 2 days total.
 * The student was never late ('L') for 3 or more consecutive days.
 *
 *
 * Return true if the student is eligible for an attendance award, or false
 * otherwise.
 *
 *
 * Example 1:
 *
 *
 * Input: s = "PPALLP"
 * Output: true
 * Explanation: The student has fewer than 2 absences and was never late 3 or
 * more consecutive days.
 *
 *
 * Example 2:
 *
 *
 * Input: s = "PPALLL"
 * Output: false
 * Explanation: The student was late 3 consecutive days in the last 3 days, so
 * is not eligible for the award.
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= s.length <= 1000
 * s[i] is either 'A', 'L', or 'P'.
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
  const ABSENT = 'A'
  const LATE = 'L'
  const PRESENT = 'P'

  let absentCount = 0
  let lateCount = 0

  const resetLateCount = () => lateCount = 0

  for (let i = 0; i < s.length; i++) {
    const state = s[i]

    if (state === PRESENT) {
      resetLateCount()

      continue
    }

    if (state === ABSENT) {
      resetLateCount()

      absentCount += 1

      if (absentCount >= 2) {
        return false
      }

      continue
    }

    if (state === LATE) {
      lateCount += 1

      if (lateCount >= 3) {
        return false
      }

      continue
    }
  }

  return true
};
// @lc code=end

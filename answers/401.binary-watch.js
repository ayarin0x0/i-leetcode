/*
 * @lc app=leetcode id=401 lang=javascript
 *
 * [401] Binary Watch
 *
 * https://leetcode.com/problems/binary-watch/description/
 *
 * algorithms
 * Easy (53.13%)
 * Likes:    1416
 * Dislikes: 2604
 * Total Accepted:    151.5K
 * Total Submissions: 274.5K
 * Testcase Example:  '1'
 *
 * A binary watch has 4 LEDs on the top to represent the hours (0-11), and 6
 * LEDs on the bottom to represent the minutes (0-59). Each LED represents a
 * zero or one, with the least significant bit on the right.
 *
 *
 * For example, the below binary watch reads "4:51".
 *
 *
 *
 *
 * Given an integer turnedOn which represents the number of LEDs that are
 * currently on (ignoring the PM), return all possible times the watch could
 * represent. You may return the answer in any order.
 *
 * The hour must not contain a leading zero.
 *
 *
 * For example, "01:00" is not valid. It should be "1:00".
 *
 *
 * The minute must consist of two digits and may contain a leading zero.
 *
 *
 * For example, "10:2" is not valid. It should be "10:02".
 *
 *
 *
 * Example 1:
 * Input: turnedOn = 1
 * Output:
 * ["0:01","0:02","0:04","0:08","0:16","0:32","1:00","2:00","4:00","8:00"]
 * Example 2:
 * Input: turnedOn = 9
 * Output: []
 *
 *
 * Constraints:
 *
 *
 * 0 <= turnedOn <= 10
 *
 *
 */
// @lc code=start

function getCombination(group, turnedOn) {
  function combinate(nums, start, end, pointerCount, sum, result) {
    if (pointerCount === 0) {
      result.push(sum)
      return
    }

    for (let i = start; i < end; i++) {
      combinate(nums, i + 1, end, pointerCount - 1, sum + nums[i], result)
    }

    return result
  }

  return combinate(group, 0, group.length, turnedOn, 0, [])
}

/**
 * @param {number} turnedOn
 * @return {string[]}
 */
var readBinaryWatch = function(turnedOn) {
  const result = []

  // const groupHour = [1, 2, 4, 8].map(item => item << 6)
  // const groupMinute = [1, 2, 4, 8, 16, 32]
  // hour:   1111000000
  // minute: 0000111111
  const timeGroup = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512]
  const hourMask = 0b1111000000
  const minuteMask = 0b0000111111

  if (turnedOn === 0) {
    return ['0:00']
  }

  if (turnedOn > 8) {
    return result
  }

  const possibleTime = getCombination(timeGroup, turnedOn)

  for (let i = 0; i < possibleTime.length; i++) {
    const time = possibleTime[i]

    const hour = (time & hourMask) >> 6
    const minute = time & minuteMask

    if (hour < 12 && minute < 60) {
      result.push(`${hour}:${minute < 10 ? '0' : ''}${minute}`)
    }
  }

  return result
}
// @lc code=end

console.log(
  readBinaryWatch(2)
)

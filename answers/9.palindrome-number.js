/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) {
    return false
  }

  if (x < 10) {
    return true
  }

  x = x.toString()
  const len = x.length

  let start = -1
  let end = -1

  for (let i = 0; i <= parseInt((len - 1) / 2); i++) {
    start = i
    end = len - 1 - i


    if (x[start] === x[end]) {
      continue
    }

    return false
  }

  return true
}
// @lc code=end

/*
 * @lc app=leetcode id=125 lang=javascript
 *
 * [125] Valid Palindrome
 *
 * https://leetcode.com/problems/valid-palindrome/description/
 *
 * algorithms
 * Easy (45.73%)
 * Likes:    9553
 * Dislikes: 8418
 * Total Accepted:    3.4M
 * Total Submissions: 6.9M
 * Testcase Example:  '"A man, a plan, a canal: Panama"'
 *
 * A phrase is a palindrome if, after converting all uppercase letters into
 * lowercase letters and removing all non-alphanumeric characters, it reads the
 * same forward and backward. Alphanumeric characters include letters and
 * numbers.
 *
 * Given a string s, return true if it is a palindrome, or false otherwise.
 *
 *
 * Example 1:
 *
 *
 * Input: s = "A man, a plan, a canal: Panama"
 * Output: true
 * Explanation: "amanaplanacanalpanama" is a palindrome.
 *
 *
 * Example 2:
 *
 *
 * Input: s = "race a car"
 * Output: false
 * Explanation: "raceacar" is not a palindrome.
 *
 *
 * Example 3:
 *
 *
 * Input: s = " "
 * Output: true
 * Explanation: s is an empty string "" after removing non-alphanumeric
 * characters.
 * Since an empty string reads the same forward and backward, it is a
 * palindrome.
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= s.length <= 2 * 10^5
 * s consists only of printable ASCII characters.
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
function isAlphanumericOrEOF(char) {
  return char >= 'a' && char <= 'z' || char >= '0' && char <= '9' || char === undefined
}

var isPalindrome = function(s) {
  if (s.length < 2) {
    return true
  }

  s = s.toLowerCase()

  let leftPointer = 0
  let rightPointer = s.length - 1

  for (;leftPointer <= rightPointer; leftPointer++, rightPointer--) {
    while (isAlphanumericOrEOF(s[leftPointer]) === false) {
      leftPointer++
    }

    while(isAlphanumericOrEOF(s[rightPointer]) === false) {
      rightPointer--
    }

    let left = s[leftPointer]
    let right = s[rightPointer]

    if (left !== right) {
      return false
    }
  }

  return true
}
// @lc code=end

/*
 * @lc app=leetcode id=917 lang=javascript
 *
 * [917] Reverse Only Letters
 *
 * https://leetcode.com/problems/reverse-only-letters/description/
 *
 * algorithms
 * Easy (65.61%)
 * Likes:    2289
 * Dislikes: 78
 * Total Accepted:    243.3K
 * Total Submissions: 369.5K
 * Testcase Example:  '"ab-cd"'
 *
 * Given a string s, reverse the string according to the following rules:
 *
 *
 * All the characters that are not English letters remain in the same
 * position.
 * All the English letters (lowercase or uppercase) should be reversed.
 *
 *
 * Return s after reversing it.
 *
 *
 * Example 1:
 * Input: s = "ab-cd"
 * Output: "dc-ba"
 * Example 2:
 * Input: s = "a-bC-dEf-ghIj"
 * Output: "j-Ih-gfE-dCba"
 * Example 3:
 * Input: s = "Test1ng-Leet=code-Q!"
 * Output: "Qedo1ct-eeLg=ntse-T!"
 *
 *
 * Constraints:
 *
 *
 * 1 <= s.length <= 100
 * s consists of characters with ASCII values in the range [33, 122].
 * s does not contain '\"' or '\\'.
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
  let result = []

  let leftPointer = 0
  let rightPointer = s.length - 1

  let leftChar
  let rightChar
  for (;leftPointer <= rightPointer;) {
    for (;leftPointer <= rightPointer;) {
      leftChar = s[leftPointer]

      if (isValidChar(leftChar)) {
        break
      }

      result[leftPointer] = leftChar
      leftPointer += 1
    }

    for (;leftPointer <= rightPointer;) {
      rightChar = s[rightPointer]

      if (isValidChar(rightChar)) {
        break
      }

      result[rightPointer] = rightChar
      rightPointer -= 1
    }

    if (leftPointer > rightPointer) {
      break
    }

    result[leftPointer] = rightChar
    result[rightPointer] = leftChar

    leftPointer += 1
    rightPointer -= 1
  }

  return result.join('')

  function isValidChar(char) {
    return (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')
  }
};
// @lc code=end

console.log(
  // reverseOnlyLetters("ab-cd")
  // reverseOnlyLetters("a-bC-dEf-ghIj")
  reverseOnlyLetters("Test1ng-Leet=code-Q!")
)

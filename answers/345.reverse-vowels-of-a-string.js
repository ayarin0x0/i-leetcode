/*
 * @lc app=leetcode id=345 lang=javascript
 *
 * [345] Reverse Vowels of a String
 *
 * https://leetcode.com/problems/reverse-vowels-of-a-string/description/
 *
 * algorithms
 * Easy (51.33%)
 * Likes:    4655
 * Dislikes: 2804
 * Total Accepted:    999.9K
 * Total Submissions: 1.8M
 * Testcase Example:  '"IceCreAm"'
 *
 * Given a string s, reverse only all the vowels in the string and return it.
 *
 * The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both
 * lower and upper cases, more than once.
 *
 *
 * Example 1:
 *
 *
 * Input: s = "IceCreAm"
 *
 * Output: "AceCreIm"
 *
 * Explanation:
 *
 * The vowels in s are ['I', 'e', 'e', 'A']. On reversing the vowels, s becomes
 * "AceCreIm".
 *
 *
 * Example 2:
 *
 *
 * Input: s = "leetcode"
 *
 * Output: "leotcede"
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= s.length <= 3 * 10^5
 * s consist of printable ASCII characters.
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  s = s.split('')

  const vowels = {
    'a': true,
    'e': true,
    'i': true,
    'o': true,
    'u': true,
    'A': true,
    'E': true,
    'I': true,
    'O': true,
    'U': true,
  }

  const END = false

  const leftMove = (s, pointer, end, map) => {
    for (; pointer < end;) {
      const char = s[pointer]

      if (map[char] === true) {
        return [!END, pointer]
      }

      pointer += 1
    }

    return [END, pointer]
  }

  const rightMove = (s, pointer, end, map) => {
    for (; pointer > end;) {
      const char = s[pointer]

      if (map[char] === true) {
        return [!END, pointer]
      }

      pointer += -1
    }

    return [END, pointer]
  }

  let leftPointer = 0
  let rightPointer = s.length - 1

  for (;leftPointer < rightPointer;) {
    const [leftStatus, newLeftPointer] = leftMove(s, leftPointer, rightPointer, vowels)

    if (leftStatus === END) {
      break
    }

    const [rightStatus, newRightPointer] = rightMove(s, rightPointer, -leftPointer, vowels)

    if (rightStatus === END) {
      break
    }

    const temp = s[newLeftPointer]
    s[newLeftPointer] = s[newRightPointer]
    s[newRightPointer] = temp

    leftPointer = newLeftPointer + 1
    rightPointer = newRightPointer - 1
  }

  return s.join('')
}
// @lc code=end
console.log(
  reverseVowels('a2i3')
)

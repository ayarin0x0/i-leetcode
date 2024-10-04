/*
 * @lc app=leetcode id=344 lang=javascript
 *
 * [344] Reverse String
 *
 * https://leetcode.com/problems/reverse-string/description/
 *
 * algorithms
 * Easy (77.25%)
 * Likes:    8724
 * Dislikes: 1183
 * Total Accepted:    2.9M
 * Total Submissions: 3.6M
 * Testcase Example:  '["h","e","l","l","o"]'
 *
 * Write a function that reverses a string. The input string is given as an
 * array of characters s.
 *
 * You must do this by modifying the input array in-place with O(1) extra
 * memory.
 *
 *
 * Example 1:
 * Input: s = ["h","e","l","l","o"]
 * Output: ["o","l","l","e","h"]
 * Example 2:
 * Input: s = ["H","a","n","n","a","h"]
 * Output: ["h","a","n","n","a","H"]
 *
 *
 * Constraints:
 *
 *
 * 1 <= s.length <= 10^5
 * s[i] is a printable ascii character.
 *
 *
 */

// @lc code=start
function swap(nums, a, b) {
  const temp = nums[b]

  nums[b] = nums[a]
  nums[a] = temp
}

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  if (s.length === 1) {
    return s
  }

  let leftPointer = 0
  let rightPointer = s.length - 1

  for (; leftPointer < rightPointer; leftPointer++, rightPointer--) {
    swap(s, leftPointer, rightPointer)
  }

  return s
}
// @lc code=end

console.log(
  reverseString(['h', 'e', 'l', 'b', 'l', 'o'])
)

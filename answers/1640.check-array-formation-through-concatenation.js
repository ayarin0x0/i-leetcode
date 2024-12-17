/*
 * @lc app=leetcode id=1640 lang=javascript
 *
 * [1640] Check Array Formation Through Concatenation
 *
 * https://leetcode.com/problems/check-array-formation-through-concatenation/description/
 *
 * algorithms
 * Easy (56.71%)
 * Likes:    912
 * Dislikes: 141
 * Total Accepted:    85.1K
 * Total Submissions: 150.1K
 * Testcase Example:  '[15,88]\n[[88],[15]]'
 *
 * You are given an array of distinct integers arr and an array of integer
 * arrays pieces, where the integers in pieces are distinct. Your goal is to
 * form arr by concatenating the arrays in pieces in any order. However, you
 * are not allowed to reorder the integers in each array pieces[i].
 *
 * Return true if it is possible to form the array arr from pieces. Otherwise,
 * return false.
 *
 *
 * Example 1:
 *
 *
 * Input: arr = [15,88], pieces = [[88],[15]]
 * Output: true
 * Explanation: Concatenate [15] then [88]
 *
 *
 * Example 2:
 *
 *
 * Input: arr = [49,18,16], pieces = [[16,18,49]]
 * Output: false
 * Explanation: Even though the numbers match, we cannot reorder pieces[0].
 *
 *
 * Example 3:
 *
 *
 * Input: arr = [91,4,64,78], pieces = [[78],[4,64],[91]]
 * Output: true
 * Explanation: Concatenate [91] then [4,64] then [78]
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= pieces.length <= arr.length <= 100
 * sum(pieces[i].length) == arr.length
 * 1 <= pieces[i].length <= arr.length
 * 1 <= arr[i], pieces[i][j] <= 100
 * The integers in arr are distinct.
 * The integers in pieces are distinct (i.e., If we flatten pieces in a 1D
 * array, all the integers in this array are distinct).
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
var canFormArray = function(arr, pieces) {
  const map = Object.create(null)

  for (let i = 0; i < pieces.length; i++) {
    const piece = pieces[i]

    const key = piece[0]
    map[key] = piece
  }

  for (let i = 0; i < arr.length;) {
    const num = arr[i]
    const piece = map[num]

    if (piece === undefined) {
      return false
    }

    for (let j = 0; j < piece.length; j++) {
      if (piece[j] !== arr[i + j]) {
        return false
      }
    }

    i += piece.length
  }

  return true
};
// @lc code=end

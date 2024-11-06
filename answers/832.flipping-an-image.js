/*
 * @lc app=leetcode id=832 lang=javascript
 *
 * [832] Flipping an Image
 *
 * https://leetcode.com/problems/flipping-an-image/description/
 *
 * algorithms
 * Easy (82.44%)
 * Likes:    3486
 * Dislikes: 245
 * Total Accepted:    461.8K
 * Total Submissions: 559.8K
 * Testcase Example:  '[[1,1,0],[1,0,1],[0,0,0]]'
 *
 * Given an n x n binary matrix image, flip the image horizontally, then invert
 * it, and return the resulting image.
 *
 * To flip an image horizontally means that each row of the image is
 * reversed.
 *
 *
 * For example, flipping [1,1,0] horizontally results in [0,1,1].
 *
 *
 * To invert an image means that each 0 is replaced by 1, and each 1 is
 * replaced by 0.
 *
 *
 * For example, inverting [0,1,1] results in [1,0,0].
 *
 *
 *
 * Example 1:
 *
 *
 * Input: image = [[1,1,0],[1,0,1],[0,0,0]]
 * Output: [[1,0,0],[0,1,0],[1,1,1]]
 * Explanation: First reverse each row: [[0,1,1],[1,0,1],[0,0,0]].
 * Then, invert the image: [[1,0,0],[0,1,0],[1,1,1]]
 *
 *
 * Example 2:
 *
 *
 * Input: image = [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]
 * Output: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]
 * Explanation: First reverse each row:
 * [[0,0,1,1],[1,0,0,1],[1,1,1,0],[0,1,0,1]].
 * Then invert the image: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]
 *
 *
 *
 * Constraints:
 *
 *
 * n == image.length
 * n == image[i].length
 * 1 <= n <= 20
 * images[i][j] is either 0 or 1.
 *
 *
 */

// @lc code=start
/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
  const len = image[0].length
  const width = len - 1

  for (let y = 0; y < image.length; y++) {
    const half = Math.floor(len / 2) - 1
    const row = image[y]

    for (let x = 0; x <= half; x++) {
      const anotherX = width - x

      if (row[x] === row[anotherX]) {
        row[x] = row[x] ^ 1
        row[anotherX] = row[anotherX] ^ 1
      }
    }

    if (len % 2 === 1) {
      row[half + 1] = row[half + 1] ^ 1
    }
  }

  return image
};
// @lc code=end

console.log(
  flipAndInvertImage([[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]])
)

/*
 * @lc app=leetcode id=530 lang=javascript
 *
 * [530] Minimum Absolute Difference in BST
 *
 * https://leetcode.com/problems/minimum-absolute-difference-in-bst/description/
 *
 * algorithms
 * Easy (58.55%)
 * Likes:    4444
 * Dislikes: 231
 * Total Accepted:    434.7K
 * Total Submissions: 742.4K
 * Testcase Example:  '[4,2,6,1,3]'
 *
 * Given the root of a Binary Search Tree (BST), return the minimum absolute
 * difference between the values of any two different nodes in the tree.
 *
 *
 * Example 1:
 *
 *
 * Input: root = [4,2,6,1,3]
 * Output: 1
 *
 *
 * Example 2:
 *
 *
 * Input: root = [1,0,48,null,null,12,49]
 * Output: 1
 *
 *
 *
 * Constraints:
 *
 *
 * The number of nodes in the tree is in the range [2, 10^4].
 * 0 <= Node.val <= 10^5
 *
 *
 *
 * Note: This question is the same as 783:
 * https://leetcode.com/problems/minimum-distance-between-bst-nodes/
 *
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function(root) {
  const arr = buildSortedArr(root, [])

  let min = Infinity
  for (let i = 1; i < arr.length; i++) {
    const prev = arr[i - 1]
    const cur = arr[i]

    min = Math.min(min, cur - prev)
  }

  return min

  function buildSortedArr(node, arr) {
    if (node.left) {
      buildSortedArr(node.left, arr)
    }

    arr.push(node.val)

    if (node.right) {
      buildSortedArr(node.right, arr)
    }

    return arr
  }
};
// @lc code=end

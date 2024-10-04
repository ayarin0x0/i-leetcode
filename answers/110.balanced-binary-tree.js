/*
 * @lc app=leetcode id=110 lang=javascript
 *
 * [110] Balanced Binary Tree
 *
 * https://leetcode.com/problems/balanced-binary-tree/description/
 *
 * algorithms
 * Easy (50.47%)
 * Likes:    9934
 * Dislikes: 574
 * Total Accepted:    1.3M
 * Total Submissions: 2.5M
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * Given a binary tree, determine if it is height-balanced.
 *
 *
 * Example 1:
 *
 *
 * Input: root = [3,9,20,null,null,15,7]
 * Output: true
 *
 *
 * Example 2:
 *
 *
 * Input: root = [1,2,2,3,3,null,null,4,4]
 * Output: false
 *
 *
 * Example 3:
 *
 *
 * Input: root = []
 * Output: true
 *
 *
 *
 * Constraints:
 *
 *
 * The number of nodes in the tree is in the range [0, 5000].
 * -10^4 <= Node.val <= 10^4
 *
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
 * @return {boolean}
 */
var isBalanced = function(root) {
  if (!root) {
    return true
  }

  const rope = {
    isBalanced: true,
  }

  const checkInvalidDepth = (node, rope) => {
    if (!rope.isBalanced) {
      return
    }

    const leftDepth = node.left ? checkInvalidDepth(node.left, rope) : 0
    const rightDepth = node.right ? checkInvalidDepth(node.right, rope) : 0

    const diff = leftDepth - rightDepth
    if (diff < -1 || diff > 1) {
      rope.isBalanced = false
    }

    return Math.max(leftDepth, rightDepth) + 1
  }

  checkInvalidDepth(root, rope)

  return rope.isBalanced
}
// @lc code=end

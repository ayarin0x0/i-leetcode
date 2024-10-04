/*
 * @lc app=leetcode id=226 lang=javascript
 *
 * [226] Invert Binary Tree
 *
 * https://leetcode.com/problems/invert-binary-tree/description/
 *
 * algorithms
 * Easy (75.79%)
 * Likes:    14086
 * Dislikes: 229
 * Total Accepted:    2.3M
 * Total Submissions: 2.9M
 * Testcase Example:  '[4,2,7,1,3,6,9]'
 *
 * Given the root of a binary tree, invert the tree, and return its root.
 *
 *
 * Example 1:
 *
 *
 * Input: root = [4,2,7,1,3,6,9]
 * Output: [4,7,2,9,6,3,1]
 *
 *
 * Example 2:
 *
 *
 * Input: root = [2,1,3]
 * Output: [2,3,1]
 *
 *
 * Example 3:
 *
 *
 * Input: root = []
 * Output: []
 *
 *
 *
 * Constraints:
 *
 *
 * The number of nodes in the tree is in the range [0, 100].
 * -100 <= Node.val <= 100
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
function swap(node, left, right) {
  node.left = right || null
  node.right = left || null

  return node
}

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
  if (!root) {
    return root
  }

  let nodes = [root]
  let nodesForward = []

  for (;nodes.length > 0;) {
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i]

      node.left && nodesForward.push(node.left)
      node.right && nodesForward.push(node.right)

      swap(node, node.left, node.right)
    }

    nodes = nodesForward
    nodesForward = []
  }

  return root
}
// @lc code=end

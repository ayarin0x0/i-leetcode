/*
 * @lc app=leetcode id=111 lang=javascript
 *
 * [111] Minimum Depth of Binary Tree
 *
 * https://leetcode.com/problems/minimum-depth-of-binary-tree/description/
 *
 * algorithms
 * Easy (46.59%)
 * Likes:    6932
 * Dislikes: 1245
 * Total Accepted:    1.1M
 * Total Submissions: 2.3M
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * Given a binary tree, find its minimum depth.
 *
 * The minimum depth is the number of nodes along the shortest path from the
 * root node down to the nearest leaf node.
 *
 * Note: A leaf is a node with no children.
 *
 *
 * Example 1:
 *
 *
 * Input: root = [3,9,20,null,null,15,7]
 * Output: 2
 *
 *
 * Example 2:
 *
 *
 * Input: root = [2,null,3,null,4,null,5,null,6]
 * Output: 5
 *
 *
 *
 * Constraints:
 *
 *
 * The number of nodes in the tree is in the range [0, 10^5].
 * -1000 <= Node.val <= 1000
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
 * @return {number}
 */
var minDepth = function(root) {
  if (!root) {
    return 0
  }

  let depth = 0
  let floor = []
  let nextFloor = [root]

  for (;;) {
    depth += 1
    floor = nextFloor
    nextFloor = []

    for (let i = 0; i < floor.length; i++) {
      const node = floor[i]

      const leftNode = node.left
      const rightNode = node.right

      if (!leftNode && !rightNode) {
        return depth
      }

      leftNode && nextFloor.push(leftNode)
      rightNode && nextFloor.push(rightNode)
    }
  }
}
// @lc code=end

/*
 * @lc app=leetcode id=404 lang=javascript
 *
 * [404] Sum of Left Leaves
 *
 * https://leetcode.com/problems/sum-of-left-leaves/description/
 *
 * algorithms
 * Easy (57.23%)
 * Likes:    5511
 * Dislikes: 311
 * Total Accepted:    652.5K
 * Total Submissions: 1.1M
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * Given the root of a binary tree, return the sum of all left leaves.
 *
 * A leaf is a node with no children. A left leaf is a leaf that is the left
 * child of another node.
 *
 *
 * Example 1:
 *
 *
 * Input: root = [3,9,20,null,null,15,7]
 * Output: 24
 * Explanation: There are two left leaves in the binary tree, with values 9 and
 * 15 respectively.
 *
 *
 * Example 2:
 *
 *
 * Input: root = [1]
 * Output: 0
 *
 *
 *
 * Constraints:
 *
 *
 * The number of nodes in the tree is in the range [1, 1000].
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
var sumOfLeftLeaves = function(root) {
  let result = 0
  let nodes = [root.left, root.right]

  for (;nodes.length > 0;) {
    for (let i = 0; i < nodes.length; i += 2) {
      const leftNode = nodes[i]

      if (leftNode && leftNode.left === null && leftNode.right === null) {
        result += leftNode.val
      }
    }

    const nodesForward = []

    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i]

      if (!node) {
        continue
      }

      nodesForward.push(node.left)
      nodesForward.push(node.right)
    }

    nodes = nodesForward
  }

  return result
}
// @lc code=end

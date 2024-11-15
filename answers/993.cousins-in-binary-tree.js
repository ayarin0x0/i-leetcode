/*
 * @lc app=leetcode id=993 lang=javascript
 *
 * [993] Cousins in Binary Tree
 *
 * https://leetcode.com/problems/cousins-in-binary-tree/description/
 *
 * algorithms
 * Easy (56.77%)
 * Likes:    4126
 * Dislikes: 212
 * Total Accepted:    297.4K
 * Total Submissions: 520.4K
 * Testcase Example:  '[1,2,3,4]\n4\n3'
 *
 * Given the root of a binary tree with unique values and the values of two
 * different nodes of the tree x and y, return true if the nodes corresponding
 * to the values x and y in the tree are cousins, or false otherwise.
 *
 * Two nodes of a binary tree are cousins if they have the same depth with
 * different parents.
 *
 * Note that in a binary tree, the root node is at the depth 0, and children of
 * each depth k node are at the depth k + 1.
 *
 *
 * Example 1:
 *
 *
 * Input: root = [1,2,3,4], x = 4, y = 3
 * Output: false
 *
 *
 * Example 2:
 *
 *
 * Input: root = [1,2,3,null,4,null,5], x = 5, y = 4
 * Output: true
 *
 *
 * Example 3:
 *
 *
 * Input: root = [1,2,3,null,4], x = 2, y = 3
 * Output: false
 *
 *
 *
 * Constraints:
 *
 *
 * The number of nodes in the tree is in the range [2, 100].
 * 1 <= Node.val <= 100
 * Each node has a unique value.
 * x != y
 * x and y are exist in the tree.
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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
  if (root.val === x || root.val === y) {
    return false
  }

  let nodes = [root]
  let nodesForward = []

  let goal = 2
  let goalParent = null

  outer: for (; nodes.length > 0;) {
    for (let i = 0; i < nodes.length; i += 2) {
      const node = nodes[i]
      const parent = nodes[i + 1]

      if (node.val === x || node.val === y) {
        goal -= 1

        if (goal === 0) {
          return parent === goalParent ? false : true
        }

        goalParent = parent
      }

      if (node.left) {
        nodesForward.push(node.left, node)
      }

      if (node.right) {
        nodesForward.push(node.right, node)
      }
    }

    if (goal === 1) {
      return false
    }

    nodes = nodesForward
    nodesForward = []
  }
};
// @lc code=end

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

console.log(
  isCousins(new TreeNode(1,
    new TreeNode(2,
      new TreeNode(4),
    ),
    new TreeNode(3),
  ), 2, 3)
)

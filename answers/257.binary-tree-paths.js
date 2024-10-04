/*
 * @lc app=leetcode id=257 lang=javascript
 *
 * [257] Binary Tree Paths
 *
 * https://leetcode.com/problems/binary-tree-paths/description/
 *
 * algorithms
 * Easy (62.49%)
 * Likes:    6649
 * Dislikes: 302
 * Total Accepted:    775K
 * Total Submissions: 1.2M
 * Testcase Example:  '[1,2,3,null,5]'
 *
 * Given the root of a binary tree, return all root-to-leaf paths in any
 * order.
 *
 * A leaf is a node with no children.
 *
 *
 * Example 1:
 *
 *
 * Input: root = [1,2,3,null,5]
 * Output: ["1->2->5","1->3"]
 *
 *
 * Example 2:
 *
 *
 * Input: root = [1]
 * Output: ["1"]
 *
 *
 *
 * Constraints:
 *
 *
 * The number of nodes in the tree is in the range [1, 100].
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
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  const result = []

  if (root.left) {
    walk(root.left, root.val, result)
  }

  if (root.right) {
    walk(root.right, root.val, result)
  }

  if (result.length === 0) {
    result.push(`${root.val}`)
  }

  return result

  function walk(node, path, paths) {
    const pathStr = `${path}->${node.val}`

    if (!node.left && !node.right) {
      paths.push(pathStr)

      return
    }

    if (node.left) {
      walk(node.left, pathStr, paths)
    }

    if (node.right) {
      walk(node.right, pathStr, paths)
    }
  }
}
// @lc code=end

/*
 * @lc app=leetcode id=222 lang=javascript
 *
 * [222] Count Complete Tree Nodes
 *
 * https://leetcode.com/problems/count-complete-tree-nodes/description/
 *
 * algorithms
 * Easy (62.62%)
 * Likes:    8749
 * Dislikes: 526
 * Total Accepted:    809.1K
 * Total Submissions: 1.2M
 * Testcase Example:  '[1,2,3,4,5,6]'
 *
 * Given the root of a complete binary tree, return the number of the nodes in
 * the tree.
 *
 * According to Wikipedia, every level, except possibly the last, is completely
 * filled in a complete binary tree, and all nodes in the last level are as far
 * left as possible. It can have between 1 and 2^h nodes inclusive at the last
 * level h.
 *
 * Design an algorithm that runs in less than O(n) time complexity.
 *
 *
 * Example 1:
 *
 *
 * Input: root = [1,2,3,4,5,6]
 * Output: 6
 *
 *
 * Example 2:
 *
 *
 * Input: root = []
 * Output: 0
 *
 *
 * Example 3:
 *
 *
 * Input: root = [1]
 * Output: 1
 *
 *
 *
 * Constraints:
 *
 *
 * The number of nodes in the tree is in the range [0, 5 * 10^4].
 * 0 <= Node.val <= 5 * 10^4
 * The tree is guaranteed to be complete.
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
var countNodes = function(root) {
  let result = 0

  if (!root) {
    return result
  }

  let floor = 0

  let nodes = [root]
  let nodesForward = []

  for (;;) {
    result += Math.pow(2, floor)

    if (!nodes[0].right) {
      break
    }

    floor += 1

    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i]

      nodesForward.push(node.right)
      nodesForward.push(node.left)
    }

    nodes = nodesForward
    nodesForward = []
  }

  for (let i = nodes.length - 1; i >= 0; i--) {
    const node = nodes[i]

    if (node.left) {
      result += 1
    } else {
      break
    }

    if (node.right) {
      result += 1
    } else {
      break
    }
  }

  return result
}
// @lc code=end


function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

const root = new TreeNode(1,
  new TreeNode(2,
    new TreeNode(4,
      new TreeNode(8),
    ),
    new TreeNode(5),
  ),
  new TreeNode(3,
    new TreeNode(6),
    new TreeNode(7),
  )
)

console.log(
  countNodes(root)
)
//       1
//     2   3
//   4  5  6  7
// 8

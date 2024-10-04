/*
 * @lc app=leetcode id=101 lang=javascript
 *
 * [101] Symmetric Tree
 *
 * https://leetcode.com/problems/symmetric-tree/description/
 *
 * algorithms
 * Easy (55.30%)
 * Likes:    14427
 * Dislikes: 339
 * Total Accepted:    1.8M
 * Total Submissions: 3.2M
 * Testcase Example:  '[1,2,2,3,4,4,3]'
 *
 * Given the root of a binary tree, check whether it is a mirror of itself
 * (i.e., symmetric around its center).
 *
 *
 * Example 1:
 *
 *
 * Input: root = [1,2,2,3,4,4,3]
 * Output: true
 *
 *
 * Example 2:
 *
 *
 * Input: root = [1,2,2,null,3,null,3]
 * Output: false
 *
 *
 *
 * Constraints:
 *
 *
 * The number of nodes in the tree is in the range [1, 1000].
 * -100 <= Node.val <= 100
 *
 *
 *
 * Follow up: Could you solve it both recursively and iteratively?
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
var isSymmetric = function(root) {
  if (!root) {
    return false
  }

  let stack = [root.left, root.right]
  let nextStack = []

  for (;;) {
    if (stack.length === 0) {
      return true
    }

    let leftPointer = 0
    let rightPointer = stack.length - 1

    for (; leftPointer < rightPointer;) {
      const leftNode = stack[leftPointer]
      const rightNode = stack[rightPointer]

      if (leftNode && rightNode) {
        if (leftNode.val !== rightNode.val) {
          return false
        }
      }

      if (leftNode && !rightNode) {
        return false
      }

      if (!leftNode && rightNode) {
        return false
      }

      leftPointer += 1
      rightPointer -= 1
    }

    for (let i = 0; i < stack.length; i++) {
      const node = stack[i]

      if (node) {
        nextStack.push(node.left)
        nextStack.push(node.right)
      }
    }

    stack = nextStack
    nextStack = []
  }
}
// @lc code=end

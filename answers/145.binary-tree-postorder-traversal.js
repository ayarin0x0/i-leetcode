/*
 * @lc app=leetcode id=145 lang=javascript
 *
 * [145] Binary Tree Postorder Traversal
 *
 * https://leetcode.com/problems/binary-tree-postorder-traversal/description/
 *
 * algorithms
 * Easy (69.48%)
 * Likes:    7173
 * Dislikes: 205
 * Total Accepted:    1.4M
 * Total Submissions: 1.9M
 * Testcase Example:  '[1,null,2,3]'
 *
 * Given the root of a binary tree, return the postorder traversal of its
 * nodes' values.
 *
 *
 * Example 1:
 *
 *
 * Input: root = [1,null,2,3]
 *
 * Output: [3,2,1]
 *
 * Explanation:
 *
 *
 *
 *
 * Example 2:
 *
 *
 * Input: root = [1,2,3,4,5,null,8,null,null,6,7,9]
 *
 * Output: [4,6,7,5,2,9,8,3,1]
 *
 * Explanation:
 *
 *
 *
 *
 * Example 3:
 *
 *
 * Input: root = []
 *
 * Output: []
 *
 *
 * Example 4:
 *
 *
 * Input: root = [1]
 *
 * Output: [1]
 *
 *
 *
 * Constraints:
 *
 *
 * The number of the nodes in the tree is in the range [0, 100].
 * -100 <= Node.val <= 100
 *
 *
 *
 * Follow up: Recursive solution is trivial, could you do it iteratively?
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
 * @return {number[]}
 */
var postorderTraversal = function(root) {
  const result = []

  if (!root) {
    return result
  }

  const tracked = []
  const waitlist = [root]

  for (;waitlist.length > 0;) {
    const node = waitlist.pop()
    tracked.push(node)

    node.left && waitlist.push(node.left)
    node.right && waitlist.push(node.right)
  }

  for (;tracked.length > 0;) {
    const node = tracked.pop()
    result.push(node.val)
  }

  return result
}
// @lc code=end

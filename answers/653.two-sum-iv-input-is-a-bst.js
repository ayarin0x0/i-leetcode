/*
 * @lc app=leetcode id=653 lang=javascript
 *
 * [653] Two Sum IV - Input is a BST
 *
 * https://leetcode.com/problems/two-sum-iv-input-is-a-bst/description/
 *
 * algorithms
 * Easy (61.60%)
 * Likes:    6831
 * Dislikes: 274
 * Total Accepted:    588K
 * Total Submissions: 953.9K
 * Testcase Example:  '[5,3,6,2,4,null,7]\n9'
 *
 * Given the root of a binary search tree and an integer k, return true if
 * there exist two elements in the BST such that their sum is equal to k, or
 * false otherwise.
 *
 *
 * Example 1:
 *
 *
 * Input: root = [5,3,6,2,4,null,7], k = 9
 * Output: true
 *
 *
 * Example 2:
 *
 *
 * Input: root = [5,3,6,2,4,null,7], k = 28
 * Output: false
 *
 *
 *
 * Constraints:
 *
 *
 * The number of nodes in the tree is in the range [1, 10^4].
 * -10^4 <= Node.val <= 10^4
 * root is guaranteed to be a valid binary search tree.
 * -10^5 <= k <= 10^5
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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
  const calcMap = Object.create(null)

  let nodes = [root]
  let nodesForward = []

  for (;nodes.length > 0;) {
    for (let i = 0;i < nodes.length; i++) {
      const node = nodes[i]

      node.left && nodesForward.push(node.left)
      node.right && nodesForward.push(node.right)

      const value = node.val

      if (calcMap[value] === true) {
        return true
      }

      calcMap[k - value] = true
    }

    nodes = nodesForward
    nodesForward = []
  }

  return false
};
// @lc code=end

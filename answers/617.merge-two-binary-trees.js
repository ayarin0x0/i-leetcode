/*
 * @lc app=leetcode id=617 lang=javascript
 *
 * [617] Merge Two Binary Trees
 *
 * https://leetcode.com/problems/merge-two-binary-trees/description/
 *
 * algorithms
 * Easy (79.13%)
 * Likes:    8823
 * Dislikes: 303
 * Total Accepted:    802.2K
 * Total Submissions: 1M
 * Testcase Example:  '[1,3,2,5]\n[2,1,3,null,4,null,7]'
 *
 * You are given two binary trees root1 and root2.
 *
 * Imagine that when you put one of them to cover the other, some nodes of the
 * two trees are overlapped while the others are not. You need to merge the two
 * trees into a new binary tree. The merge rule is that if two nodes overlap,
 * then sum node values up as the new value of the merged node. Otherwise, the
 * NOT null node will be used as the node of the new tree.
 *
 * Return the merged tree.
 *
 * Note: The merging process must start from the root nodes of both trees.
 *
 *
 * Example 1:
 *
 *
 * Input: root1 = [1,3,2,5], root2 = [2,1,3,null,4,null,7]
 * Output: [3,4,5,5,4,null,7]
 *
 *
 * Example 2:
 *
 *
 * Input: root1 = [1], root2 = [1,2]
 * Output: [2,2]
 *
 *
 *
 * Constraints:
 *
 *
 * The number of nodes in both trees is in the range [0, 2000].
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function(root1, root2) {
  return merge(root1, root2)

  function merge(node1, node2) {
    if (!node1 && !node2) {
      return null
    }

    if (node1 && !node2) {
      return node1
    }

    if (!node1 && node2) {
      return node2
    }

    node1.val += node2.val
    node1.left = merge(node1.left, node2.left)
    node1.right = merge(node1.right, node2.right)

    return node1
  }
};
// @lc code=end

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

const root1 = new TreeNode(
  1,
  new TreeNode(
    3,
    new TreeNode(5),
    null,
  ),
  new TreeNode(
    2,
    null,
    null,
  )
)

const root2 = new TreeNode(
  2,
  new TreeNode(
    1,
    null,
    new TreeNode(4),
  ),
  new TreeNode(
    3,
    null,
    new TreeNode(7),
  )
)

console.log(
  mergeTrees(root1, root2)
)

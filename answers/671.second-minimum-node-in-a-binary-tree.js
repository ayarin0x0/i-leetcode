/*
 * @lc app=leetcode id=671 lang=javascript
 *
 * [671] Second Minimum Node In a Binary Tree
 *
 * https://leetcode.com/problems/second-minimum-node-in-a-binary-tree/description/
 *
 * algorithms
 * Easy (44.80%)
 * Likes:    1870
 * Dislikes: 1882
 * Total Accepted:    203.5K
 * Total Submissions: 453.7K
 * Testcase Example:  '[2,2,5,null,null,5,7]'
 *
 * Given a non-empty special binary tree consisting of nodes with the
 * non-negative value, where each node in this tree has exactly two or zero
 * sub-node. If the node has two sub-nodes, then this node's value is the
 * smaller value among its two sub-nodes. More formally, the property root.val
 * = min(root.left.val, root.right.val) always holds.
 *
 * Given such a binary tree, you need to output the second minimum value in the
 * set made of all the nodes' value in the whole tree.
 *
 * If no such second minimum value exists, output -1 instead.
 *
 *
 *
 *
 * Example 1:
 *
 *
 * Input: root = [2,2,5,null,null,5,7]
 * Output: 5
 * Explanation: The smallest value is 2, the second smallest value is 5.
 *
 *
 * Example 2:
 *
 *
 * Input: root = [2,2,2]
 * Output: -1
 * Explanation: The smallest value is 2, but there isn't any second smallest
 * value.
 *
 *
 *
 * Constraints:
 *
 *
 * The number of nodes in the tree is in the range [1, 25].
 * 1 <= Node.val <= 2^31 - 1
 * root.val == min(root.left.val, root.right.val) for each internal node of the
 * tree.
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
var findSecondMinimumValue = function(root) {
  const rope = {
    min: Infinity
  }

  step(root, root.val, rope)

  return rope.min === Infinity ? -1 : rope.min

  function step(node, base, rope) {
    if (!node) {
      return
    }

    if (node.val > base) {
      rope.min = Math.min(node.val, rope.min)

      return
    }

    if (node.val === base) {
      step(node.left, base, rope)
      step(node.right, base, rope)
    }
  }
};
// @lc code=end

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

// const root = new TreeNode(
//   2,
//   new TreeNode(2),
//   new TreeNode(
//     2,
//     new TreeNode(5),
//     new TreeNode(5),
//   ),
// )

const root = new TreeNode(
  2,
  new TreeNode(2),
  new TreeNode(
    2,
    new TreeNode(5),
    new TreeNode(5),
  ),
)

console.log(
  findSecondMinimumValue(root)
)

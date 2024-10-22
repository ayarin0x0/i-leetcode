/*
 * @lc app=leetcode id=501 lang=javascript
 *
 * [501] Find Mode in Binary Search Tree
 *
 * https://leetcode.com/problems/find-mode-in-binary-search-tree/description/
 *
 * algorithms
 * Easy (56.67%)
 * Likes:    3922
 * Dislikes: 788
 * Total Accepted:    323.5K
 * Total Submissions: 570.6K
 * Testcase Example:  '[1,null,2,2]'
 *
 * Given the root of a binary search tree (BST) with duplicates, return all the
 * mode(s) (i.e., the most frequently occurred element) in it.
 *
 * If the tree has more than one mode, return them in any order.
 *
 * Assume a BST is defined as follows:
 *
 *
 * The left subtree of a node contains only nodes with keys less than or equal
 * to the node's key.
 * The right subtree of a node contains only nodes with keys greater than or
 * equal to the node's key.
 * Both the left and right subtrees must also be binary search trees.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: root = [1,null,2,2]
 * Output: [2]
 *
 *
 * Example 2:
 *
 *
 * Input: root = [0]
 * Output: [0]
 *
 *
 *
 * Constraints:
 *
 *
 * The number of nodes in the tree is in the range [1, 10^4].
 * -10^5 <= Node.val <= 10^5
 *
 *
 *
 * Follow up: Could you do that without using any extra space? (Assume that the
 * implicit stack space incurred due to recursion does not count).
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
var findMode = function(root) {
  const counter = Object.create(null)
  let nodes = [root]
  let nodesForward = []

  for (;nodes.length > 0;) {
    let lastVal = null

    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i]

      if (node.val !== lastVal) {
        lastVal = node.val
      }

      counter[node.val] = (counter[node.val] || 0) + 1

      node.left && nodesForward.push(node.left)
      node.right && nodesForward.push(node.right)
    }

    nodes = nodesForward
    nodesForward = []
  }

  let candidates = []
  let currentMax = 0

  Object.keys(counter).forEach(val => {
    const count = counter[val]
    if (count > currentMax) {
      candidates = [val]
      currentMax = count
    } else if (count === currentMax) {
      candidates.push(val)
    }
  })

  return candidates.map(val => parseInt(val))
};
// @lc code=end

// function TreeNode(val, left, right) {
//   this.val = (val===undefined ? 0 : val)
//   this.left = (left===undefined ? null : left)
//   this.right = (right===undefined ? null : right)
// }

// const root = new TreeNode(
//   1,
//   null,
//   new TreeNode(
//     2,
//     new TreeNode(2),
//   )
// )

// console.log(
//   findMode(root)
// )

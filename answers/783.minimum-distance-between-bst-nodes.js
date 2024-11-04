/*
 * @lc app=leetcode id=783 lang=javascript
 *
 * [783] Minimum Distance Between BST Nodes
 *
 * https://leetcode.com/problems/minimum-distance-between-bst-nodes/description/
 *
 * algorithms
 * Easy (59.84%)
 * Likes:    3513
 * Dislikes: 421
 * Total Accepted:    267.5K
 * Total Submissions: 446.7K
 * Testcase Example:  '[4,2,6,1,3]'
 *
 * Given the root of a Binary Search Tree (BST), return the minimum difference
 * between the values of any two different nodes in the tree.
 *
 *
 * Example 1:
 *
 *
 * Input: root = [4,2,6,1,3]
 * Output: 1
 *
 *
 * Example 2:
 *
 *
 * Input: root = [1,0,48,null,null,12,49]
 * Output: 1
 *
 *
 *
 * Constraints:
 *
 *
 * The number of nodes in the tree is in the range [2, 100].
 * 0 <= Node.val <= 10^5
 *
 *
 *
 * Note: This question is the same as 530:
 * https://leetcode.com/problems/minimum-absolute-difference-in-bst/
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
var minDiffInBST = function(root) {
  const arr = buildSortedArr(root, [])

  let min = Infinity

  for (let i = 1; i < arr.length; i++) {
    const prev = arr[i - 1]
    const cur = arr[i]

    min = Math.min(cur - prev, min)
  }

  return min

  function buildSortedArr(node, arr) {
    if (node.left) {
      buildSortedArr(node.left, arr)
    }

    arr.push(node.val)

    if (node.right) {
      buildSortedArr(node.right, arr)
    }

    return arr
  }
};
// @lc code=end

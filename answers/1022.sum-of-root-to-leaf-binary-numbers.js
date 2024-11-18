/*
 * @lc app=leetcode id=1022 lang=javascript
 *
 * [1022] Sum of Root To Leaf Binary Numbers
 *
 * https://leetcode.com/problems/sum-of-root-to-leaf-binary-numbers/description/
 *
 * algorithms
 * Easy (73.19%)
 * Likes:    3366
 * Dislikes: 189
 * Total Accepted:    221.9K
 * Total Submissions: 303K
 * Testcase Example:  '[1,0,1,0,1,0,1]'
 *
 * You are given the root of a binary tree where each node has a value 0 or 1.
 * Each root-to-leaf path represents a binary number starting with the most
 * significant bit.
 *
 *
 * For example, if the path is 0 -> 1 -> 1 -> 0 -> 1, then this could represent
 * 01101 in binary, which is 13.
 *
 *
 * For all leaves in the tree, consider the numbers represented by the path
 * from the root to that leaf. Return the sum of these numbers.
 *
 * The test cases are generated so that the answer fits in a 32-bits
 * integer.
 *
 *
 * Example 1:
 *
 *
 * Input: root = [1,0,1,0,1,0,1]
 * Output: 22
 * Explanation: (100) + (101) + (110) + (111) = 4 + 5 + 6 + 7 = 22
 *
 *
 * Example 2:
 *
 *
 * Input: root = [0]
 * Output: 0
 *
 *
 *
 * Constraints:
 *
 *
 * The number of nodes in the tree is in the range [1, 1000].
 * Node.val is 0 or 1.
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
var sumRootToLeaf = function(root) {
  return step(root, [])

  function step(node, arr) {
    arr.push(node.val)

    if (!node.left && !node.right) {
      const sum = getSum(arr)
      arr.pop()

      return sum
    }

    let leftSum = 0
    if (node.left) {
      leftSum = step(node.left, arr)
    }

    let rightSum = 0
    if (node.right) {
      rightSum = step(node.right, arr)
    }

    arr.pop()

    return leftSum + rightSum
  }
};
function getSum(arr) {
  let sum = 0

  for (let i = 0; i < arr.length; i++) {
    sum = sum * 2 + arr[i]
  }

  return sum
}
// @lc code=end

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

const root = new TreeNode(
  1,
  new TreeNode(0,
    new TreeNode(0),
    new TreeNode(1),
  ),
  new TreeNode(1,
    new TreeNode(0),
    new TreeNode(1),
  ),
)

console.log(
  sumRootToLeaf(root)
)

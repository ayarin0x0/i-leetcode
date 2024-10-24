/*
 * @lc app=leetcode id=572 lang=javascript
 *
 * [572] Subtree of Another Tree
 *
 * https://leetcode.com/problems/subtree-of-another-tree/description/
 *
 * algorithms
 * Easy (48.75%)
 * Likes:    8318
 * Dislikes: 536
 * Total Accepted:    943.3K
 * Total Submissions: 1.9M
 * Testcase Example:  '[3,4,5,1,2]\n[4,1,2]'
 *
 * Given the roots of two binary trees root and subRoot, return true if there
 * is a subtree of root with the same structure and node values of subRoot and
 * false otherwise.
 *
 * A subtree of a binary tree tree is a tree that consists of a node in tree
 * and all of this node's descendants. The tree tree could also be considered
 * as a subtree of itself.
 *
 *
 * Example 1:
 *
 *
 * Input: root = [3,4,5,1,2], subRoot = [4,1,2]
 * Output: true
 *
 *
 * Example 2:
 *
 *
 * Input: root = [3,4,5,1,2,null,null,null,null,0], subRoot = [4,1,2]
 * Output: false
 *
 *
 *
 * Constraints:
 *
 *
 * The number of nodes in the root tree is in the range [1, 2000].
 * The number of nodes in the subRoot tree is in the range [1, 1000].
 * -10^4 <= root.val <= 10^4
 * -10^4 <= subRoot.val <= 10^4
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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
  const [subRootSum, subRootCount] = getSum(subRoot, 0)

  const candidates = []
  getTraitNodes(root, subRootSum, subRootCount, candidates)

  for (let i = 0; i < candidates.length; i++) {
    if (isSameTree(subRoot, candidates[i])) {
      return true
    }
  }

  return false

  function getSum(node) {
    if (!node) {
      return [0, 0]
    }

    const [leftSum, leftCount] = getSum(node.left)
    const [rightSum, rightCount] = getSum(node.right)

    return [leftSum + rightSum + node.val, leftCount + rightCount + 1]
  }

  function getTraitNodes(node, sumTrait, countTrait, candidates) {
    if (!node) {
      return [0, 0]
    }

    const [leftSum, leftNodeCount] = getTraitNodes(node.left, sumTrait, countTrait, candidates)
    const [rightSum, rightNodeCount] = getTraitNodes(node.right, sumTrait, countTrait, candidates)

    const sum = leftSum + rightSum + node.val
    const count = leftNodeCount + rightNodeCount + 1

    if (sum === sumTrait && count === countTrait) {
      candidates.push(node)
    }

    return [sum, count]
  }

  function isSameTree(base, target) {
    if (!base && !target) {
      return true
    }

    if (!base && target) {
      return false
    }

    if (base && !target) {
      return false
    }

    if (base.val !== target.val) {
      return false
    }

    return isSameTree(base.left, target.left) && isSameTree(base.right, target.right)
  }
};
// @lc code=end

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

const root = new TreeNode(
  3,
  new TreeNode(
    4,
    new TreeNode(1),
    new TreeNode(2,
      new TreeNode(0),
    )
  ),
  new TreeNode(5),
)

const subRoot = new TreeNode(
  4,
  new TreeNode(1),
  new TreeNode(2),
)

console.log(
  isSubtree(root, subRoot)
)

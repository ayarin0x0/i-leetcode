/*
 * @lc app=leetcode id=1379 lang=javascript
 *
 * [1379] Find a Corresponding Node of a Binary Tree in a Clone of That Tree
 *
 * https://leetcode.com/problems/find-a-corresponding-node-of-a-binary-tree-in-a-clone-of-that-tree/description/
 *
 * algorithms
 * Easy (85.91%)
 * Likes:    1763
 * Dislikes: 2011
 * Total Accepted:    241.9K
 * Total Submissions: 281.5K
 * Testcase Example:  '[7,4,3,null,null,6,19]\n3'
 *
 * Given two binary trees original and cloned and given a reference to a node
 * target in the original tree.
 *
 * The cloned tree is a copy of the original tree.
 *
 * Return a reference to the same node in the cloned tree.
 *
 * Note that you are not allowed to change any of the two trees or the target
 * node and the answer must be a reference to a node in the cloned tree.
 *
 *
 * Example 1:
 *
 *
 * Input: tree = [7,4,3,null,null,6,19], target = 3
 * Output: 3
 * Explanation: In all examples the original and cloned trees are shown. The
 * target node is a green node from the original tree. The answer is the yellow
 * node from the cloned tree.
 *
 *
 * Example 2:
 *
 *
 * Input: tree = [7], target =  7
 * Output: 7
 *
 *
 * Example 3:
 *
 *
 * Input: tree = [8,null,6,null,5,null,4,null,3,null,2,null,1], target = 4
 * Output: 4
 *
 *
 *
 * Constraints:
 *
 *
 * The number of nodes in the tree is in the range [1, 10^4].
 * The values of the nodes of the tree are unique.
 * target node is a node from the original tree and is not null.
 *
 *
 *
 * Follow up: Could you solve the problem if repeated values on the tree are
 * allowed?
 *
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

var getTargetCopy = function(original, cloned, target) {
  const path = []
  getPath(original, target, path)

  // console.log(path)

  let result = cloned

  for (let i = 0; i < path.length; i++) {
    const getter = path[i]

    result = result[getter]
  }

  return result
};

function getPath(node, target, path) {
  if (node === target) {
    return true
  }

  if (node.left) {
    path.push('left')
    const ok = getPath(node.left, target, path)

    if (ok) {
      return true
    }

    path.pop()
  }

  if (node.right) {
    path.push('right')
    const ok = getPath(node.right, target, path)

    if (ok) {
      return true
    }

    path.pop()
  }
}
// @lc code=end

function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

TreeNode.prototype.clone = function() {
  const node = new TreeNode(this.val)

  node.left = this.left ? this.left.clone() : null
  node.right = this.right ? this.right.clone() : null

  return node
}

const target = new TreeNode(4,
  null,
  new TreeNode(3,
    null,
    new TreeNode(2,
      null,
      new TreeNode(1),
    ),
  ),
)

const root = new TreeNode(8,
  null,
  new TreeNode(6,
    null,
    new TreeNode(5,
      null,
      target,
    ),
  ),
)

const cloned = root.clone()

console.log(getTargetCopy(root, cloned, target))
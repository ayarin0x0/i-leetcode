/*
 * @lc app=leetcode id=872 lang=javascript
 *
 * [872] Leaf-Similar Trees
 *
 * https://leetcode.com/problems/leaf-similar-trees/description/
 *
 * algorithms
 * Easy (70.06%)
 * Likes:    4163
 * Dislikes: 116
 * Total Accepted:    535K
 * Total Submissions: 763.7K
 * Testcase Example:  '[3,5,1,6,2,9,8,null,null,7,4]\n' +
  '[3,5,1,6,7,4,2,null,null,null,null,null,null,9,8]'
 *
 * Consider all the leaves of a binary tree, from left to right order, the
 * values of those leaves form a leaf value sequence.
 *
 *
 *
 * For example, in the given tree above, the leaf value sequence is (6, 7, 4,
 * 9, 8).
 *
 * Two binary trees are considered leaf-similar if their leaf value sequence is
 * the same.
 *
 * Return true if and only if the two given trees with head nodes root1 and
 * root2 are leaf-similar.
 *
 *
 * Example 1:
 *
 *
 * Input: root1 = [3,5,1,6,2,9,8,null,null,7,4], root2 =
 * [3,5,1,6,7,4,2,null,null,null,null,null,null,9,8]
 * Output: true
 *
 *
 * Example 2:
 *
 *
 * Input: root1 = [1,2,3], root2 = [1,3,2]
 * Output: false
 *
 *
 *
 * Constraints:
 *
 *
 * The number of nodes in each tree will be in the range [1, 200].
 * Both of the given trees will have values in the range [0, 200].
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
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
  const leaf1 = getLeaves(root1, [])
  const { arr: leaf2, OK } = getLeavesWithCheck(root2, { arr: [], OK: true}, leaf1.length)

  if (OK === false) {
    return false
  }

  if (leaf1.length !== leaf2.length) {
    return false
  }

  for (let i = 0; i < leaf1.length; i++) {
    const node1 = leaf1[i]
    const node2 = leaf2[i]

    if (node1 !== node2) {
      return false
    }
  }

  return true

  function getLeaves(node, arr) {
    if (node.left) {
      if (node.right) {
        getLeaves(node.left, arr)
        getLeaves(node.right, arr)
      } else {
        getLeaves(node.left, arr)
      }
    } else {
      if (node.right) {
        getLeaves(node.right, arr)
      } else {
        arr.push(node.val)
      }
    }

    return arr
  }

  function getLeavesWithCheck(node, rope, len) {
    if (!rope.OK) {
      return rope
    }

    if (node.left) {
      if (node.right) {
        getLeavesWithCheck(node.left, rope, len)
        getLeavesWithCheck(node.right, rope, len)
      } else {
        getLeavesWithCheck(node.left, rope, len)
      }
    } else {
      if (node.right) {
        getLeavesWithCheck(node.right, rope, len)
      } else {
        rope.arr.push(node.val)

        if (rope.arr.length > len) {
          rope.OK = false
        }
      }
    }

    return rope
  }
};
// @lc code=end

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

const root1 = new TreeNode(3,
  new TreeNode(5,
    new TreeNode(6),
    new TreeNode(2,
      new TreeNode(7),
      new TreeNode(4),
    ),
  ),
  new TreeNode(1,
    new TreeNode(9),
    new TreeNode(8),
  )
)

const root2 = new TreeNode(1,
  new TreeNode(2),
  new TreeNode(3),
)

console.log(
  leafSimilar(root1, root2)
)

/*
 * @lc app=leetcode id=559 lang=javascript
 *
 * [559] Maximum Depth of N-ary Tree
 *
 * https://leetcode.com/problems/maximum-depth-of-n-ary-tree/description/
 *
 * algorithms
 * Easy (72.44%)
 * Likes:    2783
 * Dislikes: 88
 * Total Accepted:    298.7K
 * Total Submissions: 412.1K
 * Testcase Example:  '[1,null,3,2,4,null,5,6]'
 *
 * Given a n-ary tree, find its maximum depth.
 *
 * The maximum depth is the number of nodes along the longest path from the
 * root node down to the farthest leaf node.
 *
 * Nary-Tree input serialization is represented in their level order traversal,
 * each group of children is separated by the null value (See examples).
 *
 *
 * Example 1:
 *
 *
 *
 *
 * Input: root = [1,null,3,2,4,null,5,6]
 * Output: 3
 *
 *
 * Example 2:
 *
 *
 *
 *
 * Input: root =
 * [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
 * Output: 5
 *
 *
 *
 * Constraints:
 *
 *
 * The total number of nodes is in the range [0, 10^4].
 * The depth of the n-ary tree is less than or equal to 1000.
 *
 *
 */

// @lc code=start
/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number}
 */
var maxDepth = function(root) {
  if (!root) {
    return 0
  }

  let nodes = [root]
  let nodesForward = []

  let levelCount = 0
  for (;nodes.length > 0;) {
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i]

      if (node.children) {
        nodesForward.push(...node.children)
      }
    }

    levelCount += 1

    nodes = nodesForward
    nodesForward = []
  }

  return levelCount
};
// @lc code=end

function Node(val,children) {
   this.val = val;
   this.children = children;
};

const root = new Node(
  1,
  [
    new Node(3,
      [
        new Node(5),
        new Node(6),
      ]
    ),
    new Node(2),
    new Node(4),
  ]
)

console.log(
  maxDepth(root)
)

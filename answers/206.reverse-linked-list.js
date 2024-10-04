/*
 * @lc app=leetcode id=206 lang=javascript
 *
 * [206] Reverse Linked List
 *
 * https://leetcode.com/problems/reverse-linked-list/description/
 *
 * algorithms
 * Easy (74.81%)
 * Likes:    21862
 * Dislikes: 458
 * Total Accepted:    4.5M
 * Total Submissions: 5.9M
 * Testcase Example:  '[1,2,3,4,5]'
 *
 * Given the head of a singly linked list, reverse the list, and return the
 * reversed list.
 *
 *
 * Example 1:
 *
 *
 * Input: head = [1,2,3,4,5]
 * Output: [5,4,3,2,1]
 *
 *
 * Example 2:
 *
 *
 * Input: head = [1,2]
 * Output: [2,1]
 *
 *
 * Example 3:
 *
 *
 * Input: head = []
 * Output: []
 *
 *
 *
 * Constraints:
 *
 *
 * The number of nodes in the list is the range [0, 5000].
 * -5000 <= Node.val <= 5000
 *
 *
 *
 * Follow up: A linked list can be reversed either iteratively or recursively.
 * Could you implement both?
 *
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  const nodes = []

  for (let cur = head; cur !== null; cur = cur.next) {
    nodes.push(cur)
  }

  for (let i = nodes.length - 1; i >= 0; i--) {
    nodes[i].next = nodes[i - 1]
  }

  if (nodes.length > 0) {
    nodes[0].next = null

    return nodes[nodes.length - 1]
  } else {
    return null
  }
}
// @lc code=end

var reverseList2 = function(head) {
  function reverse(cur, last) {
    if (cur === null) {
      return last
    }

    const tail = reverse(cur.next, cur)

    cur.next = last

    return tail
  }

  return reverse(head, null)
}

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

ListNode.prototype.toString = function() {
  let cur = this
  let str = ''

  while (cur) {
    str += cur.val
    cur = cur.next
  }

  return str
}

const root = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))))

const result = reverseList2(root)
console.log(result, result.toString())

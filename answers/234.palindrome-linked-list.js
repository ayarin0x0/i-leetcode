/*
 * @lc app=leetcode id=234 lang=javascript
 *
 * [234] Palindrome Linked List
 *
 * https://leetcode.com/problems/palindrome-linked-list/description/
 *
 * algorithms
 * Easy (51.03%)
 * Likes:    16689
 * Dislikes: 892
 * Total Accepted:    2.1M
 * Total Submissions: 3.9M
 * Testcase Example:  '[1,2,2,1]'
 *
 * Given the head of a singly linked list, return true if it is a palindrome or
 * false otherwise.
 *
 *
 * Example 1:
 *
 *
 * Input: head = [1,2,2,1]
 * Output: true
 *
 *
 * Example 2:
 *
 *
 * Input: head = [1,2]
 * Output: false
 *
 *
 *
 * Constraints:
 *
 *
 * The number of nodes in the list is in the range [1, 10^5].
 * 0 <= Node.val <= 9
 *
 *
 *
 * Follow up: Could you do it in O(n) time and O(1) space?
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
 * @return {boolean}
 */
var isPalindrome = function(head) {
  let fast = head
  let slow = head

  let slowPrev = null

  for (;fast && fast.next;) {
    fast = fast.next.next

    const slowNext = slow.next
    slow.next = slowPrev
    slowPrev = slow

    slow = slowNext
  }

  let rightPointer = fast ? slow.next : slow
  let leftPointer = slowPrev

  for (;leftPointer !== null;) {
    if (leftPointer.val !== rightPointer.val) {
      return false
    }

    leftPointer = leftPointer.next
    rightPointer = rightPointer.next
  }

  return true
}
// @lc code=end

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

const root = new ListNode(1,
  new ListNode(23,
    new ListNode(2,
      new ListNode(1,
        new ListNode(3),
      )
    )
  )
)

console.log(
  isPalindrome(root)
)

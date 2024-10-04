/*
 * @lc app=leetcode id=21 lang=javascript
 *
 * [21] Merge Two Sorted Lists
 *
 * https://leetcode.com/problems/merge-two-sorted-lists/description/
 *
 * algorithms
 * Easy (63.22%)
 * Likes:    20167
 * Dislikes: 1874
 * Total Accepted:    3.6M
 * Total Submissions: 5.7M
 * Testcase Example:  '[1,2,4]\n[1,3,4]'
 *
 * You are given the heads of two sorted linked lists list1 and list2.
 *
 * Merge the two lists into one sorted list. The list should be made by
 * splicing together the nodes of the first two lists.
 *
 * Return the head of the merged linked list.
 *
 *
 * Example 1:
 *
 *
 * Input: list1 = [1,2,4], list2 = [1,3,4]
 * Output: [1,1,2,3,4,4]
 *
 *
 * Example 2:
 *
 *
 * Input: list1 = [], list2 = []
 * Output: []
 *
 *
 * Example 3:
 *
 *
 * Input: list1 = [], list2 = [0]
 * Output: [0]
 *
 *
 *
 * Constraints:
 *
 *
 * The number of nodes in both lists is in the range [0, 50].
 * -100 <= Node.val <= 100
 * Both list1 and list2 are sorted in non-decreasing order.
 *
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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
  if (list1 == null) {
    return list2
  }

  if (list2 == null) {
    return list1
  }

  let pointer1 = list1
  let pointer2 = list2

  let head = null
  let traveller = null
  if (pointer1.val <= pointer2.val) {
    head = pointer1
    pointer1 = pointer1.next
  } else {
    head = pointer2
    pointer2 = pointer2.next
  }

  traveller = head

  for (;;) {
    if (pointer1 == null) {
      traveller.next = pointer2
      break
    }

    if (pointer2 == null) {
      traveller.next = pointer1
      break
    }

    if (pointer1.val <= pointer2.val) {
      traveller.next = pointer1
      traveller = traveller.next

      pointer1 = pointer1.next
    } else {
      traveller.next = pointer2
      traveller = traveller.next

      pointer2 = pointer2.next
    }
  }

  return head
}
// @lc code=end

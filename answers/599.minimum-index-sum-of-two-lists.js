/*
 * @lc app=leetcode id=599 lang=javascript
 *
 * [599] Minimum Index Sum of Two Lists
 *
 * https://leetcode.com/problems/minimum-index-sum-of-two-lists/description/
 *
 * algorithms
 * Easy (56.39%)
 * Likes:    1978
 * Dislikes: 401
 * Total Accepted:    248.6K
 * Total Submissions: 439.5K
 * Testcase Example:  '["Shogun","Tapioca Express","Burger King","KFC"]\n' +
  '["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"]'
 *
 * Given two arrays of strings list1 and list2, find the common strings with
 * the least index sum.
 *
 * A common string is a string that appeared in both list1 and list2.
 *
 * A common string with the least index sum is a common string such that if it
 * appeared at list1[i] and list2[j] then i + j should be the minimum value
 * among all the other common strings.
 *
 * Return all the common strings with the least index sum. Return the answer in
 * any order.
 *
 *
 * Example 1:
 *
 *
 * Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 =
 * ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"]
 * Output: ["Shogun"]
 * Explanation: The only common string is "Shogun".
 *
 *
 * Example 2:
 *
 *
 * Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 =
 * ["KFC","Shogun","Burger King"]
 * Output: ["Shogun"]
 * Explanation: The common string with the least index sum is "Shogun" with
 * index sum = (0 + 1) = 1.
 *
 *
 * Example 3:
 *
 *
 * Input: list1 = ["happy","sad","good"], list2 = ["sad","happy","good"]
 * Output: ["sad","happy"]
 * Explanation: There are three common strings:
 * "happy" with index sum = (0 + 1) = 1.
 * "sad" with index sum = (1 + 0) = 1.
 * "good" with index sum = (2 + 2) = 4.
 * The strings with the least index sum are "sad" and "happy".
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= list1.length, list2.length <= 1000
 * 1 <= list1[i].length, list2[i].length <= 30
 * list1[i] and list2[i] consist of spaces ' ' and English letters.
 * All the strings of list1 are unique.
 * All the strings of list2 are unique.
 * There is at least a common string between list1 and list2.
 *
 *
 */

// @lc code=start
/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
  const indexMap = Object.create(null)

  let result = []
  let min = Infinity

  let base
  let target

  if (list1.length >= list2) {
    base = list1
    target = list2
  } else {
    base = list2
    target = list1
  }

  for (let i = 0; i < base.length; i++) {
    const name = base[i]

    indexMap[name] = i
  }

  for (let i = 0; i < target.length; i++) {
    const name = target[i]
    const existIndex = indexMap[name]

    if (existIndex === undefined) {
      continue
    }

    const indexSum = existIndex + i

    if (indexSum > min) {
      continue
    }

    if (indexSum === min) {
      result.push(name)

      continue
    }

    min = indexSum
    result = [name]
  }

  return result
};
// @lc code=end

console.log(
  findRestaurant(
    ["Shogun","Tapioca Express","Burger King","KFC"],
    ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"]
  )
)

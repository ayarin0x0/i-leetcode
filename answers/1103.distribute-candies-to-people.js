/*
 * @lc app=leetcode id=1103 lang=javascript
 *
 * [1103] Distribute Candies to People
 *
 * https://leetcode.com/problems/distribute-candies-to-people/description/
 *
 * algorithms
 * Easy (65.66%)
 * Likes:    987
 * Dislikes: 197
 * Total Accepted:    93.2K
 * Total Submissions: 141.8K
 * Testcase Example:  '7\n4'
 *
 * We distribute some number of candies, to a row of n = num_people people in
 * the following way:
 *
 * We then give 1 candy to the first person, 2 candies to the second person,
 * and so on until we give n candies to the last person.
 *
 * Then, we go back to the start of the row, giving n + 1 candies to the first
 * person, n + 2 candies to the second person, and so on until we give 2 * n
 * candies to the last person.
 *
 * This process repeats (with us giving one more candy each time, and moving to
 * the start of the row after we reach the end) until we run out of candies.
 * The last person will receive all of our remaining candies (not necessarily
 * one more than the previous gift).
 *
 * Return an array (of length num_people and sum candies) that represents the
 * final distribution of candies.
 *
 *
 * Example 1:
 *
 *
 * Input: candies = 7, num_people = 4
 * Output: [1,2,3,1]
 * Explanation:
 * On the first turn, ans[0] += 1, and the array is [1,0,0,0].
 * On the second turn, ans[1] += 2, and the array is [1,2,0,0].
 * On the third turn, ans[2] += 3, and the array is [1,2,3,0].
 * On the fourth turn, ans[3] += 1 (because there is only one candy left), and
 * the final array is [1,2,3,1].
 *
 *
 * Example 2:
 *
 *
 * Input: candies = 10, num_people = 3
 * Output: [5,2,3]
 * Explanation:
 * On the first turn, ans[0] += 1, and the array is [1,0,0].
 * On the second turn, ans[1] += 2, and the array is [1,2,0].
 * On the third turn, ans[2] += 3, and the array is [1,2,3].
 * On the fourth turn, ans[0] += 4, and the final array is [5,2,3].
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= candies <= 10^9
 * 1 <= num_people <= 1000
 *
 *
 */

// @lc code=start
/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function(candies, num_people) {
  const n = num_people
  const baseSum = (1 + n) * n / 2

  /**
   * 计算可以分几趟
   *      0: baseSum + n * n * 0
   *      1: baseSum + n * n * 1
   *      .
   *      .
   *  level: baseSum + n * n * level
   *
   * make (baseSum + (baseSum + n * n * level)) * (level + 1) / 2 < candies
   *
   * 解这个公式好麻烦 还是直接算...
   */
  let leftCandies = candies
  let level = 0

  for (;;) {
    const sum = baseSum + n * n * level
    if (leftCandies > sum) {
      leftCandies -= sum
      level += 1

      continue
    }

    break
  }

  const result = []

  for (let i = 0; i < num_people; i++) {
    /**
     * b: b = base, 在一趟应该给的糖果数量
     * b + (b + 1 * n) + (b + 2 * n ) + ... + (b + level * n)
     * (b + (b + level * n)) * (level + 1) / 2
     */
    const b = i + 1
    const sum = (b + (b + (level - 1) * n)) * level / 2

    result.push(sum)
  }

  /**
   * 计算最后一趟分的糖果
   */
  for (let i = 0; i < num_people; i++) {
    const receivedCandies = (i + 1) + n * level

    if (leftCandies >= receivedCandies) {
      leftCandies -= receivedCandies
      result[i] += receivedCandies

      continue
    }

    result[i] += leftCandies

    break
  }

  return result
};

function sumN(n) {
  return (1 + n) * n / 2
}
// @lc code=end

// 1 2 3 |6 + 0 * n * n
// 4 5 6 |6 + 1 * n * n
// 7 8 9 |6 + 2 * n * n 24

console.log(
  distributeCandies(60, 4)
)

// 1 2 3 4 | 10
// 5 6 7 8 | 26

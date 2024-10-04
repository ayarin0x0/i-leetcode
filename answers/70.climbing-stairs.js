/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 *
 * https://leetcode.com/problems/climbing-stairs/description/
 *
 * algorithms
 * Easy (52.23%)
 * Likes:    20055
 * Dislikes: 669
 * Total Accepted:    2.7M
 * Total Submissions: 5.1M
 * Testcase Example:  '2'
 *
 * You are climbing a staircase. It takes n steps to reach the top.
 *
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can
 * you climb to the top?
 *
 *
 * Example 1:
 *
 *
 * Input: n = 2
 * Output: 2
 * Explanation: There are two ways to climb to the top.
 * 1. 1 step + 1 step
 * 2. 2 steps
 *
 *
 * Example 2:
 *
 *
 * Input: n = 3
 * Output: 3
 * Explanation: There are three ways to climb to the top.
 * 1. 1 step + 1 step + 1 step
 * 2. 1 step + 2 steps
 * 3. 2 steps + 1 step
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= n <= 45
 *
 *
 */

// @lc code=start
const factorial = (num) => {
  let result = 1

  for (let i = 1; i <= num; i++) {
    result = result * i
  }

  return result
}

/**
 * 1. 有 n 个阶梯就相当于允许最多 n 个 <step 1>, 0 个 <step 2>, (这也意味着总是有 n 个 <step 1> 组成一条路径)
 * 2. 也意味着最多有 parseInt(n / 2) 个 <step 2> 可以插入, 同时每插入一个 <step 2>, 都要减去一个 <step 1> 的数量
 * 3. 现在从允许出现 1 个 <step 2>开始假设, 当有 1个 <step 2> 时, 总 step 数量为 n - 1,
 * 将这个 <step 2> 放入 n - 1 个 step 的排列组合为 C 上1 下 n-1.
 * 4. 之后也一样考虑, 总共允许 parseInt(n / 2) 个 <step 2> 去排列组合
 * 5. 累加所有的 <step 2> 可插入位置, 就是结果
 *
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  let allWays = 1 /* 1 */

  if (n === 1) {
    return allWays
  }

  const maxStep2 = parseInt(n / 2) /* 2 */

  for (let i = 1; i <= maxStep2; i++) {
    const stepCount = n - i

    allWays += factorial(stepCount) / (factorial(i) * factorial(stepCount - i))
  }

  return allWays
}
// @lc code=end

const result = []
for (let i = 1; i < 11; i++) {
  result.push(climbStairs(i))
}

console.log(result)

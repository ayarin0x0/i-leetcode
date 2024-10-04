/*
 * @lc app=leetcode id=13 lang=javascript
 *
 * [13] Roman to Integer
 */
// @lc code=start
const map = {
  'M': 1000,
  'D': 500,
  'C': 100,
  'L': 50,
  'X': 10,
  'V': 5,
  'I': 1,
}

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const nums = []
  const len = s.length

  let anchor = s[0]
  let times = 1

  /**
   * 以 'MCMXCIV' 为例
   * 将其转换成 [1000, 100, 1000, 10, 100, 1, 5]
   */
  for (let i = 1; i < len + 1; i++) {
    const cur = s[i]

    if (anchor === cur) {
      times += 1
      continue
    }

    const num = map[anchor]
    nums.push(num * times)

    anchor = cur
    times = 1
  }

  let total = 0

  /**
   * 求和 [1000, 100, 1000, 10, 100, 1, 5]
   */
  for (let i = 0; i < nums.length; i++) {
    const cur = nums[i]
    const lookahead = nums[i + 1] || 0

    if (lookahead > cur) {
      total += lookahead - cur

      /**
       * 如果遇到了 [100, 1000, 10] 的类似情况
       * 在 [100 -> cur, 1000 -> lookahead] 已经同时处理了 100 和 1000
       * 因此跳过 1000 处理, 即让 i 额外 +1
       * 否则会导致在 [100, 1000 -> cur, 10 -> lookahead] 时, 错误累加一次 1000
       */
      i += 1
    } else {
      total += cur
    }
  }

  return total
}
// @lc code=end

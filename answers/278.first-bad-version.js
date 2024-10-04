/*
 * @lc app=leetcode id=278 lang=javascript
 *
 * [278] First Bad Version
 *
 * https://leetcode.com/problems/first-bad-version/description/
 *
 * algorithms
 * Easy (43.76%)
 * Likes:    8437
 * Dislikes: 3323
 * Total Accepted:    1.8M
 * Total Submissions: 3.9M
 * Testcase Example:  '5\n4'
 *
 * You are a product manager and currently leading a team to develop a new
 * product. Unfortunately, the latest version of your product fails the quality
 * check. Since each version is developed based on the previous version, all
 * the versions after a bad version are also bad.
 *
 * Suppose you have n versions [1, 2, ..., n] and you want to find out the
 * first bad one, which causes all the following ones to be bad.
 *
 * You are given an API bool isBadVersion(version) which returns whether
 * version is bad. Implement a function to find the first bad version. You
 * should minimize the number of calls to the API.
 *
 *
 * Example 1:
 *
 *
 * Input: n = 5, bad = 4
 * Output: 4
 * Explanation:
 * call isBadVersion(3) -> false
 * call isBadVersion(5) -> true
 * call isBadVersion(4) -> true
 * Then 4 is the first bad version.
 *
 *
 * Example 2:
 *
 *
 * Input: n = 1, bad = 1
 * Output: 1
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= bad <= n <= 2^31 - 1
 *
 *
 */

// @lc code=start
/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
  /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
  return function(n) {
    // 这里没有按照习惯叫做 leftPointer 和 rightPointer 是因为 n 并不是 pointer...
    let head = 1
    let tail = n

    for (;;) {
      const middle = Math.floor((head + tail) / 2)

      if (isBadVersion(middle)) {
        // Bad version
        const middlePrev = middle - 1

        if (!isBadVersion(middlePrev)) {
          return middle
        }

        tail = middle - 1
      } else {
        // Good version
        const middleNext = middle + 1

        if (isBadVersion(middleNext)) {
          return middleNext
        }

        head = middleNext
      }
    }
  }
}
// @lc code=end
// 1 2 3 4
let bad = 1702766719
var closure = solution(function isBadVersion(version) { return version >= bad })

console.log(
  closure(2126753390)
)

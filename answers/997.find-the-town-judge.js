/*
 * @lc app=leetcode id=997 lang=javascript
 *
 * [997] Find the Town Judge
 *
 * https://leetcode.com/problems/find-the-town-judge/description/
 *
 * algorithms
 * Easy (49.76%)
 * Likes:    6676
 * Dislikes: 609
 * Total Accepted:    625.7K
 * Total Submissions: 1.3M
 * Testcase Example:  '2\n[[1,2]]'
 *
 * In a town, there are n people labeled from 1 to n. There is a rumor that one
 * of these people is secretly the town judge.
 *
 * If the town judge exists, then:
 *
 *
 * The town judge trusts nobody.
 * Everybody (except for the town judge) trusts the town judge.
 * There is exactly one person that satisfies properties 1 and 2.
 *
 *
 * You are given an array trust where trust[i] = [ai, bi] representing that the
 * person labeled ai trusts the person labeled bi. If a trust relationship does
 * not exist in trust array, then such a trust relationship does not exist.
 *
 * Return the label of the town judge if the town judge exists and can be
 * identified, or return -1 otherwise.
 *
 *
 * Example 1:
 *
 *
 * Input: n = 2, trust = [[1,2]]
 * Output: 2
 *
 *
 * Example 2:
 *
 *
 * Input: n = 3, trust = [[1,3],[2,3]]
 * Output: 3
 *
 *
 * Example 3:
 *
 *
 * Input: n = 3, trust = [[1,3],[2,3],[3,1]]
 * Output: -1
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= n <= 1000
 * 0 <= trust.length <= 10^4
 * trust[i].length == 2
 * All the pairs of trust are unique.
 * ai != bi
 * 1 <= ai, bi <= n
 *
 *
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
  if (trust.length < n - 1) {
    return -1
  }

  const people = [0]

  for (let i = 1; i <= n; i++) {
    people[i] = 0
  }

  for (let i = 0; i < trust.length; i++) {
    const [person, target] = trust[i]

    people[person] = -1
    people[target] += 1
  }

  for (let i = 1; i < people.length; i++) {
    if (people[i] === n - 1) {
      return i
    }
  }

  return -1
};
// @lc code=end

console.log(
  // findJudge(3, [[1,3],[2,3]])
  findJudge(4, [[1,3],[1,4],[2,3],[2,4],[4,3]])
)

/*
 * @lc app=leetcode id=1704 lang=javascript
 *
 * [1704] Determine if String Halves Are Alike
 *
 * https://leetcode.com/problems/determine-if-string-halves-are-alike/description/
 *
 * algorithms
 * Easy (78.66%)
 * Likes:    2273
 * Dislikes: 124
 * Total Accepted:    370.4K
 * Total Submissions: 471K
 * Testcase Example:  '"book"'
 *
 * You are given a string s of even length. Split this string into two halves
 * of equal lengths, and let a be the first half and b be the second half.
 *
 * Two strings are alike if they have the same number of vowels ('a', 'e', 'i',
 * 'o', 'u', 'A', 'E', 'I', 'O', 'U'). Notice that s contains uppercase and
 * lowercase letters.
 *
 * Return true if a and b are alike. Otherwise, return false.
 *
 *
 * Example 1:
 *
 *
 * Input: s = "book"
 * Output: true
 * Explanation: a = "bo" and b = "ok". a has 1 vowel and b has 1 vowel.
 * Therefore, they are alike.
 *
 *
 * Example 2:
 *
 *
 * Input: s = "textbook"
 * Output: false
 * Explanation: a = "text" and b = "book". a has 1 vowel whereas b has 2.
 * Therefore, they are not alike.
 * Notice that the vowel o is counted twice.
 *
 *
 *
 * Constraints:
 *
 *
 * 2 <= s.length <= 1000
 * s.length is even.
 * s consists of uppercase and lowercase letters.
 *
 *
 */

// @lc code=start

const vowelMap = {
  a: 1,
  e: 1,
  i: 1,
  o: 1,
  u: 1,
  A: 1,
  E: 1,
  I: 1,
  O: 1,
  U: 1,
}
function isVowel(char) {
  return vowelMap[char] === 1
}

/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
  let a = 0
  let b = 0

  const half = s.length * 0.5

  for (let i = 0; i < half; i++) {
    const charA = s[i]
    const charB = s[i + half]

    if (isVowel(charA)) {
      a += 1
    }

    if (isVowel(charB)) {
      b += 1
    }
  }

  return a === b
};
// @lc code=end

console.log(halvesAreAlike("AbCdEfGh"))
// ACEG
// bdfh

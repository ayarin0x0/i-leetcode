/*
 * @lc app=leetcode id=12 lang=javascript
 *
 * [12] Integer to Roman
 */

// @lc code=start
const map = [
  'M',
  'D',
  'C',
  'L',
  'X',
  'V',
  'I',
]

const symbols = [
  1000,
  500,
  100,
  50,
  10,
  5,
  1,
]

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  const result = []

  for (let i = 0; i< symbols.length; i++) {
    const symbol = symbols[i]

    const times = parseInt(num / symbol)
    num = num % symbol

    result.push(times)

    if (num === 0) {
      break
    }
  }

  let roman = ''
  const len = result.length

  const append = str => {
    roman += str
  }

  for (let i = 0; i < len; i++) {
    const times = result[i]

    if (times === 0) {
      continue
    }

    if (times === 1) {
      const lookahead = result[i + 1]

      if (lookahead === 4) {
        result[i + 1] = 0
        append(map[i + 1] + map[i - 1])

        continue
      }
    } else if (times === 4) {
      append(map[i] + map[i - 1])

      continue
    }

    append(map[i].repeat(times))
  }

  return roman
}
// @lc code=end

// 4 [4]                       IV
// 9 [1, 4]                    IX
// 40 [4, x, x]                XL
// 90 [1, 4, x, x]             XC
// 400 [4, x, x, x, x]         CD
// 900 [1, 4, x, x, x, x]      CM

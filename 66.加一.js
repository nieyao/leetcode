/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  const length = digits.length;
  if (digits[length - 1] < 9) {
    digits[length - 1] += 1;
  } else {
    for (let i = length - 1 >= 0 ? length - 1 : 0; i >= 0; i--) {
      if (digits[i] + 1 > 9) {
        digits[i] = 0;
        if (i === 0) {
          digits.unshift(1);
        }
      } else {
        digits[i] += 1;
        break;
      }
    }
  }
  return digits;
};
// @lc code=end

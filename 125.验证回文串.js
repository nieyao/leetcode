/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const str = s
    .split("")
    .filter((value) => !/[\W_]/.test(value))
    .join("");
  let left = 0,
    right = str.length - 1;

  while (left < right) {
    const condition =
      typeof str[left] === "string" && typeof str[right] === "string"
        ? str[left].toUpperCase() === str[right].toUpperCase()
        : str[left] === str[right];
    if (!condition) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};
// @lc code=end

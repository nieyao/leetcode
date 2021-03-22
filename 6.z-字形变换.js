/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows === 1) {
    return s;
  }
  let down = true;
  let resultArr = [];
  let resultIndex = 0;
  for (let i = 0; i < s.length; i++) {
    resultArr[resultIndex] = (resultArr[resultIndex] ?? "") + s[i];
    if (i !== 0 && i % (numRows - 1) === 0) {
      down = !down;
    }
    resultIndex += down ? 1 : -1;
  }
  return resultArr.join("");
};
// @lc code=end

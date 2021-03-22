/*
 * @lc app=leetcode.cn id=796 lang=javascript
 *
 * [796] 旋转字符串
 */

// @lc code=start
/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var rotateString = function (A, B) {
  // 解法一
  // if (A === B) {
  //   return true;
  // }
  // const len = A.length;
  // const arrayA = A.split("");
  // for (let i = 0; i < len; i++) {
  //   const temp = arrayA.shift();
  //   arrayA.push(temp);
  //   if (arrayA.join("") === B) {
  //     return true;
  //   }
  // }
  // return false;
  // 解法二
  // return A.length === B.length && (A + A).includes(B);
  // 解法三
  // if (A === B) return true;
  // if (A.length !== B.length) return false;
  // let arr = [];
  // for (let i = 0; i < A.length; i++) {
  //   if (A[i] === B[0]) {
  //     arr.push(i);
  //   }
  // }
  // for (let j = 0; j < arr.length; j++) {
  //   if (A.slice(arr[j]) + A.slice(0, arr[j]) === B) {
  //     return true;
  //   }
  // }
  // return false;
};
// @lc code=end

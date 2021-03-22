/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 旋转数组
 */

const { times } = require("lodash");

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  // solution one
  // if (nums.length < 1) {
  //   return;
  // }
  // for (let i = 0; i < k; i++) {
  //   const temp = nums.pop();
  //   nums.unshift(temp);
  // }
  // solution two
  // if (nums.length < 1) {
  //   return;
  // }
  // const times = k % nums.length;
  // for (let i = 0; i < times; i++) {
  //   const temp = nums.pop();
  //   nums.unshift(temp);
  // }

  // solution three
  // if (nums.length < 1) {
  //   return;
  // }
  // let times = nums.length - (k % nums.length);
  // for (let i = 0; i < times; i++) {
  //   const temp = nums.shift();
  //   nums.push(temp);
  // }

  // solution four
  //   if (nums.length < 1) {
  //     return;
  //   }
  //   let times;
  //   if (times < nums.length / 2) {
  //     times = k % nums.length;
  //     for (let i = 0; i < times; i++) {
  //       const temp = nums.pop();
  //       nums.unshift(temp);
  //     }
  //   } else {
  //     times = nums.length - (k % nums.length);
  //     for (let i = 0; i < times; i++) {
  //       const temp = nums.shift();
  //       nums.push(temp);
  //     }
  //   }
  // };

// @lc code=end

/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const orderNums = nums.sort((a, b) => a - b);
  const length = nums.length;
  let result = [];
  for (let i = 0; i < length - 2; i++) {
    if (orderNums[i] > 0) {
      continue;
    }
    let left = i + 1;
    let right = length - 1;
    const target = 0 - orderNums[i];
    if (orderNums[i] !== orderNums[i - 1]) {
      while (left < right) {
        let twoSum = orderNums[left] + orderNums[right];
        if (twoSum === target) {
          result.push([orderNums[i], orderNums[left], orderNums[right]]);
          while (left < right && orderNums[left] === orderNums[++left]);
          while (left < right && orderNums[right] === orderNums[--right]);
        }
        if (twoSum < target) {
          left++;
        }
        if (twoSum > target) {
          right--;
        }
      }
    }
  }
  return result;
};
// @lc code=end

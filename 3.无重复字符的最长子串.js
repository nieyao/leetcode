/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let temp = [];
  let maxLength = 0;
  for (let i = 0; i < s.length; i++) {
    while (temp.includes(s[i])) {
      temp.shift();
    }
    temp.push(s[i]);
    maxLength = Math.max(maxLength, temp.length);
  }
  return maxLength;
};
// @lc code=end

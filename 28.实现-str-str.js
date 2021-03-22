/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  let head = 0;
  let tail = needle.length - 1;
  if (needle.length === 0) {
    return 0;
  }
  while (tail < haystack.length) {
    if (needle == haystack.slice(head, tail + 1)) {
      return head;
    }
    head++;
    tail++;
  }
  return -1;
};
// @lc code=end

/*
 * @lc app=leetcode.cn id=438 lang=javascript
 *
 * [438] 找到字符串中所有字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  // 用于保存结果
  const res = [];
  // 用于统计p串所需字符
  const need = new Map();
  for (let i = 0; i < p.length; i++) {
    need.set(p[i], need.has(p[i]) ? need.get(p[i]) + 1 : 1);
  }
  // 定义滑动窗口
  let left = 0,
    right = 0,
    valid = 0;
  // 用于统计窗口中的字符
  const window = new Map();
  // 遍历s串
  while (right < s.length) {
    // 进入窗口的字符
    const c = s[right];
    // 扩大窗口
    right++;
    // 进入窗口的字符是所需字符
    if (need.has(c)) {
      // 更新滑动窗口中的字符记录
      window.set(c, window.has(c) ? window.get(c) + 1 : 1);
      // 当窗口中的字符数和滑动窗口中的字符数一致
      if (window.get(c) === need.get(c)) {
        // 有效字符自增
        valid++;
      }
    }
    // 当滑动窗口的大小超出p串长度时 收缩窗口
    while (right - left >= p.length) {
      // 有效字符和所需字符数一致 找到一条符合条件的子串
      if (valid === need.size) {
        // 保存子串的起始索引位置
        res.push(left);
      }
      // 离开窗口的字符
      const d = s[left];
      // 收缩窗口
      left++;
      // 如果离开窗口字符是所需字符
      if (need.has(d)) {
        // 如果离开字符数和所需字符数一致
        if (window.get(d) === need.get(d)) {
          // 有效字符减少一个
          valid--;
        }
        // 更新滑动窗口中的字符数
        window.set(d, window.get(d) - 1);
      }
    }
  }
  // 返回结果
  return res;
};
// @lc code=end

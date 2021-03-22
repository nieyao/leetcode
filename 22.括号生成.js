/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let result = []; // 存储结果
  // 递归生成所有可能括号，再过滤出合法的括号
  generate(
    "", // 初始字符串为空
    n * 2, // 生成的字符串长度
    result // 存储结果
  );
  return result; // 返回结果
};

// 校验字符串是否合法
function isValid(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      count++;
    } else if (!count) {
      return false;
    } else {
      count--;
    }
  }
  return !count;
}

function generate(str, max, result) {
  if (str.length === max) {
    if (isValid(str)) {
      result.push(str);
    }
    return;
  }
  let str1 = str + "(";
  let str2 = str + ")";
  generate(str1, max, result);
  generate(str2, max, result);
}
// @lc code=end

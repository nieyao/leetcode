/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  // const def = (n, a = 0, b = 1) => {
  //   if (n < 1) {
  //     return a;
  //   }
  //   // 尾递归，可以避免栈溢出的问题。  之前在阮一峰老师的ES6那里看到的，链接在下面
  //   return def(n - 1, b, a + b);
  // };
  // return def(n + 1);
  const dp = new Array(n + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;
  for (let i = 2; i < dp.length; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};
// @lc code=end

/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  let flag = true;
  function depLength(root) {
    if (!root) {
      return 0;
    }
    const left = depLength(root.left);
    const right = depLength(root.right);
    if (Math.abs(left - right) > 1) {
      flag = false;
    }
    return Math.max(left, right) + 1;
  }
  depLength(root);
  return flag;
};
// @lc code=end

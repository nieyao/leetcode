/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
 */

const { node } = require("prop-types");

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
var isValidBST = function (root, min = -Infinity, max = Infinity) {
  // let tempArray = [];
  // function bfs(root) {
  //   if (!root) {
  //     return;
  //   }
  //   root.left && bfs(root.left);
  //   tempArray.push(root.val);
  //   console.log(root.val, "dd");
  //   root.right && bfs(root.right);
  // }
  // bfs(root);
  // for (let i = 0; i < tempArray.length; i++) {
  //   if (tempArray[i + 1] <= tempArray[i]) {
  //     return false;
  //   }
  // }
  // return true;
  if (!root) return true;
  if (root.val <= min || root.val >= max) return false;
  return (
    isValidBST(root.left, min, root.val) &&
    isValidBST(root.right, root.val, max)
  );
};
// @lc code=end

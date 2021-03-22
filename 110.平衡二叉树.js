/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  if (!root) {
    return true;
  }
  if (!isBalanced(root.left) || !isBalanced(root.right)) {
    return false;
  }
  return Math.abs(currentHeight(root.right) - currentHeight(root.left)) <= 1;
};

const currentHeight = (root) => {
  if (!root) {
    return 0;
  }
  return Math.max(currentHeight(root.left) + 1, currentHeight(root.right) + 1);
};
// @lc code=end

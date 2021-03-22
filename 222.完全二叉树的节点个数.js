/*
 * @lc app=leetcode.cn id=222 lang=javascript
 *
 * [222] 完全二叉树的节点个数
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
 * @return {number}
 */
var countNodes = function (root) {
  // 解法一
  // if (!root) {
  //   return 0;
  // }
  // return countNodes(root.left) + countNodes(root.right) + 1;
  // 解法二
  if (!root) {
    return 0;
  }
  const left = currentHeight(root.left);
  const right = currentHeight(root.right);
  if (left === right) {
    return countNodes(root.right) + Math.pow(2, left); // 左右高度相等，左子树为满二叉树，节点数量为2^h - 1，加上根节点为2^h，再递归右子树
  } else {
    return countNodes(root.left) + Math.pow(2, right); // 高度不相等，右子树为满二叉树
  }
};

const currentHeight = (root) => {
  if (!root) {
    return 0;
  }
  return Math.max(currentHeight(root.left) + 1, currentHeight(root.right) + 1);
};
// @lc code=end

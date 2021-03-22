/*
 * @lc app=leetcode.cn id=450 lang=javascript
 *
 * [450] 删除二叉搜索树中的节点
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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
  if (!root?.left && !root?.right && root?.val === key) {
    return null;
  }
  function temp(root, key) {
    if (!root?.left && !root?.right) {
      return root?.val;
    }
    const left = temp(root.left, key);
    const right = temp(root.right, key);
    console.log(root.val, left, "w");
    if (root.val === key && left !== key) {
      root.val = left;
      root.left = null;
      console.log(left, "left");
    } else if (root.val === key && left === key) {
      root.val = null;
      root.left = null;
      root.right = null;
      console.log(root, "root");
    }
  }
  temp(root, key);

  return root;
};
// @lc code=end

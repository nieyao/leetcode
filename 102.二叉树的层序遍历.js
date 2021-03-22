/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  // const result = [];
  // if (!root) {
  //   return result;
  // }
  // const tempArray = [];
  // tempArray.push(root);
  // while (tempArray.length) {
  //   const currentLevelSize = tempArray.length;
  //   result.push([]);
  //   for (let i = 0; i < currentLevelSize; i++) {
  //     const node = tempArray.shift();
  //     result[result.length - 1].push(node.val);
  //     node.left && tempArray.push(node.left);
  //     node.right && tempArray.push(node.right);
  //   }
  // }
  // return result;
  if (!root) return [];
  let res = [];

  function dfs(root, step, res) {
    if (root) {
      if (!res[step]) res[step] = [];
      res[step].push(root.val);
      dfs(root.left, step + 1, res);
      dfs(root.right, step + 1, res);
    }
  }
  dfs(root, 0, res);
  return res;
};
// @lc code=end

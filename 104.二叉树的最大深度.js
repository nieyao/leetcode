const deleteNode = function (root, key) {
  if (root == null) return root;

  if (root.val > key) {
    // 往左子树找
    root.left = deleteNode(root.left, key);
  } else if (root.val < key) {
    // 往右子树找
    root.right = deleteNode(root.right, key);
  } else {
    // 找到了
    if (!root.left && !root.right) {
      // 待删除的节点左右子树均为空。证明是叶子节点，直接删除即可
      root = null;
    } else if (root.left && !root.right) {
      // 待删除的节点右子树为空，让待删除节点的左子树替代自己。
      root = root.left;
    } else if (!root.left && root.right) {
      // 待删除的节点左子树为空，让待删除节点的右子树替代自己。
      root = root.right;
    } else if (root.left && root.right) {
      // 如果待删除的节点的左右子树都不为空。我们需要找到比当前节点小的最大节点（前驱）来替换自己
      let last = root.left;
      while (last.right) {
        last = last.left;
      }
      // 最终的last就是比当前节点小的最大节点，将值进行替换
      root.val = last.val;
      // 删除该最大节点
      root.left = deleteNode(root.left, last.val);
    }
  }
  return root;
};

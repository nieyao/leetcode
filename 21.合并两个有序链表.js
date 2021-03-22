/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  let sentryNode = new ListNode(0);
  let resNode = sentryNode;
  while (l1 && l2) {
    if (l1.val >= l2.val) {
      sentryNode.next = l2;
      l2 = l2.next;
    } else {
      sentryNode.next = l1;
      l1 = l1.next;
    }
    sentryNode = sentryNode.next;
  }
  if (!l1) {
    sentryNode.next = l2;
  }
  if (!l2) {
    sentryNode.next = l1;
  }
  return resNode.next;
};
// @lc code=end

/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  // 解法一，快慢指针
  let fastPoint = head;
  let slowPoint = head;
  while (fastPoint) {
    fastPoint = fastPoint.next?.next;
    slowPoint = slowPoint?.next;
    if (fastPoint === slowPoint) {
      return true;
    }
  }
  return false;
  // 解法二，存下所有指针对比
  // let temp = [];
  // while (head) {
  //   temp.push(head);
  //   head = head.next;
  //   if (temp.includes(head)) {
  //     return true;
  //   }
  // }
  // return false;
};
// @lc code=end

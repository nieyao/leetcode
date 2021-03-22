/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第N个节点
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  // const senttyNode = new ListNode(0);
  // senttyNode.next = head;
  // let listLength = 1;
  // let tempNode = senttyNode;
  // while (tempNode.next) {
  //   console.log(tempNode.val, "val");
  //   listLength++;
  //   tempNode = tempNode.next;
  // }
  // console.log(listLength, "listLength");
  // let count = 0;
  // let point = senttyNode;
  // while (true) {
  //   if (count === listLength - 1 - n) {
  //     console.log(point.val, "prevalS");
  //     point.next = point.next.next;
  //     console.log(head, "head");
  //     break;
  //   }
  //   point = point.next;
  //   count++;
  // }
  // return senttyNode.next;
  // 解法二：快慢指针
  // let sentryNode = new ListNode(0);
  // sentryNode.next = head;
  // let slowPoint = sentryNode;
  // let fastPoint = sentryNode;
  // while (n > 0) {
  //   fastPoint = fastPoint.next;
  //   n--;
  // }
  // while (fastPoint.next) {
  //   fastPoint = fastPoint.next;
  //   slowPoint = slowPoint.next;
  //   console.log(slowPoint.val, "val");
  // }
  // slowPoint.next = slowPoint.next.next;
  // return sentryNode.next;
  let sentryNode = new ListNode(0);
  sentryNode.next = head;
  let count = 0;
  const recursion = (head) => {
    if (!head) {
      return null;
    }
    const next = recursion(head.next);
    count++;
    if (count === n + 1) {
      head.next = next;
    }
    return head.next;
  };
  return recursion(sentryNode);
};
// @lc code=end

/*
 * @Date: 2020-12-04 17:29:59
 * @LastEditors: elegantYu
 * @LastEditTime: 2020-12-30 12:06:28
 * @Description: 构造二叉树
 */
// 树节点函数
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
export var buildTreeEy = function (preorder, inorder) {
  if (!preorder || !preorder.length || !inorder || !inorder.length) return null;

  if (preorder.length === 1) return new TreeNode(preorder[0]);

  // 前序遍历 首位为rootNode
  const rootNode = preorder[0];
  const rootIndex = inorder.indexOf(rootNode);
  const leftLength = inorder.slice(0, rootIndex).length;

  const root = new TreeNode(rootNode);
  root.left = buildTreeEy(
    preorder.slice(1, leftLength + 1),
    inorder.slice(0, rootIndex)
  );
  root.right = buildTreeEy(
    preorder.slice(leftLength + 1),
    inorder.slice(rootIndex + 1)
  );

  return root;
};
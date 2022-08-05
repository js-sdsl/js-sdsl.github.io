Js-sdsl 中的树容器 OrderedSet 和 OrderedMap 继承于 `TreeContainer`，它们都是变种红黑树实现

如果你对红黑树不够了解，我们建议先去简单的学习一下相关的概念，在此不再赘述

## TreeNode

树节点拥有两个模板类型 `<K, V>`，表示存储的 `key` 类型和 `value` 类型，在 OrderedSet 中，`V` 默认是 `undefined`

节点中拥有以下几个属性:

```javascript
class TreeNode {
    ...
    color = true;                                       // 节点颜色 (red: true, black: false)
    key: K | undefined = undefined;                     // 节点 key 值
    value: V | undefined = undefined;                   // 节点 value 值
    parent: TreeNode<K, V> | undefined = undefined;     // 父亲节点
    brother: TreeNode<K, V> | undefined = undefined;    // 兄弟节点 (二叉树中同级别的另一个节点)
    leftChild: TreeNode<K, V> | undefined = undefined;  // 左子节点
    rightChild: TreeNode<K, V> | undefined = undefined; // 右子节点
    ...
}
```

并且拥有用于左旋、右旋和自移除三个函数

Js-sdsl 中的树容器 OrderedSet 和 OrderedMap 继承于 `TreeContainer`，它们都是变种红黑树实现

如果你对红黑树不够了解，我们建议先去简单的学习一下相关的概念，在此不再赘述

## TreeNode

树节点拥有两个模板类型 `<K, V>`，表示存储的 `key` 类型和 `value` 类型，在 OrderedSet 中，`V` 默认是 `undefined`

节点中拥有以下几个属性:

```typescript
class TreeNode<K, V> {
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

并且拥有用于左旋、右旋、自移除、获取中序遍历下一个节点、获取后续遍历下一个节点等函数

## TreeContainer

TreeContainer 是 `OrderedSet` 和 `OrderedMap` 的抽象父类，内置的是变种红黑树，它由 `root` 和 `header` 两个 TreeNode 构成，如下所示:

```typescript
abstract class TreeBaseContainer<K, V> extends Base {
    ...
    protected root: TreeNode<K, V> = new TreeNode<K, V>();
    protected header: TreeNode<K, V> = new TreeNode<K, V>();
    ...
}
```

其中 `root` 表示树的根节点，`header` 和 `root` 互为各自的父节点，并且 `header` 的左子节点指向这棵树的最左子节点，右节点指向这棵树的最右子节点

这样定义的好处是我们可以在查找或遍历时快速且有序的进行，比如在**迭代器**访问时，我们会从 `header.leftChild` 开始遍历到 `header.rightChild`，并且在插入时会判断插入值是否为极端值（最大或最小），这样我们可以快速的将其插入到树中以提高性能

它还支持传入自定义比较函数，比如这样:

```typescript
// 那么 header.leftChild 会指向 3，header.rightChild 会指向 1
const st = new OrderedSet<number>([1, 2, 3], (x, y) => y - x);
```

`OrderedSet` 和 `OrderedMap` 都是自动对 `key` 排序的，`OrderedSet` 内的 `value` 值固定为 `undefined`

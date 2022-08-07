The tree containers OrderedSet and OrderedMap in Js-sdsl inherit from `TreeContainer`, they are all variants of red-black tree implementation.

If you don't know enough about red-black trees, we suggest to briefly learn the relevant concepts first, and I won't repeat them here.

## TreeNode

The tree node has two template types `<K, V>`, which represent the stored `key` type and `value` type. In OrderedSet, `V` defaults to `undefined`.

The node has the following properties:

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

and has three functions for left rotation, right rotation and self-removal.

## TreeContainer

TreeContainer is the abstract parent class of `OrderedSet` and `OrderedMap`. The built-in is a variant red-black tree, which consists of `root` and `header` two TreeNodes, as shown below:

```typescript
abstract class TreeBaseContainer<K, V> extends Base {
    ...
    protected root: TreeNode<K, V> = new TreeNode<K, V>();
    protected header: TreeNode<K, V> = new TreeNode<K, V>();
    ...
}
```

Where `root` represents the root node of the tree, `header` and `root` are their respective parent nodes, and the left child node of `header` points to the leftmost child node of the tree, and the right node points to the most tree node. right child node.

The advantage of this definition is that we can quickly and orderly proceed when searching or traversing. For example, when **iterator** is accessed, we will traverse from `header.leftChild` to `header.rightChild`.

And it also supports passing in custom comparison functions, such as this:

```typescript
// Then header.leftChild will point to 3 and header.rightChild will point to 1
const st = new OrderedSet<number>([1, 2, 3], (x, y) => y - x);
```

Both `OrderedSet` and `OrderedMap` automatically sort `key`, and the value of `value` in `OrderedSet` is fixed to `undefined`.

The tree containers OrderedSet and OrderedMap in Js-sdsl inherit from `TreeContainer`, they are all variants of red-black tree implementation.

If you don't know enough about red-black trees, we suggest to briefly learn the relevant concepts first, and I won't repeat them here.

## TreeNode

The tree node has two template types `<K, V>`, which represent the stored `key` type and `value` type. In OrderedSet, `V` defaults to `undefined`.

The node has the following properties:

```typescript
class TreeNode<K, V> {
    // ...
    color = true; // node color (red: true, black: false)
    key: K | undefined = undefined; // node key value
    value: V | undefined = undefined; // node value value
    parent: TreeNode<K, V> | undefined = undefined; // parent node
    leftChild: TreeNode<K, V> | undefined = undefined; // left child node
    rightChild: TreeNode<K, V> | undefined = undefined; // right child node
    // ...
}
````

And it has functions for left rotation, right rotation, self-removal, getting the next node in in-order traversal, and getting the next node for subsequent traversal.

## TreeContainer

TreeContainer is the abstract parent class of `OrderedSet` and `OrderedMap`, built-in is a variant red-black tree, which consists of `root` and `header` two TreeNodes, as shown below:

```typescript
abstract class TreeBaseContainer<K, V> extends Base {
    // ...
    protected root: TreeNode<K, V> | undefined;
    protected header: TreeNode<K, V> = new TreeNode<K, V>();
    // ...
}
````

Where `root` represents the root node of the tree, `header` and `root` are their respective parent nodes, and the left child node of `header` points to the leftmost child node of the tree, and the right node points to the most tree node. right child node.

When the size equals to 0, the root will be `undefined`.

The advantage of this definition is that we can quickly and orderly proceed when searching or traversing. For example, when **iterator** is accessed, we will traverse from `header.leftChild` to `header.rightChild`, and when inserting It will judge whether the inserted value is an extreme value (maximum or minimum), so that we can quickly insert it into the tree to improve performance.

It also supports passing in custom comparison functions, such as this:

```typescript
// then header.leftChild will point to 3 and header.rightChild will point to 1
const st = new OrderedSet<number>([1, 2, 3], (x, y) => y - x);
````

Both `OrderedSet` and `OrderedMap` automatically sort `key`, and the value of `value` in `OrderedSet` is fixed to `undefined`.

## Enable iterator index

Since recording and computing tree container iterator indexes require additional time and space overhead, this feature is disabled by default but can be enabled by setting the `enableIndex` passed in when the container is initialized to `true`.

```typescript
new OrderedSet([1, 2, 3], undefined, true).begin().next().index; // 1
```

**According to testing, enabling this feature will cause the performance of the insert function to decrease by about 10%.**

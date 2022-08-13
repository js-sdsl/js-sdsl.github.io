Js-sdsl 为顺序容器和树容器实现了类 C++ 的双向迭代器

## ContainerIterator

ContainerIterator 是所有迭代器的抽象父类，由于 Js 中没有指针的概念，我们在该类上添加了 `pointer` 属性来模拟 `*` 运算符，并且使用 `get/set` 来模拟指针的赋/取值

```typescript
abstract class ContainerIterator<T> {
    /**
     * The node property is actually defined in the subclass.
     * And type changes with the subclass.
     */
    protected node: any;
    readonly iteratorType: 'normal' | 'reverse';
    constructor(iteratorType: 'normal' | 'reverse') {
        this.iteratorType = iteratorType;
    }
    /**
     * Pointers to element.
     */
    abstract get pointer(): T;
    /**
     * Pointers to element.
     */
    abstract set pointer(newValue: T);
    /**
     * @return Previous iterator.
     */
    abstract pre(): ContainerIterator<T>;
    /**
     * @return Next iterator.
     */
    abstract next(): ContainerIterator<T>;
    /**
     * @param obj The other iterator you want to compare.
     * @return If this equals to obj.
     */
    abstract equals(obj: ContainerIterator<T>): boolean;
}
```

其中 `node` 表示实际存储的 `指针` 类型，我们通过在 `get/set pointer` 的函数中根据 `node` 进行进一步操作

`pre` 和 `next` 分别模拟了 `operator--` 和 `operator++`，该操作会改变迭代器本身

`equals` 模拟了 `operator==`，用于鉴别两个迭代器是否相等 (指向同一位置)，它同样是根据 `node` 判断的

## VectorIterator, DequeIterator

VectorIterator 和 DequeIterator 内部的 `node` 存储的是当前元素在 `vector/deque` 内的索引，移动它只需要将 `node` 加减即可

## LinkListIterator

LinkListIterator 内部的 `node` 的类型是 `LinkNode`，由于其本身具有 `pre/next` 属性，所以我们很容易实现它

## TreeIterator

TreeIterator 内部的 `node` 的类型是 `TreeNode`，虽然和 `LinkNode` 一样是类指针，但是 `TreeNode` 内不具有 `pre/next` 属性，这需要我们利用红黑树的一些性质来进行判断其前后指针的位置，这也意味着 TreeIterator 的移动并不是 `O(1)` 的，但是利用红黑树的特性我们依然可以发现在多次移动中，单个节点最多会被访问四次，故其均摊时间依然是 `O(1)`

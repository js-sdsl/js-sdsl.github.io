Js-sdsl 为顺序容器和树容器实现了类 C++ 的双向迭代器

## ContainerIterator

ContainerIterator 是所有迭代器的抽象父类，由于 Js 中没有指针的概念，我们在该类上添加了 `pointer` 属性来模拟 `*` 运算符，并且使用 `get/set` 来模拟指针的赋/取值

```typescript
abstract class ContainerIterator<T> {
    static readonly NORMAL = false;
    static readonly REVERSE = true;
    /**
     * @description Iterator's type.
     */
    readonly iteratorType: boolean;
    protected constructor(iteratorType: boolean = ContainerIterator.NORMAL) {
        this.iteratorType = iteratorType;
    }
    /**
     * @description Pointers to element.
     * @return The value of the pointer's element.
     */
    abstract get pointer(): T;
    /**
     * @description Set pointer's value (some containers are unavailable).
     * @param newValue The new value you want to set.
     */
    abstract set pointer(newValue: T);
    /**
     * @description Move `this` iterator to pre.
     */
    abstract pre(): this;
    /**
     * @description Move `this` iterator to next.
     */
    abstract next(): this;
    /**
     * @param obj The other iterator you want to compare.
     * @return Boolean about if this equals to obj.
     * @example container.find(1).equals(container.end());
     */
    abstract equals(obj: ContainerIterator<T>): boolean;
    /**
     * @description Get a copy of itself.<br/>
     *              We do not guarantee the safety of this function.<br/>
     *              Please ensure that the iterator will not fail.
     * @return The copy of self.
     */
    abstract copy(): ContainerIterator<T>;
}
```

其中 `node` 表示实际存储的 `指针` 类型，我们通过在 `get/set pointer` 的函数中根据 `node` 进行进一步操作

`pre` 和 `next` 分别模拟了 `operator--` 和 `operator++`，该操作会改变迭代器本身

`equals` 模拟了 `operator==`，用于鉴别两个迭代器是否相等 (指向同一位置)，它同样是根据 `node` 判断的

由于 `pre` 和 `next` 会改变迭代器自身，但有时我们仍希望保留其值，`copy` 函数可返回自身的拷贝，用来解决这个问题

## VectorIterator, DequeIterator

VectorIterator 和 DequeIterator 内部的 `node` 存储的是当前元素在 `vector/deque` 内的索引，移动它只需要将 `node` 加减即可

## LinkListIterator

LinkListIterator 内部的 `node` 的类型是 `LinkNode`，由于其本身具有 `pre/next` 属性，所以我们很容易实现它

## TreeIterator

TreeIterator 内部的 `node` 的类型是 `TreeNode`，虽然和 `LinkNode` 一样是类指针，但是 `TreeNode` 内不具有 `pre/next` 属性，这需要我们利用红黑树的一些性质来进行判断其前后指针的位置，这也意味着 TreeIterator 的移动并不是 `O(1)` 的，但是利用红黑树的特性我们依然可以发现在多次移动中，单个节点最多会被访问四次，故其均摊时间依然是 `O(1)`

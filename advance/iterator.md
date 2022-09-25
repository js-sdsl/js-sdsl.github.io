Js-sdsl implements C++-like bidirectional iterators for sequential containers and tree containers.

## ContainerIterator

ContainerIterator is the abstract parent class of all iterators. Since there is no concept of pointers in Js, we add the `pointer` attribute to this class to simulate the `*` operator, and use `get/set` to simulate the assignment of pointers / value.

```typescript
const enum IteratorType {
    NORMAL = 0,
    REVERSE = 1
}

abstract class ContainerIterator<T> {
    /**
     * @description Iterator's type.
     */
    readonly iteratorType: boolean;
    protected node: unknown;
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

Where `node` represents the actual stored `pointer` type, we further operate according to `node` in the function of `get/set pointer`.

`pre` and `next` emulate `operator--` and `operator++` respectively, which change the iterator itself.

`equals` simulates `operator==`, which is used to identify whether two iterators are equal (pointing to the same location), it is also judged according to `node`.

Since `pre` and `next` change the iterator itself, but sometimes we still want to keep its value, the `copy` function returns a copy of itself to solve this problem.

## VectorIterator, DequeIterator

The `node` inside VectorIterator and DequeIterator stores the index of the current element in the `vector/deque`. To move it, you only need to add or subtract `node`.

## LinkListIterator

The type of `node` inside LinkListIterator is `LinkNode`, which is easy to implement because it has `pre/next` properties.

## TreeIterator

The type of `node` inside TreeIterator is `TreeNode`, although it is a class pointer like `LinkNode`, but `TreeNode` does not have the `pre/next` attribute, which requires us to use some properties of the red-black tree to judge The position of the pointer before and after it also means that the movement of the TreeIterator is not `O(1)`, but using the characteristics of the red-black tree, we can still find that in multiple moves, a single node will be visited at most four times, so Its amortized time is still `O(1)`.

Js-sdsl implements C++-like bidirectional iterators for sequential containers and tree containers.

## ContainerIterator

ContainerIterator is the abstract parent class of all iterators. Since there is no concept of pointers in Js, we add the `pointer` attribute to this class to simulate the `*` operator, and use `get/set` to simulate the assignment of pointers / value.

```typescript
abstract class ContainerIterator<T, P> {
    protected node: P;
    /**
     * Pointers to element.
     */
    readonly iteratorType: 'normal' | 'reverse';
    constructor(node: P, iteratorType: 'normal' | 'reverse') {
        this.node = node;
        this.iteratorType = iteratorType;
    }
    abstract get pointer(): T;
    abstract set pointer(newValue: T);
    /**
     * @return Previous iterator.
     */
    abstract pre(): ContainerIterator<T, P>;
    /**
     * @return Next iterator.
     */
    abstract next(): ContainerIterator<T, P>;
    /**
     * @param obj The other iterator you want to compare.
     * @return If this equals to obj.
     */
    abstract equals(obj: ContainerIterator<T, P>): boolean;
}
```

Where `node` represents the actual stored `pointer` type, we further operate according to `node` in the function of `get/set pointer`.

`pre` and `next` emulate `operator--` and `operator++` respectively, which change the iterator itself.

`equals` simulates `operator==`, which is used to identify whether two iterators are equal (pointing to the same location), it is also judged according to `node`.

## VectorIterator, DequeIterator

The `node` inside VectorIterator and DequeIterator stores the index of the current element in the `vector/deque`. To move it, you only need to add or subtract `node`.

## LinkListIterator

The type of `node` inside LinkListIterator is `LinkNode`, which is easy to implement because it has `pre/next` properties.

## TreeIterator

The type of `node` inside TreeIterator is `TreeNode`, although it is a class pointer like `LinkNode`, but `TreeNode` does not have the `pre/next` attribute, which requires us to use some properties of the red-black tree to judge The position of the pointer before and after it also means that the movement of the TreeIterator is not `O(1)`, but using the characteristics of the red-black tree, we can still find that in multiple moves, a single node will be visited at most four times, so Its amortized time is still `O(1)`.

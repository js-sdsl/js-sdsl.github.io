Deque is a double-ended queue that can quickly interpolate at the head and tail, and can access any element by index

We adopted the idea of C++ when implementing Deque, using **multiple independent blocks** and an array that stores the **first address** of independent blocks to store elements, including the following variables:

```javascript
class Deque {
    ...
    // The index of the block where the first element is located
    private first = 0;
    // The index of the last element within the current block
    private curFirst = 0;               
    // The index of the block where the last element is located
    private last = 0;
    // The index of the last element within the current block
    private curLast = 0;
    // The number of blocks currently containing elements
    private bucketNum = 0;
    // The maximum number of storage elements in each block
    private bucketSize: number;
    // Block first address index array
    private map: (T[])[] = [];
    constructor(container, bucketSize) { ... }
    ...
}
```

<p align="center"><img src="/zh-cn/assets/deque.png" alt="deque 内存分布图"></p>

Deque also has two constants: `sigma` and `initBucketSize`, the former represents the expansion coefficient of Deque, that is, when the internal space is not enough, it will expand to `sigma` times the current number of elements, the latter represents the default value of Deque bucketSize, Their default values are `3` and `1024`, you can change `initBucketSize` by passing parameters during initialization.

When traversing the Deque, it starts from `map[first][curFirst]` and ends at `map[last][curLast]`. When accessing the index, we obtain the current element position according to the block size and the first and last pointers.

**Note that Deque is somewhat different from other containers when initializing. The incoming initialization `container` must contain one of `size()`, `size` or `length` to get the initialization size.**

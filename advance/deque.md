Deque is a double-ended queue that can quickly interpolate at the head and tail, and can access any element by index

We adopted the idea of C++ when implementing Deque, using **multiple independent blocks** and an array that stores the **first address** of independent blocks to store elements, including the following variables:

```typescript
class Deque<T> {
    // ...
    private first = 0;          // index of the block where the first element is located
    private curFirst = 0;       // index of the last element in the current block
    private last = 0;           // index of the block where the last element is located
    private curLast = 0;        // index of the last element in the current block
    private bucketNum = 0;      // the number of blocks currently containing elements
    private bucketSize: number; // Maximum number of storage elements in each block
    private map: T[][] = [];    // block first address index array
    constructor(container, bucketSize) { /* ... */ }
    // ...
}
````

<p align='center'><img src='/assets/deque.png' alt='deque memory map'></p>

The memory in the Deque is allocated on demand, so you don't have to worry about wasting memory

When traversing the Deque, it starts from `map[first][curFirst]` and ends at `map[last][curLast]`. When accessing the index, we obtain the current element position according to the block size and the first and last pointers

When the space inside the Deque is not enough, it will automatically expand the capacity. By default, it will expand to twice the current memory space. Since we use `map` to store the first address of each bucket, we **don't need to move elements** when expanding the capacity but **move the pointer**.

This makes Deque achieve an amortized `O(1)` time complexity when inserting elements, and found in [Benchmark](/test/benchmark) Faster than [`denque`](https://github.com/invertase/denque)!

And in benchmark we find the performance of `pushFront` is nearly equals to `Array.push`.

**Note that Deque is somewhat different from other containers when initializing. The incoming initialization `container` must contain one of `size()`, `size` or `length` to get the initialization size**

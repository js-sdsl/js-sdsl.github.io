Deque 是一种双端队列，可以快速的在头部和尾部进行插值操作，并且可以根据索引来访问任意元素

我们在实现 Deque 时采用了 C++ 的思想，使用**多个独立区块**和一个存储独立区块**首地址**的数组来存储元素，具体包含以下变量：

```typescript
class Deque<T> {
    // ...
    private first = 0;          // 第一个元素所在区块的索引
    private curFirst = 0;       // 最后一个元素在当前区块内的索引
    private last = 0;           // 最后一个元素所在区块索引
    private curLast = 0;        // 最后一个元素在当前区块内的索引
    private bucketNum = 0;      // 当前含有元素的区块个数
    private bucketSize: number; // 各个区块存储元素的最大个数
    private map: T[][] = [];    // 区块首地址索引数组
    constructor(container, bucketSize) { /* ... */  }
    // ...
}
```

<p align='center'><img src='/zh-cn/assets/deque-zh.png' alt='deque 内存分布图'></p>

Deque 中的内存时按需分配的，所以您不必担心内存浪费的问题

遍历 Deque 时，会从 `map[first][curFirst]` 开始，一直到 `map[last][curLast]` 结束，当访问索引时，我们根据区块大小以及首尾指针来获取当前元素所在位置

当 Deque 内部的空间不够时，会自动进行扩容，默认会扩容为当前内存空间的两倍，由于我们使用 `map` 存储了各个桶的首地址，所以在扩容时我们**不必再移动元素**，而是**移动指针**

这使得 Deque 在插入元素时达到了均摊为 `O(1)` 的时间复杂度，并且在 [Benchmark](/zh-cn/test/benchmark) 中发现比 [`denque`](https://github.com/invertase/denque) 更快！

并且 `pushFront` 在测试中的表现几乎与 `Array.push` 持平

**注意，Deque 在初始化时和其他容器有些区别，传入的初始化 `container` 必须包含 `size()` `size` 或 `length` 中的一种以获取初始化大小**

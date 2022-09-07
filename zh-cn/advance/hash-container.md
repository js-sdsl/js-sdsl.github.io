`HashSet` 和 `HashMap` 继承于 `HashContainer` 抽象类，与其它容器不同的是，这两个容器的设计同时参考了 `Java` 和 `C++`，并且主要是按照 `Java` 中的 `HashTable` 思想进行编写

虽然在 ES6 中已经提供了 `Set` 和 `Map` 类，但是 Js-sdsl 依然提供了 Hash 相关的数据结构，目的同样是扩充其 API，并且我们希望 Js-sdsl 能够提供一整套完整的库，而不是仅仅作为扩充，从 `JavaScript Standard Data Structure Library` 就可以看出我们的未来愿景是非常广阔的，基于此，我们提供了 `HashSet` 和 `HashMap`

## 内置 Hash 表

HashContainer 的实现和 Deque 有些类似，都是使用多个不连续的独立区块来存储元素，只不过 Deque 中使用数组，而 HashContainer 中使用的是 `Vector` 和 `TreeContainer`

在初始化时，哈希表会提供一个 `hashTable` 和 `bucketNum`，以 `HashSet` 举例，它的类型是:

```typescript
class HashSet<K> {
    // 实际设计中这个属性出现在 HashContainer 内
    protected bucketNum: number;
    private hashTable: (Vector<K> | OrderedSet<K>)[] = [];
    // ...
}
```

如果是 `HashMap`，那么它会多一个 `value`，就像这样:

```typescript
class HashMap<K, V> {
    // 实际设计中这个属性出现在 HashContainer 内
    protected bucketNum: number;
    private hashTable: (Vector<[K, V]> | OrderedMap<K, V>)[] = [];
    // ...
}
```

`bucketNum` 的作用是记录当前哈希表桶的个数，我们规定了最终哈希值只能是 `0 ~ bucketNum - 1`

`hashTable` 的作用是记录各个**哈希索引的首地址**，举个例子，当插入值 `x` 时，我们会根据 `hashFunc` 计算 `hashX`，然后将这个 `hashX & (bucketNum - 1)` 的值作为 `x` 在 `hashTable` 中的索引将其插入，这保证了插入时永远不会出现超过 `hashTable` 存储上限 (bucketNum) 的情况

## 一些常量优化

当单个哈希索引处的数目大于或小于一定值的时候，我们会对其进行**树/链表化**，这个值是内部定义的，当然，如果你有特殊诉求，可以使用 `@ts-ignore` 来进行更改

### HashContainer.treeifyThreshold = 8

**在插入元素时**，当单个哈希索引处的元素个数大于这个值的时候会将其树化

### HashContainer.untreeifyThreshold = 6

**在删除元素时**，当单个哈希索引处的元素个数小于这个值的时候会将其链表化

### HashContainer.minTreeifySize = 64

**为了避免频繁地树化**，我们规定只有当容器内元素个数大于这个值的时候才会将此处的链表树化，否则会增加哈希表的桶数目，即提高 `hashTable` 的 `bucketNum` 到原来的**两倍**

### HashContainer.sigma

哈希表的扩容系数，只有当容器内 `元素个数 > bucketNum * HashContainer.sigma` 时才会进行扩容 (也有可能是树化时小于 minTreeifySize)，即提高 `hashTable` 的 `bucketNum` 到原来的**两倍**

### HashContainer.maxBucketNum = (1 << 30)

`bucketNum` 的最大值，当其达到这个值后不会再对哈希表进行扩容

## constructor

我们支持使用者自定义初始化桶的数目以及自定义哈希函数，比如

```typescript
const st = new HashSet<string>(['1', '2', '3'], (1 << 10), x => Number(x));
```

上述代码会创建一个初始化桶数目为 1024，哈希函数为 `str => number` 的哈希结构

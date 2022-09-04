`HashSet` and `HashMap` inherit from the `HashContainerBase` abstract class. Unlike other containers, the design of these two containers refers to both `Java` and `C++`, and is mainly based on `HashTable` in `Java` ` Thought to write.

Although the `Set` and `Map` classes have been provided in ES6, Js-sdsl still provides Hash-related data structures, the purpose is also to expand its API, and we hope that Js-sdsl can provide a complete set of libraries, Instead of just being an extension, we can see that our future vision is very broad from the `JavaScript Standard Data Structure Library`. Based on this, we provide `HashSet` and `HashMap`.

## HashTable

The implementation of HashContainer is somewhat similar to Deque in that it uses multiple discrete independent blocks to store elements, but Deque uses arrays, while HashContainer uses `Vector` and `TreeContainer`.

When initialized, the hash table will provide a `hashTable` and `bucketNum`, for example `HashSet`, its type is:

```typescript
class HashSet<K> {
    // In the actual design, this property appears in HashContainerBase
    protected bucketNum: number;
    private hashTable: (Vector<K> | OrderedSet<K>)[] = [];
    ...
}
```

If it is a `HashMap`, then it will have one more `value`, like this:

```typescript
class HashMap<K, V> {
    // In the actual design, this property appears in HashContainerBase
    protected bucketNum: number;
    private hashTable: (Vector<[K, V]> | OrderedMap<K, V>)[] = [];
    ...
}
```

The function of `bucketNum` is to record the number of current hash table buckets. We stipulate that the final hash value can only be `0 ~ bucketNum - 1`.

The function of `hashTable` is to record the first address of each **hash index**, for example, when inserting the value `x`, we will calculate `hashX` according to `hashFunc`, and then put this `hashX & (bucketNum - 1)` The value of `x` is inserted as the index of `x` in `hashTable`, which ensures that the `hashTable` storage limit (bucketNum) will never be exceeded when inserting.

## Constant

When the number at a single hash index is greater or less than a certain value, we will **tree/linked list**, this value is defined internally, of course, if you have special requirements, you can use `@ts -ignore` to make changes.

### HashContainerBase.treeifyThreshold = 8

**When inserting elements**, when the number of elements at a single hash index is greater than this value, it will be treed.

### HashContainerBase.untreeifyThreshold = 6

**When deleting elements**, when the number of elements at a single hash index is less than this value, it will be linked list.

### HashContainerBase.minTreeifySize = 64

**In order to avoid frequent treeing**, we stipulate that the linked list here will be treed only when the number of elements in the container is greater than this value, otherwise it will increase the number of buckets in the hash table, that is, increase the `hashTable` `bucketNum` to **double**.

### HashContainerBase.sigma

The expansion coefficient of the hash table will only be expanded when the number of elements in the container is > bucketNum * HashContainerBase.sigma (it may also be smaller than minTreeifySize when treeing), that is, increase the `bucketNum` of `hashTable` to the original **double**.

### HashContainerBase.maxBucketNum = (1 << 30)

The maximum value of `bucketNum`, when it reaches this value, the hash table will not be expanded again.

## constructor

We support users to customize the number of initialization buckets and custom hash functions, such as:

```typescript
const st = new HashSet<string>(['1', '2', '3'], (1 << 10), x => Number(x));
```

The above code will create a hash structure with an initialization bucket number of 1024 and a hash function of `str => number`.

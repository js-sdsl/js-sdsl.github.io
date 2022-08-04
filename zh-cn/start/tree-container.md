树容器中包含红黑树实现的 OrderedSet 和 OrderedMap，与 ES6 中提供的 Set 和 Map 不同，它是自动排序的，这意味着你可以快速访问到容器中最大和最小的元素

## OrderedSet

有序集合，存储的所有元素不可以相同，支持自定义比较函数

```javascript
const st = new OrderedSet([1, 2, 3]);
st.insert(4);               // O(logn)
st.eraseElementByKey(4)     // O(logn)

// 自定义比较函数
new OrderedSet([1, 2, 3], (x, y) => x - y);
```

## OrderedMap

有序键值对映射集合，自动按 key 排序，存储的所有元素的 key 不可以相同，支持自定义比较函数

```javascript
const mp = new OrderedMap(
    [1, 2, 3].map((element, index) => [index, element])
);
mp.setElement(1, 2);        // O(logn)
st.eraseElementByKey(1)     // O(logn)

// 自定义比较函数
const mp = new OrderedMap(
    [1, 2, 3].map((element, index) => [index, element])，
    (x, y) => x - y
);
```

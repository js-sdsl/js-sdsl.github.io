哈希容器，又称无序关联式容器，此类容器存储的也是键值对元素；不同之处在于，关联式容器默认情况下会对存储的元素做升序排序，而无序关联式容器不会

## HashSet

无序集合，存储的所有元素不可以相同，支持自定义哈希函数

```javascript
const st = new HashSet([1, 2, 3]);
st.insert(4);               // O(1) ~ O(n)
st.eraseElementByKey(4)     // O(1) ~ O(n)

// 自定义哈希函数
new HashSet([1, 2, 3], x => Number(x));
```

## HashMap

无序键值对映射集合，自动对 key 哈希，存储的所有元素的 key 不可以相同，支持自定义哈希函数

```javascript
const mp = new HashMap(
    [1, 2, 3].map((element, index) => [index, element])
);
mp.setElement(1, 2);        // O(1) ~ O(n)
mp.eraseElementByKey(1)     // O(1) ~ O(n)

// 自定义哈希函数
mp = new HashMap(
    [1, 2, 3].map((element, index) => [index, element]),
    x => Number(x)
);
```

## 尝试一下

<p>
<textarea id="input">
let mp = new HashMap(
    [1, 2, 3].map((element, index) => [index, element])
);
mp.setElement(1, 2);        // O(1) ~ O(n)
mp.eraseElementByKey(1)     // O(1) ~ O(n)
mp = new HashMap(
    [1, 2, 3].map((element, index) => [index, element]),
    x => Number(x)
);
mp.forEach(([key, value]) => console.log([key, value]));
</textarea>
</p>

<div id="output"></div>

<button id="run">Run it</button>
<button id="reset">Reset</button>


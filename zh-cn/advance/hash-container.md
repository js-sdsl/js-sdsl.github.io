`HashSet` 和 `HashMap` 继承于 `HashContainer` 抽象类

在 `v4.1.5` 之前, 哈希容器的实现是同时参考 `C++` 和 `Java` 实现的, 主要参考了 `Java` 中的 `HashTable`

从 `v4.2.0-beta.0` 开始，它是参考 [es6 set and map 的 polyfill](https://github.com/rousan/collections-es6) 实现的

虽然在 ES6 中已经提供了 `Set` 和 `Map` 类，但是 Js-sdsl 依然提供了 Hash 相关的数据结构，目的同样是扩充其 API，并且我们希望 Js-sdsl 能够提供一整套完整的库，而不是仅仅作为扩充，从 `JavaScript Standard Data Structure Library` 就可以看出我们的未来愿景是非常广阔的，基于此，我们提供了 `HashSet` 和 `HashMap`

`HashContainer` 的结构如下所示：

```typescript
class HashContainer<K, V> extends Base {
    protected objMap: [K, V][] = [];    // 存储 `object`
    protected originMap: Record<string | symbol, [K, V]> = {};  // 存储可以转化为 `string` 的元素
    protected readonly HASH_KEY_TAG = Symbol('JS_SDSL_HASH_KEY_TAG');   // 用于标记 `object` 的特殊符号
    // ...
}
```

对于以下这些可以转换为 `string` 的基本类型，我们将其放置到 `originMap` 中存储：

- number
- string
- boolean
- symbol
- bigint
- undefined
- null

对于以下复杂类型，我们放置了一个特殊的符号 `HASH_KEY_TAG = Symbol('JS_SDSL_HASH_KEY_TAG')` 来进行标记：

- object
- function

众所周知，`symbol` 在不同的哈希表实例中是不同的，所以你应当在用完某一对象后将其从哈希表中移除

例如：

```typescript
const st0 = new HashSet();
const st1 = new HashSet();
const obj = {};
st0.insert(obj);
st1.insert(obj);
```

这么做 `obj` 对象上将会存在两个 `HASH_KEY_TAG`

为了避免这种情况，你应当将其修改为：

```typescript
const st0 = new HashSet();
const st1 = new HashSet();
const obj = {};
st0.insert(obj);
st0.eraseElementByKey(obj);
st1.insert(obj);
st1.eraseElementByKey(obj);
```

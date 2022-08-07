Vector 是 C++ STL 中的一种简单结构，用于动态分配内存，以避免出现内存泄漏的情况

由于 Javascript 中存在垃圾回收机制，所以我们不需要担心发生内存泄漏的情况，但在以下几个方面的考虑下，Js-sdsl 依然提供了 Vector 这一容器: 

1. 扩充 Array 的 API
2. 提供给 Js-sdsl 的其他容器作为参考
3. 让 Js-sdsl 的初学者有简单的开始

`Base` 是 Js-sdsl 所有容器的共同的抽象祖先 (abstract super class)，接下来我将以 Vector 为例向大家介绍 Js-sdsl 中的容器构造，以及基础用法等等

## constructor

Js-sdsl 中所有的容器都有一个构造器，接收一个具有 `forEach` 可迭代函数的对象，用于初始化，以 Vector 为例: 

```javascript
new Vector();
new Vector([]);
new Vector([1, 2, 3]);
new Vector(new Set([1, 2, 3]));
```

几乎所有的 Js-sdsl 容器都可以使用以上的几种方式进行初始化，有一些特别的容器（比如 HashSet）或许可以接受更多参数，或者像 OrderedMap 这样的键值对容器需要进行一些额外的操作

## size, empty, clear

Js-sdsl 中的所有容器都提供 size, empty, clear 这三个函数，因为它们有共同的抽象祖先 `Base`

### size

获取容器的大小

```javascript
const v = new Vector([1, 2, 3]);
console.log(v.size());   // 3
```

### empty

判断容器是否为空

```javascript
new Vector().empty();     // true
const v = new Vector([1, 2, 3]);
console.log(v.empty());   // false
```

### clear

清空容器

```javascript
const v = new Vector([1, 2, 3]);
v.clear();
console.log(v.size());    // 0
console.log(v.empty());   // true
```

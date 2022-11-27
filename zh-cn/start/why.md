## 概述

众所周知，Javascript 并不像 C++ 或者 Java 这些语言一样拥有较为完善的数据结构库，Js 的相关体系十分匮乏，甚至不提供**堆**这样的常见对象

好消息是，Js 在 es6 中提供了 `Set`(`WeakSet`) 和 `Map`(`WeakMap`)，这是一种哈希表结构，为其匮乏的数据结构体系增添了一丝色彩，但不幸的是，在许多老版本的浏览器中，`Set` 和 `Map` 不被支持，并且相关的 `polifill` 相较于原生实现十分低效

为了解决这种局面，我们以 C++ STL 为参考开发了 `Js-sdsl` 这一数据结构库，目前包含堆、红黑树、哈希表等多种数据结构，在未来，我们会开发更多的通用数据结构来增加其丰富性

**在浏览器兼容上**，其采用 ES5 语法打包，兼容 99% 以上的浏览器，包括 `chrome 49`

**在性能上**，其已被证明超越了 `npm` 上最流行的数据结构库 `functional-red-black-tree` 和 `denque`，并且未来我们会进一步提高其性能，参考 [Benchmark](https://js-sdsl.org/#/zh-cn/test/benchmark-result)

**在流行性上**，我们向 `eslint` 提交了 PR 来优化其在缩进检查所消耗的时间，并得到了 `eslint` 组织的采纳以及 100 美元的赞助，我们将其列举在了[赞助者名单](https://js-sdsl.org/#/zh-cn/more/sponsors)中；在 [`npm`](https://www.npmjs.com/package/js-sdsl) 上，Js-sdsl 已经获得了超过 30M/month 的下载量

**或许现在的成就微不足道，但未来我们会持续建设和推广，让更多的开发者接触到 Js-sdsl**

## Js 糟糕的数据结构生态

在 Js 中，我们可以使用 `Array.slice` 或 `Array.unshift` 来模拟双端队列和双端链表，但是其效率是低下的，参见 [stackoverflow](https://stackoverflow.com/questions/22614237/javascript-runtime-complexity-of-array-functions)

### 糟糕的时间复杂度

虽然 `Array.push` 是 O(1) 实现，`Array.slice` 和 `Array.unshift` 确是 `O(n)` 的，当数据量足够大的时候其性能会呈线性下降

### 糟糕的底层设计

由于 Js 是一门动态语言，其中的 `Array` 并不像 C++ 这种静态语言一样，可以拥有绝对预定义的内存空间，考虑下面这个案例

```typescript
console.time('test-js-array');
const num = 1024 * 1024 * 6;
const arr = new Array(num);
for (let i = 0; i < num; ++i) arr[i] = i;
console.timeEnd('test-js-array');
// test-js-array: 11.60986328125 ms
```

```typescript
console.time('test-js-array');
const num = 1024 * 1024 * 6;
const arr = new Array(num);
arr[arr.length + num] = 1;
for (let i = 0; i < num; ++i) arr[i] = i;
console.timeEnd('test-js-array');
// test-js-array: 619.56884765625 ms
```

```typescript
console.time('test-js-array');
const num = 1024 * 1024 * 6;
const arr = {};
arr[arr.length + num] = 1;
for (let i = 0; i < num; ++i) arr[i] = i;
console.timeEnd('test-js-array');
// test-js-array: 81.559814453125 ms
```

可以看到，当我们直接修改数组的长度超过一定限度时，修改数组的操作会变得非常慢

其原因是当我们直接操控数据长度或往数组中插入不同类型的数据后 `Array` 会自动降级为**哈希表**，并且比原生的 `Object` 更慢！

这对于开发者来说十分不友好，因为 Js 的类型不确定性，我们同样无法在编写时强感知数据是否会变为慢数组，导致出现一定的性能问题

### 部分功能的缺乏

众所周知，Js 中不含有堆和红黑树等相关功能，考虑以下情形

我有一个 JSON 数组，包含四个字段 a、b、c，其中 c 是主键，每个位置的 c 都不一样，我想根据 a、b 的值实现去重

使用 ES6.Set 会很困难，但使用 Js-sdsl 会很容易

```typescript
import { OrderedSet } from 'js-sdsl';
const arr = [{ a: 1, b: 1, c: 1 }];
// 自定义排序函数实现去重
const st = new OrderedSet(arr, (x, y) => {
    if (x.a !== y.a) return x.a - y.a;
    if (x.b !== y.b) return x.b - y.b;
    return 0;
});
```

## 解决方案

为了解决上述的问题，我们提供了 Js-sdsl，一个**轻量且高效**的数据结构库，旨在打造完整的 Js 数据结构生态，提高开发效率以及代码性能，目前我们提供以下数据结构，未来我们会使其变得更加丰富

- **Stack** - 先进后出的堆栈
- **Queue** - 先进先出的队列
- **PriorityQueue** - 堆实现的优先级队列
- **Vector** - 受保护的数组，不能直接操作像 `length` 这样的属性
- **LinkList** - 非连续内存地址的链表
- **Deque** - 双端队列，向前和向后插入元素或按索引获取元素的时间复杂度为 O(1)
- **OrderedSet** - 由红黑树实现的排序集合
- **OrderedMap** - 由红黑树实现的排序字典
- **HashSet** - 参考 [ES6 Set polyfill](https://github.com/rousan/collections-es6) 实现的哈希集合
- **HashMap** - 参考 [ES6 Set polyfill](https://github.com/rousan/collections-es6) 实现的哈希字典

## 尝试一下

<p>
<textarea id='input'>
console.time('test-js-array');
const num = 1024 * 1024 * 6;
const arr = new Array(num);
arr[arr.length + num] = 1;
for (let i = 0; i < num; ++i) arr[i] = i;
console.timeEnd('test-js-array');
</textarea>
</p>

<div id='output'></div>

<button id='run'>Run it</button>
<button id='reset'>Reset</button>

## Overview

As we all know, Javascript does not have a relatively complete data structure library like C++ or Java. The related system of Js is very scarce, and it does not even provide common objects such as **heap**.

The good news is that Js provides `Set`(`WeakSet`) and `Map`(`WeakMap`) in es6, which is a hash table structure that adds a touch of color to its lacking data structure architecture, but unfortunately, in many older browsers, `Set` and `Map` are not supported, and the associated `polifill` is quite inefficient compared to native implementations.

In order to solve this situation, we developed a data structure library `Js-sdsl` with C++ STL as a reference. Currently, it includes heap, red-black tree, hash table and other data structures. In the future, we will develop more Generic data structure to increase its richness.

**In terms of browser compatibility**, it is packaged with ES5 syntax and compatible with more than 99% of browsers, including `chrome 49`.

**In terms of performance**, it has been proven to surpass the most popular data structure libraries `functional-red-black-tree` and `denque` on `npm`, and we will further improve its performance in the future. See [benchmark](https://js-sdsl.org/#/test/benchmark-result)

**In terms of popularity**, we submitted a PR to `eslint` to optimize the time it takes to check indentation, and it was adopted by the `eslint` organization with a $100 sponsorship, which we listed in [the list of sponsors](https://js-sdsl.org/#/more/sponsors); on [`npm`](https://www.npmjs.com/package/js-sdsl), Js-sdsl has received more than 30M/month downloads.

**Perhaps the current achievements are insignificant, but in the future we will continue to build and promote, so that more developers can get in touch with Js-sdsl**.

## Js bad data structure ecology

In Js, we can use `Array.slice` or `Array.unshift` to simulate double-ended queue and double-ended linked list, but its efficiency is low, see [stackoverflow](https://stackoverflow.com/questions/22614237/javascript-runtime-complexity-of-array-functions).

### Bad time complexity

Although `Array.push` is O(1) implementation, `Array.slice` and `Array.unshift` are indeed `O(n)`, and its performance will decrease linearly when the amount of data is large enough.

### Bad low-level design

Since Js is a dynamic language, `Array` is not like a static language like C++, and can have an absolutely predefined memory space. Consider the following case:

```typescript
console.time('test-js-array');
const num = 1024 * 1024 * 6;
const arr = new Array(num);
for (let i = 0; i < num; ++i) arr[i] = i;
console.timeEnd('test-js-array');
// test-js-array: 11.60986328125 ms
````

```typescript
console.time('test-js-array');
const num = 1024 * 1024 * 6;
const arr = new Array(num);
arr[arr.length + num] = 1;
for (let i = 0; i < num; ++i) arr[i] = i;
console.timeEnd('test-js-array');
// test-js-array: 619.56884765625 ms
````

```typescript
console.time('test-js-array');
const num = 1024 * 1024 * 6;
const arr = {};
arr[arr.length + num] = 1;
for (let i = 0; i < num; ++i) arr[i] = i;
console.timeEnd('test-js-array');
// test-js-array: 81.559814453125 ms
````

It can be seen that when we directly modify the length of the array beyond a certain limit, the operation of modifying the array will become very slow.

The reason is that when we directly manipulate the data length or insert different types of data into the array, `Array` will be automatically degraded to a **hash table**, and it is slower than the native `Object`!

This is very unfriendly to developers, because of the type uncertainty of Js, we also cannot strongly sense whether the data will become a slow array when writing, resulting in certain performance problems.

### Lack of some features

As we all know, Js does not contain related functions such as heap and red-black tree. Consider the following situations:

I have a JSON array with four fields a, b, c, where c is the primary key, the c in each position is different, I want to achieve deduplication based on the values a and b.

It would be hard with ES6.Set but easy with Js-sdsl:

```typescript
import { OrderedSet } from 'js-sdsl';
const arr = [{ a: 1, b: 1, c: 1 }];
// Custom sorting function to achieve deduplication
const st = new OrderedSet(arr, (x, y) => {
    if (x.a !== y.a) return x.a - y.a;
    if (x.b !== y.b) return x.b - y.b;
    return 0;
});
````

## Solution

In order to solve the above problems, we provide Js-sdsl, a **lightweight and efficient** data structure library, which aims to create a complete Js data structure ecology, improve development efficiency and code performance. At present, we provide the following data structures. In the future, we will make it richer.

- **Stack** - first in first out stack.
- **Queue** - first in last out queue.
- **PriorityQueue** - heap-implemented priority queue.
- **Vector** - protected array, cannot to operate properties like `length` directly.
- **LinkList** - linked list of non-contiguous memory addresses.
- **Deque** - double-ended-queue, O(1) time complexity to `unshift` or getting elements by index.
- **OrderedSet** - sorted set which implemented by red black tree.
- **OrderedMap** - sorted map which implemented by red black tree.
- **HashSet** - refer to the [polyfill of ES6 Set](https://github.com/rousan/collections-es6).
- **HashMap** - refer to the [polyfill of ES6 Map](https://github.com/rousan/collections-es6).

## Try it

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

## What Is Js-sdsl

Js-sdsl is a JavaScript standard data structure library implemented with reference to C++ STL, which is used to make up for the lack of some data structures in JavaScript.

If you have some research on C++ STL libraries, then Js-sdsl is completely pediatric for you, we provide **almost all data structures** in C++ STL:

- **Stack** - first in last out stack.
- **Queue** - first in first out queue.
- **PriorityQueue** - heap-implemented priority queue.
- **Vector** - protected array, cannot to operate properties like `length` directly.
- **LinkList** - linked list of non-contiguous memory addresses.
- **Deque** - double-ended-queue, O(1) time complexity to `unshift` or getting elements by index.
- **OrderedSet** - sorted set which implemented by red black tree.
- **OrderedMap** - sorted map which implemented by red black tree.
- **HashSet** - refer to the [polyfill of ES6 Set](https://github.com/rousan/collections-es6).
- **HashMap** - refer to the [polyfill of ES6 Map](https://github.com/rousan/collections-es6).

Unlike other Js data structure libraries, Js-sdsl is completely self-contained. It is written in TypeScript, has strict type deduction, and is implemented with reference to OOP. All containers have a common ancestor.

If you want to know more about the comparison of Js-sdsl with other mainstream libraries, please refer to [benchmark](/test/benchmark).

## Start

If you are using a browser, we provide cdn import:

```html
<!-- development -->
<script src='https://unpkg.com/js-sdsl/dist/umd/js-sdsl.js' />
<!-- production -->
<script src='https://unpkg.com/js-sdsl/dist/umd/js-sdsl.min.js' />
```

or use npm:

```bash
npm i js-sdsl
```

Or you can download the isolation packages containing only the containers you want:

<style>.markdown-section>table{display:table;text-align:left;}</style>

| package                                           | npm                                                                   | size                                                             | docs                        |
|---------------------------------------------------|-----------------------------------------------------------------------|------------------------------------------------------------------|-----------------------------|
| [@js-sdsl/stack][stack-package]                   | [![NPM Package][stack-npm-version]][stack-npm-link]                   | [![GZIP Size][stack-umd-size]][stack-umd-link]                   | [link][stack-docs]          |
| [@js-sdsl/queue][queue-package]                   | [![NPM Package][queue-npm-version]][queue-npm-link]                   | [![GZIP Size][queue-umd-size]][queue-umd-link]                   | [link][queue-docs]          |
| [@js-sdsl/priority-queue][priority-queue-package] | [![NPM Package][priority-queue-npm-version]][priority-queue-npm-link] | [![GZIP Size][priority-queue-umd-size]][priority-queue-umd-link] | [link][priority-queue-docs] |
| [@js-sdsl/vector][vector-package]                 | [![NPM Package][vector-npm-version]][vector-npm-link]                 | [![GZIP Size][vector-umd-size]][vector-umd-link]                 | [link][vector-docs]         |
| [@js-sdsl/link-list][link-list-package]           | [![NPM Package][link-list-npm-version]][link-list-npm-link]           | [![GZIP Size][link-list-umd-size]][link-list-umd-link]           | [link][link-list-docs]      |
| [@js-sdsl/deque][deque-package]                   | [![NPM Package][deque-npm-version]][deque-npm-link]                   | [![GZIP Size][deque-umd-size]][deque-umd-link]                   | [link][deque-docs]          |
| [@js-sdsl/ordered-set][ordered-set-package]       | [![NPM Package][ordered-set-npm-version]][ordered-set-npm-link]       | [![GZIP Size][ordered-set-umd-size]][ordered-set-umd-link]       | [link][ordered-set-docs]    |
| [@js-sdsl/ordered-map][ordered-map-package]       | [![NPM Package][ordered-map-npm-version]][ordered-map-npm-link]       | [![GZIP Size][ordered-map-umd-size]][ordered-map-umd-link]       | [link][ordered-map-docs]    |
| [@js-sdsl/hash-set][hash-set-package]             | [![NPM Package][hash-set-npm-version]][hash-set-npm-link]             | [![GZIP Size][hash-set-umd-size]][hash-set-umd-link]             | [link][hash-set-docs]       |
| [@js-sdsl/hash-map][hash-map-package]             | [![NPM Package][hash-map-npm-version]][hash-map-npm-link]             | [![GZIP Size][hash-map-umd-size]][hash-map-umd-link]             | [link][hash-map-docs]       |

## Usage

### Browser

```html
<script src='https://unpkg.com/js-sdsl/dist/umd/js-sdsl.min.js' />
<script>
    const { 
      Vector,
      Stack,
      Queue,
      LinkList,
      Deque,
      PriorityQueue,
      OrderedSet,
      OrderedMap,
      HashSet,
      HashMap
    } = sdsl;
    const myOrderedMap = new OrderedMap();
    myOrderedMap.setElement(1, 2);
    console.log(myOrderedMap.getElementByKey(1)); // 2
</script>
```

### Npm

```typescript
// esModule
import { OrderedMap } from 'js-sdsl';
// commonJs
const { OrderedMap } = require('js-sdsl');
const myOrderedMap = new OrderedMap();
myOrderedMap.setElement(1, 2);
console.log(myOrderedMap.getElementByKey(1)); // 2
```

## Ready

We have just briefly introduced Js-sdsl, and then we will start with a more in-depth study of the container category!


## Try it

<p>
<textarea id='input'>
const myOrderedMap = new OrderedMap();
myOrderedMap.setElement(1, 2);
console.log(myOrderedMap.getElementByKey(1)); // 2
</textarea>
</p>

<div id='output'></div>

<button id='run'>Run it</button>
<button id='reset'>Reset</button>

[stack-package]: ./src/container/OtherContainer/Stack.ts
[stack-npm-version]: https://img.shields.io/npm/v/@js-sdsl/stack
[stack-npm-link]: https://www.npmjs.com/package/@js-sdsl/stack
[stack-umd-size]: https://img.badgesize.io/https://unpkg.com/@js-sdsl/stack/dist/umd/stack.min.js?compression=gzip&style=flat-square/
[stack-umd-link]: https://unpkg.com/@js-sdsl/stack/dist/umd/stack.min.js
[stack-docs]: https://js-sdsl.org/js-sdsl/classes/Stack.html

[queue-package]: https://github.com/js-sdsl/js-sdsl/tree/main/src/container/OtherContainer/Queue.ts
[queue-npm-version]: https://img.shields.io/npm/v/@js-sdsl/queue
[queue-npm-link]: https://www.npmjs.com/package/@js-sdsl/queue
[queue-umd-size]: https://img.badgesize.io/https://unpkg.com/@js-sdsl/queue/dist/umd/queue.min.js?compression=gzip&style=flat-square/
[queue-umd-link]: https://unpkg.com/@js-sdsl/queue/dist/umd/stack.min.js
[queue-docs]: https://js-sdsl.org/js-sdsl/classes/Queue.html

[priority-queue-package]: https://github.com/js-sdsl/js-sdsl/tree/main/src/container/OtherContainer/PriorityQueue.ts
[priority-queue-npm-version]: https://img.shields.io/npm/v/@js-sdsl/priority-queue
[priority-queue-npm-link]: https://www.npmjs.com/package/@js-sdsl/priority-queue
[priority-queue-umd-size]: https://img.badgesize.io/https://unpkg.com/@js-sdsl/priority-queue/dist/umd/priority-queue.min.js?compression=gzip&style=flat-square/
[priority-queue-umd-link]: https://unpkg.com/@js-sdsl/priority-queue/dist/umd/priority-queue.min.js
[priority-queue-docs]: https://js-sdsl.org/js-sdsl/classes/PriorityQueue.html

[vector-package]: https://github.com/js-sdsl/js-sdsl/tree/main/src/container/SequentialContainer/Vector.ts
[vector-npm-version]: https://img.shields.io/npm/v/@js-sdsl/vector
[vector-npm-link]: https://www.npmjs.com/package/@js-sdsl/vector
[vector-umd-size]: https://img.badgesize.io/https://unpkg.com/@js-sdsl/vector/dist/umd/vector.min.js?compression=gzip&style=flat-square/
[vector-umd-link]: https://unpkg.com/@js-sdsl/vector/dist/umd/vector.min.js
[vector-docs]: https://js-sdsl.org/js-sdsl/classes/Vector.html

[link-list-package]: https://github.com/js-sdsl/js-sdsl/tree/main/src/container/SequentialContainer/LinkList.ts
[link-list-npm-version]: https://img.shields.io/npm/v/@js-sdsl/link-list
[link-list-npm-link]: https://www.npmjs.com/package/@js-sdsl/link-list
[link-list-umd-size]: https://img.badgesize.io/https://unpkg.com/@js-sdsl/link-list/dist/umd/link-list.min.js?compression=gzip&style=flat-square/
[link-list-umd-link]: https://unpkg.com/@js-sdsl/link-list/dist/umd/link-list.min.js
[link-list-docs]: https://js-sdsl.org/js-sdsl/classes/LinkList.html

[deque-package]: https://github.com/js-sdsl/js-sdsl/tree/main/src/container/SequentialContainer/Deque.ts
[deque-npm-version]: https://img.shields.io/npm/v/@js-sdsl/deque
[deque-npm-link]: https://www.npmjs.com/package/@js-sdsl/deque
[deque-umd-size]: https://img.badgesize.io/https://unpkg.com/@js-sdsl/deque/dist/umd/deque.min.js?compression=gzip&style=flat-square/
[deque-umd-link]: https://unpkg.com/@js-sdsl/deque/dist/umd/deque.min.js
[deque-docs]: https://js-sdsl.org/js-sdsl/classes/Deque.html

[ordered-set-package]: https://github.com/js-sdsl/js-sdsl/tree/main/src/container/TreeContainer/OrderedSet.ts
[ordered-set-npm-version]: https://img.shields.io/npm/v/@js-sdsl/ordered-set
[ordered-set-npm-link]: https://www.npmjs.com/package/@js-sdsl/ordered-set
[ordered-set-umd-size]: https://img.badgesize.io/https://unpkg.com/@js-sdsl/ordered-set/dist/umd/ordered-set.min.js?compression=gzip&style=flat-square/
[ordered-set-umd-link]: https://unpkg.com/@js-sdsl/ordered-set/dist/umd/ordered-set.min.js
[ordered-set-docs]: https://js-sdsl.org/js-sdsl/classes/OrderedSet.html

[ordered-map-package]: https://github.com/js-sdsl/js-sdsl/tree/main/src/container/TreeContainer/OrderedMap.ts
[ordered-map-npm-version]: https://img.shields.io/npm/v/@js-sdsl/ordered-map
[ordered-map-npm-link]: https://www.npmjs.com/package/@js-sdsl/ordered-map
[ordered-map-umd-size]: https://img.badgesize.io/https://unpkg.com/@js-sdsl/ordered-map/dist/umd/ordered-map.min.js?compression=gzip&style=flat-square/
[ordered-map-umd-link]: https://unpkg.com/@js-sdsl/ordered-map/dist/umd/ordered-map.min.js
[ordered-map-docs]: https://js-sdsl.org/js-sdsl/classes/OrderedMap.html

[hash-set-package]: https://github.com/js-sdsl/js-sdsl/tree/main/src/container/HashContainer/HashSet.ts
[hash-set-npm-version]: https://img.shields.io/npm/v/@js-sdsl/hash-set
[hash-set-npm-link]: https://www.npmjs.com/package/@js-sdsl/hash-set
[hash-set-umd-size]: https://img.badgesize.io/https://unpkg.com/@js-sdsl/hash-set/dist/umd/hash-set.min.js?compression=gzip&style=flat-square/
[hash-set-umd-link]: https://unpkg.com/@js-sdsl/hash-set/dist/umd/hash-set.min.js
[hash-set-docs]: https://js-sdsl.org/js-sdsl/classes/HashSet.html

[hash-map-package]: https://github.com/js-sdsl/js-sdsl/tree/main/src/container/HashContainer/HashMap.ts
[hash-map-npm-version]: https://img.shields.io/npm/v/@js-sdsl/hash-map
[hash-map-npm-link]: https://www.npmjs.com/package/@js-sdsl/hash-map
[hash-map-umd-size]: https://img.badgesize.io/https://unpkg.com/@js-sdsl/hash-map/dist/umd/hash-map.min.js?compression=gzip&style=flat-square/
[hash-map-umd-link]: https://unpkg.com/@js-sdsl/hash-map/dist/umd/hash-map.min.js
[hash-map-docs]: https://js-sdsl.org/js-sdsl/classes/HashMap.html

## What Is Js-sdsl

Js-sdsl is a JavaScript standard data structure library implemented with reference to C++ STL, which is used to make up for the lack of some data structures in JavaScript.

If you have some research on C++ STL libraries, then Js-sdsl is completely pediatric for you, we provide **almost all data structures** in C++ STL:

- Vector
- Stack
- Queue
- LinkList
- Deque
- PriorityQueue
- OrderedSet
- OrderedMap
- HashSet
- HashMap

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

| package                                                                                 | npm                                                                                                                           | install                         |
|-----------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------|---------------------------------|
| [@js-sdsl/stack](https://js-sdsl.github.io/js-sdsl/classes/Stack.html)                  | [![NPM Package](https://img.shields.io/npm/v/@js-sdsl/stack)](https://www.npmjs.com/package/@js-sdsl/stack)                   | `npm i @js-sdsl/stack`          |
| [@js-sdsl/queue](https://js-sdsl.github.io/js-sdsl/classes/Queue.html)                  | [![NPM Package](https://img.shields.io/npm/v/@js-sdsl/queue)](https://www.npmjs.com/package/@js-sdsl/queue)                   | `npm i @js-sdsl/queue`          |
| [@js-sdsl/priority-queue](https://js-sdsl.github.io/js-sdsl/classes/PriorityQueue.html) | [![NPM Package](https://img.shields.io/npm/v/@js-sdsl/priority-queue)](https://www.npmjs.com/package/@js-sdsl/priority-queue) | `npm i @js-sdsl/priority-queue` |
| [@js-sdsl/vector](https://js-sdsl.github.io/js-sdsl/classes/Vector.html)                | [![NPM Package](https://img.shields.io/npm/v/@js-sdsl/vector)](https://www.npmjs.com/package/@js-sdsl/vector)                 | `npm i @js-sdsl/vector`         |
| [@js-sdsl/link-list](https://js-sdsl.github.io/js-sdsl/classes/LinkList.html)           | [![NPM Package](https://img.shields.io/npm/v/@js-sdsl/link-list)](https://www.npmjs.com/package/@js-sdsl/link-list)           | `npm i @js-sdsl/link-list`      |
| [@js-sdsl/deque](https://js-sdsl.github.io/js-sdsl/classes/Deque.html)                  | [![NPM Package](https://img.shields.io/npm/v/@js-sdsl/deque)](https://www.npmjs.com/package/@js-sdsl/deque)                   | `npm i @js-sdsl/deque`          |
| [@js-sdsl/ordered-set](https://js-sdsl.github.io/js-sdsl/classes/OrderedSet.html)       | [![NPM Package](https://img.shields.io/npm/v/@js-sdsl/ordered-set)](https://www.npmjs.com/package/@js-sdsl/ordered-set)       | `npm i @js-sdsl/ordered-set`    |
| [@js-sdsl/ordered-map](https://js-sdsl.github.io/js-sdsl/classes/OrderedMap.html)       | [![NPM Package](https://img.shields.io/npm/v/@js-sdsl/ordered-map)](https://www.npmjs.com/package/@js-sdsl/ordered-map)       | `npm i @js-sdsl/ordered-map`    |
| [@js-sdsl/hash-set](https://js-sdsl.github.io/js-sdsl/classes/HashSet.html)             | [![NPM Package](https://img.shields.io/npm/v/@js-sdsl/hash-set)](https://www.npmjs.com/package/@js-sdsl/hash-set)             | `npm i @js-sdsl/hash-set`       |
| [@js-sdsl/hash-map](https://js-sdsl.github.io/js-sdsl/classes/HashMap.html)             | [![NPM Package](https://img.shields.io/npm/v/@js-sdsl/hash-map)](https://www.npmjs.com/package/@js-sdsl/hash-map)             | `npm i @js-sdsl/hash-map`       |

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

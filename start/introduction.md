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

or you can download the isolate package containing only the containers you want:

```bash
npm i @js-sdsl/stack # this package only contains stack
npm i @js-sdsl/queue # this package only contains queue
npm i @js-sdsl/priority-queue # this package only contains priority-queue
npm i @js-sdsl/vector # this package only contains vector
npm i @js-sdsl/linklist # this package only contains linklist
npm i @js-sdsl/deque # this package only contains deque
npm i @js-sdsl/ordered-set # this package only contains ordered-set
npm i @js-sdsl/ordered-map # this package only contains ordered-map
npm i @js-sdsl/hash-set # this package only contains hash-set
npm i @js-sdsl/hash-map # this package only contains hash-map
```

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

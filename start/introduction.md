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

```javascript
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

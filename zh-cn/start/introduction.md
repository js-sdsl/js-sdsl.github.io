## Js-sdsl 是什么

Js-sdsl 是一款参考 C++ STL 实现的 JavaScript 标准数据结构库，用于弥补 JavaScript 中缺少一些数据结构的缺点

如果你对 C++ STL 库有一定研究的话，那么 Js-sdsl 对你来说完全是小儿科，我们提供 C++ STL 中的**几乎所有数据结构**:

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

与其他的 Js 数据结构库不同的是，Js-sdsl 完全自成一派，其使用 TypeScript 进行编写，有着严格的类型推导，并且参照 OOP 进行实现，所有的容器拥有共同的祖先

如果你想知道更多关于 Js-sdsl 与其他主流库的对比信息，请参考 [benchmark](/zh-cn/test/benchmark)

## 起步

如果你是用的是浏览器，我们提供 cdn 引入:

```html
<!-- 开发环境 -->
<script src='https://unpkg.com/js-sdsl/dist/umd/js-sdsl.js' />
<!-- 发布环境 -->
<script src='https://unpkg.com/js-sdsl/dist/umd/js-sdsl.min.js' />
```

或者使用 npm

```bash
npm i js-sdsl
```

或者根据需要安装以下单个任意包

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


## 使用

### 在浏览器中使用

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

### npm 引入

```typescript
// esModule
import { OrderedMap } from 'js-sdsl';
// commonJs
const { OrderedMap } = require('js-sdsl');
const myOrderedMap = new OrderedMap();
myOrderedMap.setElement(1, 2);
console.log(myOrderedMap.getElementByKey(1)); // 2
```

## 准备好了吗？

我们刚才简单的介绍了 Js-sdsl，接下来将从容器类别开始进行更加深入的学习！

## 尝试一下

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

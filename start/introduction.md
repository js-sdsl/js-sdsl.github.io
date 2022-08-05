## What Is Js-sdsl

Js-sdsl 是一款参考 C++ STL 实现的 JavaScript 标准数据结构库，用于弥补 JavaScript 中缺少一些数据结构的缺点

如果你对 C++ STL 库有一定研究的话，那么 Js-sdsl 对你来说完全是小儿科，我们提供 C++ STL 中的**几乎所有数据结构**

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

如果你想知道更多关于 Js-sdsl 与其他主流库的对比信息，请参考与其他库的对比

## Start

如果你是用的是浏览器，我们提供 cdn 引入
```html
<!-- 开发环境 -->
<script src="https://zly201.github.io/js-sdsl/js-sdsl.js" />
<!-- 发布环境 -->
<script src="https://zly201.github.io/js-sdsl/js-sdsl.min.js" />
```

或者使用 npm

```bash
npm i js-sdsl
```

## Usage

### Using For Browser

```html
<script src="https://zly201.github.io/js-sdsl/js-sdsl.min.js" />
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

## Ready?

我们刚才简单的介绍了 Js-sdsl，接下来将从容器类别开始进行更加深入的学习！

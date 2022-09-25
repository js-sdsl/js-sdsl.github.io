在上述容器外，Js-sdsl 同样提供栈、队列和优先队列三种适配器

## Stack

栈，后进先出结构

```typescript
const s = new Stack([1, 2, 3]);
s.push(4);                  // O(1)
s.pop();                    // O(1)
const t = s.top();          // O(1)
```

## Queue

队列，先进先出结构

```typescript
const q = new Queue([1, 2, 3]);
q.push(4);                  // O(1)
q.pop();                    // O(1)
const f = q.front();        // O(1)
```

## PriorityQueue

优先队列，堆实现，一个保证最大元素总在队列最前面的队列，支持自定义比较函数

```typescript
const que = new PriorityQueue([1, 2, 3]);
que.push(4);                // O(logn)
que.pop();                  // O(logn)
const t = que.top();          // O(1)

// 自定义比较函数
new PriorityQueue([1, 2, 3], (x, y) => x - y);

// 当第一个参数是数组时，可以指定 copy=false，即直接对原数组进行改变，而不是使用拷贝
new PriorityQueue([1, 2, 3], undefined, false);
```

## 尝试一下

<p>
<textarea id='input'>
const que = new PriorityQueue([1, 2, 3]);
que.push(4);                // O(logn)
que.pop();                  // O(logn)
const t = que.top();        // O(1)
console.log(t);             // 3
</textarea>
</p>

<div id='output'></div>

<button id='run'>Run it</button>
<button id='reset'>Reset</button>

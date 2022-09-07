

In addition to the above containers, Js-sdsl also provides three adapters: stack, queue and priority queue.

## Stack

Last in first out structure.

```javascript
const s = new Stack([1, 2, 3]);
s.push(4);                  // O(1)
s.pop();                    // O(1)
const t = s.top();          // O(1)
console.log(t);             // 3
```

## Queue

First in first out structure.

```javascript
const q = new Queue([1, 2, 3]);
q.push(4);                  // O(1)
q.pop();                    // O(1)
const f = q.front();        // O(1)
console.log(t);             // 1
```

## PriorityQueue

Priority queue, heap implementation, a queue that guarantees that the largest element is always at the front of the queue, supports custom comparison functions.

```javascript
const que = new PriorityQueue([1, 2, 3]);
que.push(4);                // O(logn)
que.pop();                  // O(logn)
const t = que.top();        // O(1)
console.log(t);             // 3

// custom comparison function
new PriorityQueue([1, 2, 3], (x, y) => x - y);

/* 
 * When the first parameter is an array, you can specify copy=false, 
 * then will directly change the original array instead of using copy
 */
new PriorityQueue([1, 2, 3], undefined, false);
```

## Try it

<p>
<textarea id="input">
const que = new PriorityQueue([1, 2, 3]);
que.push(4);                // O(logn)
que.pop();                  // O(logn)
const t = que.top();        // O(1)
console.log(t);             // 3
</textarea>
</p>

<div id="output"></div>

<button id="run">Run it</button>
<button id="reset">Reset</button>

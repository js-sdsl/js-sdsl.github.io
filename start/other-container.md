

In addition to the above containers, Js-sdsl also provides three adapters: stack, queue and priority queue.

## Stack

Last in first out structure.

```javascript
const s = new Stack([1, 2, 3]);
s.push(4);                  // O(1)
s.pop();                    // O(1)
const t = s.top();          // O(1)
```

## Queue

First in first out structure.

```javascript
const q = new Queue([1, 2, 3]);
q.push(4);                  // O(1)
q.pop();                    // O(1)
const f = q.front();        // O(1)
```

## PriorityQueue

Priority queue, heap implementation, a queue that guarantees that the largest element is always at the front of the queue, supports custom comparison functions.

```javascript
const que = new PriorityQueue([1, 2, 3]);
que.push(4);                // O(logn)
que.pop();                  // O(logn)
const t = q.top();          // O(1)

// custom comparison function
new PriorityQueue([1, 2, 3], (x, y) => x - y);
```

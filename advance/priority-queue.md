PriorityQueue internally encapsulates an array, which is a large root heap by default, the index of the top element of the heap is 0, and the index values of the following nodes are 1, 2, 3 ... in the order of `breadth traversal`.

If you don't know what a heap is, you can use a search engine to find the answer you want, we won't go into details here.

The implementation in Js-sdsl is not much different from most implementations on the web, but we have the following two unique features:

1. Support passing in custom comparison function.
2. During initialization, the heap will be built directly according to the incoming parameters, and the complexity of this is O(n).

E.g:

```javascript
const arr = [1, 2, 3, 4, 5];
const que = new PriorityQueue(
    // initialize the incoming arr, the complexity of doing so is O(n)
    arr,
    // this will create a small root heap, the default is a large root heap
    (x, y) => x - y
);
for (const x of arr) que.push(x);    // O(nlogn)
```

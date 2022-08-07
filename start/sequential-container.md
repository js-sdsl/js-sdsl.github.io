Sequential Containers allow us to store elements that can be accessed sequentially. Internally, sequential containers are implemented as array or linked list data structures.

Like C++, we provide three sequential containers: Vector, LinkList and Deque.

## Vector

For the basic introduction, see [Base](/zh-cn/start/base.md).

Vector can insert and delete data from the tail, but is not good at doing it elsewhere.

```javascript
const v = new Vector([1, 2, 3]);
v.pushBack(1);                      // O(1)
v.getElementByPos(2)                // O(1)
v.eraseElementByPos(0)              // O(n)
```

## LinkList

Linked list is also a common data structure, which can store elements in discontinuous space and use pointers to record the position before and after.

The linked list in Js-sdsl is bidirectional, which means that it is extremely convenient to insert and delete at the head or tail, but the performance is poor when accessing by index.

```javascript
const list = new LinkList([1, 2, 3]);
list.pushBack(1);                   // O(1)
list.getElementByPos(2)             // O(n)
list.eraseElementByPos(0)           // O(1)
```

## Deque

Deque combines the shortcomings of Vector and LinkList, it can easily insert and delete at the head and tail, and supports random access by index.

But it can't remove elements in arbitrary positions as fast as LinkList.

```javascript
const list = new Deque([1, 2, 3]);
list.pushBack(1);                   // O(1)
list.getElementByPos(2)             // O(1)
list.eraseElementByPos(0)           // O(n)
```

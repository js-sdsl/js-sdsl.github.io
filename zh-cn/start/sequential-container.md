顺序容器 (Sequential Container) 允许我们存储可以按顺序访问的元素。在内部，顺序容器被实现为数组或链表数据结构

和 C++ 一样，我们提供了 Vector，LinkList 和 Deque 三种顺序容器

## Vector

基础介绍见 [Base](/zh-cn/start/base.md)

Vector 可以从尾部插入和删除数据，但是不善于在其他地方进行操作

```javascript
const v = new Vector([1, 2, 3]);
v.pushBack(1);                      // O(1)
v.getElementByPos(2)                // O(1)
v.eraseElementByPos(0)              // O(n)
```

## LinkList

链表也是一种常见的数据结构，其可以在不连续空间内存放元素，并使用指针来记录前后位置

Js-sdsl 中的链表固定是双向的，这意味着其在头部或尾部的插入和删除都是极为方便的，但在按索引访问时性能较差

```javascript
const list = new LinkList([1, 2, 3]);
list.pushBack(1);                   // O(1)
list.getElementByPos(2)             // O(n)
list.eraseElementByPos(0)           // O(1)
```

## Deque

Deque 结合了 Vector 和 LinkList 的不足，它既可以方便的在头部和尾部进行插入和删除，并且支持随机按索引访问

但是它不能像 LinkList 一样快速删除任意位置的元素

```javascript
const list = new Deque([1, 2, 3]);
list.pushBack(1);                   // O(1)
list.getElementByPos(2)             // O(1)
list.eraseElementByPos(0)           // O(n)
```

## LinkNode

LinkNode 是内置的链表指针，是双向的，包含 `pre`，`next` 和 `value` 三种属性，分别表示前置指针，后一指针和存储的元素

## LinkList

LinkList 继承于抽象类 `SequentialContainer`，其本质上是一个循环链表，内部封装了 `header`，`head` 和 `tail` 三个 LinkNode，其中 `header` 是容器的超尾指针

当期初始化时，内部指针指向如下：

```tex
null \leftarrow head \rightarrow null \\

null \leftarrow tail \rightarrow null \\

null \leftarrow header \rightarrow null \\
```

如果这时去请求 LinkList 的迭代器，则会返回超尾元素 `header`

当插入一个元素后，`head` 和 `tail` 会指向同一元素

```tex
header \leftrightarrows head(tail) \leftrightarrows header
```

当链表中元素个数大于 2 的时候，`head` 和 `tail` 才会分开

```tex
header \leftrightarrows head \leftrightarrows otherNode \leftrightarrows tail \leftrightarrows header
```

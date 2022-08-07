## LinkNode

LinkNode is a built-in linked list pointer, which is bidirectional and contains three attributes: `pre`, `next` and `value`, which represent the preceding pointer, the next pointer and the stored element respectively.

## LinkList

LinkList inherits from the abstract class `SequentialContainer`, which is essentially a circular linked list, which encapsulates three LinkNodes, `header`, `head` and `tail`, where `header` is the super tail pointer of the container.

When the current period is initialized, the internal pointer points to the following:

```tex
null \leftarrow head \rightarrow null \\

null \leftarrow tail \rightarrow null \\

null \leftarrow header \rightarrow null \\
```

If you request the iterator of LinkList at this time, it will return the super tail element `header`.

When an element is inserted, `head` and `tail` point to the same element.

```tex
header \leftrightarrows head(tail) \leftrightarrows header
```

When the number of elements in the linked list is greater than 2, `head` and `tail` will be separated.

```tex
header \leftrightarrows head \leftrightarrows otherNode \leftrightarrows tail \leftrightarrows header
```

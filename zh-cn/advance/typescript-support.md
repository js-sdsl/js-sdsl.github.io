由于 Js-sdsl 是完全由 TypeScript 编写的，所以它天然的支持类型推断

例如你可以指定容器内部的元素类型

```typescript
const v = new Vector<number>([1, 2, 3]);
const mp = new OrderedMap<string, number>(
    [1, 2, 3].map(
        (element, index) => [JSON.stringify(element), index]
    )
);
```

或者可以使用父类指定类型

```typescript
// 两种类型分别为容器元素类型和容器迭代器指针类型
const arr: SequentialContainer<number>[] = [
    new Vector(), new LinkList(), new Deque()
];

function doSomething(container: SequentialContainer<number>) {
    return container.size();
}

for (const c of arr) {
    doSomething(c);
}

```

甚至它可以自动推断迭代器指向元素的类型

```typescript
const mp = new OrderedMap<string, number>(
    [1, 2, 3].map(
        (element, index) => [JSON.stringify(element), index]
    )
);
const it = mp.begin();
const key =  it.pointer[0];     // inferred as a string
const value = it.pointer[1];    // inferred as a number
```


除上述几种方案外，几乎所有的取值操作编译器都会推断出一个确定的类型，这在开发中相信是极为便利的一件事

我们提供三种抽象容器类型，`SequentialContainer`, `TreeContainer` 和 `HashContainer`

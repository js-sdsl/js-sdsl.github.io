Since Js-sdsl is written entirely in TypeScript, it naturally supports type inference.

For example you can specify the element type inside the container:

```typescript
const v = new Vector<number>([1, 2, 3]);
const mp = new OrderedMap<string, number>(
    [1, 2, 3].map(
        (element, index) => [JSON.stringify(element), index]
    );
);
```

Or you can use the parent class to specify the type:

```typescript
// The two types are the container element type and the container iterator pointer type
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

Even it can automatically infer the type of the element pointed to by the iterator:

```typescript
const mp = new OrderedMap<string, number>(
    [1, 2, 3].map(
        (element, index) => [JSON.stringify(element), index]
    );
);
const it = mp.begin();
const key =  it.pointer[0];     // inferred as a string
const value = it.pointer[1];    // inferred as a number
```


In addition to the above schemes, almost all value operation compilers will infer a definite type, which is believed to be extremely convenient in development.

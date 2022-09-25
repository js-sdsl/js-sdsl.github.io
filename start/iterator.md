Js-sdsl overloads the `[Symbol.iterator]` function for all iterable containers for the `for...of` syntax.

In addition to this, we provide C++ STL-like bidirectional iterators for sequential containers and tree containers.

## Symbol.iterator

[Explanation of iterators on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator)

Take Vector as an example:

```typescript
const v = new Vector([1, 2, 3]);
for (const u of v) {
    console.log(u);     // 1, 2, 3
}
```

## Bidirectional Iterator

Like C++, we provide forward (normal) / reverse (reverse) iterator modes, and provide four functions `begin`, `end`, `rBegin`, `rEnd` for containers that support iterators.

Since there is no concept of pointers in Js, Js-sdsl simulates `*` operations by adding `pointer` attributes to iterators, and `next` and `pre` functions to simulate `++` and `--` operations.

**Note that pre and next will change the original pointer position in the object, just like `++it` in C++, it itself will also be changed.**

```typescript
import type { IteratorType } from 'js-sdsl';

const v = new Vector([1, 2, 3]);
let it = v.begin();
console.log(it.pointer);        // 1
console.log(
    it.iteratorType ===
    IteratorType.NORMAL
);                              // true
it = it.next();
console.log(it.pointer);        // 2
it = it.pre();
console.log(it.pointer);        // 1

for (
    let i = v.begin(); 
    !i.equals(v.end()); 
    i = i.next()
) {
    console.log(i.pointer);     // 1, 2, 3
}

it = v.rBegin();
console.log(it.pointer);        // 3
console.log(
    it.iteratorType ===
    VectorIterator.REVERSE
);                              // true
it = it.next();
console.log(it.pointer);        // 2
it = it.pre();
console.log(it.pointer);        // 3
```

**Note, as in C++, if you delete the element pointed to by the iterator, the iterator will be invalidated, which is a dangerous operation.**

If you want to save an iterator before move it, you can use `copy`.

```typescript
const v = new Vector([1, 2, 3]);
let it = v.begin();
const itCopy = it.copy();
it = it.next();
console.log(it.pointer);        // 2
console.log(itCopy.pointer);    // 1
```

## Try it

<p>
<textarea id="input">
const v = new Vector([1, 2, 3]);
let it = v.begin();
const itCopy = it.copy();
it = it.next();
console.log(it.pointer);        // 2
console.log(itCopy.pointer);    // 1
</textarea>
</p>

<div id="output"></div>

<button id="run">Run it</button>
<button id="reset">Reset</button>

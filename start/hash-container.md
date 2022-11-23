Hash containers, also named as unordered associative containers, which store key-value pair elements.

The difference between associative containers is that associative containers sort the stored elements in ascending order while unordered associative containers do not.

Hash container can insert all the basic type element including `object`.

We save the insertion order and return elements in the insertion order when traversing.

## HashSet

Unordered collection, all stored elements cannot be the same, support custom hash function.

```typescript
const st = new HashSet([1, 2, 3]);
st.insert(4);               // O(1)
st.eraseElementByKey(4)     // O(1)
// We save the insertion order.
st.forEach(el => console.log(el));  // 1, 2, 3
```

## HashMap

Unordered key-value pair mapping set, automatically hash the key, the keys of all stored elements cannot be the same, support custom hash function.

```typescript
const mp = new HashMap(
    [1, 2, 3].map((element, index) => [index, element])
);
mp.setElement(1, 2);        // O(1)
mp.eraseElementByKey(1)     // O(1)
```

## Try it

<p>
<textarea id='input'>
const mp = new HashMap(
    [1, 2, 3].map((element, index) => [index, element])
);
mp.setElement(1, 2);        // O(1)
mp.eraseElementByKey(1)     // O(1)
mp.forEach(([key, value]) => console.log([key, value]));
</textarea>
</p>

<div id='output'></div>

<button id='run'>Run it</button>
<button id='reset'>Reset</button>

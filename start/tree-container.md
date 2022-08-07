The tree container contains OrderedSet and OrderedMap implemented by red-black tree. Unlike Set and Map provided in ES6, it is automatically sorted, which means you can quickly access the largest and smallest elements in the container.

## OrderedSet

Ordered collection, all stored elements cannot be the same, support custom comparison function.

```javascript
const st = new OrderedSet([1, 2, 3]);
st.insert(4);               // O(logn)
st.eraseElementByKey(4)     // O(logn)

// custom comparison function
new OrderedSet([1, 2, 3], (x, y) => x - y);
```

## OrderedMap

Ordered key-value pair mapping set, automatically sorted by key, the keys of all stored elements cannot be the same, support custom comparison functions.

```javascript
const mp = new OrderedMap(
    [1, 2, 3].map((element, index) => [index, element])
);
mp.setElement(1, 2);        // O(logn)
st.eraseElementByKey(1)     // O(logn)

// custom comparison function
const mp = new OrderedMap(
    [1, 2, 3].map((element, index) => [index, element])，
    (x, y) => x - y
);
```

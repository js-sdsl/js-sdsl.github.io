Hash containers, also known as unordered associative containers, also store key-value pair elements; the difference is that by default, associative containers sort the stored elements in ascending order, while unordered associative containers do not. meeting.

## HashSet

Unordered collection, all stored elements cannot be the same, support custom hash function.

```javascript
const st = new HashSet([1, 2, 3]);
st.insert(4);               // O(1) ~ O(n)
st.eraseElementByKey(4)     // O(1) ~ O(n)

// custom hash function
new HashSet([1, 2, 3], x => Number(x));
```

## HashMap

Unordered key-value pair mapping set, automatically hash the key, the keys of all stored elements cannot be the same, support custom hash function.

```javascript
const mp = new HashMap(
    [1, 2, 3].map((element, index) => [index, element])
);
mp.setElement(1, 2);        // O(1) ~ O(n)
st.eraseElementByKey(1)     // O(1) ~ O(n)

// custom hash function
const mp = new HashMap(
    [1, 2, 3].map((element, index) => [index, element])，
    x => Number(x)
);
```

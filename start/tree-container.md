The tree container contains OrderedSet and OrderedMap implemented by red-black tree. Unlike Set and Map provided in ES6, it is automatically sorted, which means you can quickly access the largest and smallest elements in the container.

## OrderedSet

Ordered collection, all stored elements cannot be the same, support custom comparison function.

```javascript
const st = new OrderedSet([1, 2, 3]);
st.insert(4);               // O(logn)
st.eraseElementByKey(4)     // O(logn)

// custom comparison function
new OrderedSet([1, 2, 3], (x, y) => x - y);

// enable tree iterator index (enableIndex = true)
console.log(new OrderedSet([1, 2], undefined, true).begin(),next().index);   // 1
```

## OrderedMap

Ordered key-value pair mapping set, automatically sorted by key, the keys of all stored elements cannot be the same, support custom comparison functions.

```javascript
const mp = new OrderedMap(
    [1, 2, 3].map((element, index) => [index, element])
);
mp.setElement(1, 2);        // O(logn)
mp.eraseElementByKey(1)     // O(logn)

// custom comparison function
mp = new OrderedMap(
    [1, 2, 3].map((element, index) => [index, element]),
    (x, y) => x - y
);

// enable tree iterator index (enableIndex = true)
console.log(new OrderedMap([[0, 1], [1, 1]], undefined, true).begin(),next().index);   // 1
```

## Try it

<p>
<textarea id="input">
let mp = new OrderedMap(
    [1, 2, 3].map((element, index) => [index, element])
);
mp.setElement(1, 2);        // O(logn)
mp.eraseElementByKey(1)     // O(logn)
mp = new OrderedMap(
    [1, 2, 3].map((element, index) => [index, element]),
    (x, y) => x - y
);
mp.forEach(([key, value]) => console.log([key, value]));
</textarea>
</p>

<div id="output"></div>

<button id="run">Run it</button>
<button id="reset">Reset</button>

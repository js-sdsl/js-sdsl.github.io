Vector is a simple structure in C++ STL used to dynamically allocate memory to avoid memory leaks

Due to the garbage collection mechanism in Javascript, we don't need to worry about memory leaks, but Js-sdsl still provides the Vector container under the following considerations:

1. Extend the API of Array
2. Other containers provided to Js-sdsl as a reference
3. Let the beginners of Js-sdsl have an easy start

`Base` is the common abstract super class of all containers in Js-sdsl. Next, I will take Vector as an example to introduce the container construction in Js-sdsl, as well as the basic usage, etc.

## constructor

All containers in Js-sdsl have a constructor that accepts an object with a `forEach` iterable function for initialization. Take Vector as an example:

```javascript
new Vector();
new Vector([]);
new Vector([1, 2, 3]);
new Vector(new Set([1, 2, 3]));
```

Almost all Js-sdsl containers can be initialized using the above methods, some special containers (such as HashSet) may accept more parameters, or key-value pair containers such as OrderedMap require some additional operations.

## size, empty, clear

All containers in Js-sdsl provide the three functions size, empty, clear because they have a common abstract ancestor `Base`.

### size

Get the size of the container.

```javascript
const v = new Vector([1, 2, 3]);
console.log(v.size());   // 3
```

### empty

Check if the container is empty.

```javascript
new Vector().empty();     // true
const v = new Vector([1, 2, 3]);
console.log(v.empty());   // false
```

### clear

Clear the container.

```javascript
const v = new Vector([1, 2, 3]);
v.clear();
console.log(v.size());    // 0
console.log(v.empty());   // true
```

## Try it

<p>
<textarea id="input">
const v = new Vector([1, 2, 3]);
v.clear();
console.log(v.size());    // 0
console.log(v.empty());   // true
</textarea>
</p>

<div id="output"></div>

<button id="run">Run it</button>
<button id="reset">Reset</button>

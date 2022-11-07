`HashSet` and `HashMap` inherit from the `HashContainer` abstract class.

Before `v4.1.5`, the design of these two containers refers to both Java and C++, and is mainly based on HashTable in Java.

Since `v4.2.0-beta.0`, the implementation is referred to [the polyfill of es6 set and map](https://github.com/rousan/collections-es6).

Although the `Set` and `Map` classes have been provided in ES6, Js-sdsl still provides Hash-related data structures, the purpose is also to expand its API, and we hope that Js-sdsl can provide a complete set of libraries, Instead of just being an extension, we can see that our future vision is very broad from the `JavaScript Standard Data Structure Library`. Based on this, we provide `HashSet` and `HashMap`.

The structure of `HashContainer` is as follows:

```typescript
class HashContainer<K, V> extends Base {
    protected objMap: [K, V][] = [];    // store `object`
    protected originMap: Record<string | symbol, [K, V]> = {};  // store element which can covert to `string`
    protected readonly HASH_KEY_TAG = Symbol('JS_SDSL_HASH_KEY_TAG');   // unique tag to marking `object`
    // ...
}
```

For the basic type element which can convert to string including:

- number
- string
- boolean
- symbol
- bigint
- undefined
- null

we just insert it to `originMap`.

For others:

- object
- function

we set a unique tag `HASH_KEY_TAG = Symbol('JS_SDSL_HASH_KEY_TAG')` to it to marking.

As well as you know, the `symbol` is **NOT** unique in different instance of hash container, so you should `remove` it from hash container after used.

E.g:

```typescript
const st0 = new HashSet();
const st1 = new HashSet();
const obj = {};
st0.insert(obj);
st1.insert(obj);
```

Then `obj` will have two `HASH_KEY_TAG` in its prototype.

To avoid this, you should change it to:

```typescript
const st0 = new HashSet();
const st1 = new HashSet();
const obj = {};
st0.insert(obj);
st0.eraseElementByKey(obj);
st1.insert(obj);
st1.eraseElementByKey(obj);
```

js-sdsl automatically creates and provides isolate packages by a custom build pipeline.

## What is this?

**Isolate package is a package that distributes only certain containers independently.**

If you want to use only a specific container in js-sdsl, you just need to download the package of that container.

## Isolate packages

A list of currently provided isolate packages:

| Package Name | Included Containers |
| --- | --- |
| @js-sdsl/stack | `Stack` and its dependencies. |
| @js-sdsl/queue | `Queue` and its dependencies. |
| @js-sdsl/priority-queue | `PriorityQueue` and its dependencies. |
| @js-sdsl/vector | `Vector` and its dependencies. |
| @js-sdsl/linklist | `LinkList` and its dependencies. |
| @js-sdsl/deque | `Deque` and its dependencies. |
| @js-sdsl/ordered-set | `OrderedSet` and its dependencies. |
| @js-sdsl/ordered-map | `OrderedMap` and its dependencies. |
| @js-sdsl/hash-set | `HashSet` and its dependencies. |
| @js-sdsl/hash-map | `HashMap` and its dependencies. |

## Limitations

 - **Isolate packages have overlapping codes.**
   
   For example, `hash-set` uses `vector` and `ordered-set` internally, so isolate packages in `hash-set` also contain `vector` and `ordered-set` codes.
   
   Therefore, **using isolate packages is not recommended if you want to use more than one container at the same time.**

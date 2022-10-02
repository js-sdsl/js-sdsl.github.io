js-sdsl 通过定制管道，生成并提供个别包装

## 这是什么？

**单个包装是只独立分配特定集装箱的包装**

如果您只想在js-sdsl中使用特定集装箱，则只需下载该集装箱的包装即可

## 是个别包

当前提供的独立包装列表

| 包名称 | 包含的集装箱 |
| --- | --- |
| @js-sdsl/stack | 包含`Stack`及其依赖性 |
| @js-sdsl/queue | 包含`Queue`及其依赖性 |
| @js-sdsl/priority-queue | 包含`PriorityQueue`及其依赖性 |
| @js-sdsl/vector | 包含`Vector`及其依赖性 |
| @js-sdsl/linklist | 包含`LinkList`及其依赖性 |
| @js-sdsl/deque | 包含`Deque`及其依赖性 |
| @js-sdsl/ordered-set | 包含`OrderedSet`及其依赖性 |
| @js-sdsl/ordered-map | 包含`OrderedMap`及其依赖性 |
| @js-sdsl/hash-set | 包含`HashSet`及其依赖性 |
| @js-sdsl/hash-map | 包含`HashMap`及其依赖性 |

## 边际点

 - **个别套餐的代码是重叠的**
   
   例如，`hash-set`在内部使用`vector`和`ordered-set`，因此`hash-set`的隔离包还包括`vector`和`ordered-set`代码。
   
   因此，**如果想要同时使用两个或多个集装箱，最好不要使用单独的包装**

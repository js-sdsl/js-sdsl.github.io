Js-sdsl 中使用工厂模式生成了一些错误类型，如果有必要的话可以使用对应的 `error name` 来进行错误捕获

你可以在 [`/src/utils/error.ts`](https://github.com/ZLY201/js-sdsl/blob/main/src/utils/error.ts) 中找到相应的实现

## TypeError

类型错误，该错误在迭代器使用不当是可能会出现，例如在 `equal` 中传入了和当前迭代器类型不匹配的参数

## RunTimeError

运行时错误，多见于指针越界，或者是访问了超过数组长度的索引位置

## InternalError

内部错误，当你遇到这一错误时可以保留上下文，然后提交 [issue](https://github.com/ZLY201/js-sdsl/issues)

## NullValueError

空值错误，为了避免不必要的麻烦，Js-sdsl 中禁止插入 `null` 或 `undefined` 到容器中，否则会抛出该作错误

## ContainerInitError

容器初始化错误，容器初始化参数有误时会出现

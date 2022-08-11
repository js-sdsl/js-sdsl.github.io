Js-sdsl uses the factory pattern to generate some error types. If necessary, you can use the corresponding `error name` to capture errors.

You can find the corresponding implementation in [`/src/utils/error.ts`](https://github.com/ZLY201/js-sdsl/blob/main/src/utils/error.ts).

## TypeError

Type error, which may occur when the iterator is used improperly, such as passing in a parameter that does not match the current iterator type in `equal`.

## RunTimeError

Run-time error, most commonly when a pointer is out of bounds, or an index position that exceeds the length of the array is accessed.

## InternalError

Internal bug, keep context when you encounter this bug, then file [issue](https://github.com/ZLY201/js-sdsl/issues).

## NullValueError

Null value error, in order to avoid unnecessary trouble, it is forbidden to insert `null` or `undefined` into the container in Js-sdsl, otherwise the error will be thrown.

## ContainerInitError

Container initialization error, which occurs when the container initialization parameters are incorrect.
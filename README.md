# Useful hooks

A collection of useful custom React hooks.

## Hooks included:

### `useLocalStorage`

Similar to `useState`, but persists the value to local storage.

#### Usage

```typescript
const [username, setUsername] = useLocalStorage<string>("username", "Andrew");
```

Here, `setUsername` will also update the value at the key `username` in local storage.

### `useAsync`

Keeps track of the state of an async function call.

#### Usage

```typescript
const { execute, status, result, error } = useAsync<string, string>(someAsyncFuncThatReturnsAString);
```

Here, `execute` is an async function that calls `someAsyncFuncThatReturnsAString`, but also
updates the `status`, `result`, and `error` state variables.

`status` will be `idle` by default, once you call `execute`, it will be `pending` until the async call
of `someAsyncFuncThatReturnsAString` resolves or throws an error. If the call was successful, `status`
will be `success`, if it wasn't, it will be `error`.

Also, note that in `useAsync<string, string>`, the first `string` is the return type 
of `someAsyncFuncThatReturnsAString` when resolved. The second `string` is the type 
of `error`, the one thrown when the async call is not successful.

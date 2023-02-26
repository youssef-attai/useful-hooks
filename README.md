# Useful hooks

A collection of useful custom React hooks.

## Hooks included:

### `useLocalStorage`

Similar to `useState`, but persists the value to local storage.

#### Usage

```typescript
const [username, setUsername] = useLocalStorage<string>("username", "Andrew");

console.log(username); // "Andrew"

setUsername("Bob");

console.log(username); // "Bob"

```

Here, `setUsername` will also update the value at the key `username` in local storage.

### `useAsync`

Keeps track of the state of an async function call.

#### Usage

```typescript
const { execute, status, result, error } = useAsync<string, string>(someAsyncFunc);

return (
    <>
        {status === "idle" && <button onClick={() => {execute("hello world");}}>Click me</button>}
        {status === "pending" && <div>Loading...</div>}
        {status === "success" && <div>{result}</div>}
        {status === "error" && <div>{error}</div>}
    </>
)

```

`execute` is a function that will call `someAsyncFunc` with the given arguments. 

`status` will be one of the following: `idle`, `pending`, `success`, `error`

`result` is the return of `someAsyncFunc`

`error` is the thrown error while executing `someAsyncFunc` (if any)

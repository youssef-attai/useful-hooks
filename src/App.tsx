import { useRef } from "react";
import useAsync from "./useAsync";
import useLocalStorage from "./useLocalStorage";

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

async function getName() {
  await sleep(1000);
  return "Youssef Attai";
}

export default function App() {
  const [name, setName] = useLocalStorage("name", "youssef");
  const { execute, status, result, error } = useAsync<string>(getName);

  const nameInputRef = useRef<HTMLInputElement | null>(null);

  return (
    <>
      {status === "pending" && <div>loading...</div>}
      {status === "error" && <div>Error: {error}</div>}
      <div>Name: {name}</div>
      <input type="text" placeholder="Name" ref={nameInputRef} />
      <button
        onClick={() =>
          nameInputRef.current && setName(nameInputRef.current?.value)
        }
      >
        save name
      </button>
      <button
        onClick={async () => {
          await execute();
          result && setName(result);
        }}
      >
        get name
      </button>
    </>
  );
}

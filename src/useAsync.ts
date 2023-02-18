import { useCallback, useState } from "react";

// T: type of function return
// E: type of error (string message by default)
export default function useAsync<T, E = string>(
  asyncFunction: () => Promise<T>
) {
  const [status, setStatus] = useState<
    "idle" | "pending" | "success" | "error"
  >("idle");
  const [result, setResult] = useState<T | null>(null);
  const [error, setError] = useState<E | null>(null);

  const execute = useCallback(async () => {
    setStatus("pending");
    setResult(null);
    setError(null);

    try {
      const response = await asyncFunction();
      setStatus("success");
      setResult(response);
    } catch (err: any) {
      setStatus("error");
      setError(err);
    }
  }, [asyncFunction]);

  return { execute, result, status, error };
}

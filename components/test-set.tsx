"use client"

import { useSet } from "react-use"

export const SetDemo = () => {
  const [set, { add, has, remove, toggle, reset, clear }] = useSet(
    new Set(["hello"])
  )

  return (
    <div className="col flex-col gap-3">
      <button onClick={() => add(String(Date.now()))}>Add</button>
      <button onClick={() => reset()}>Reset</button>
      <button onClick={() => clear()}>Clear</button>
      <button onClick={() => remove("hello")} disabled={!has("hello")}>
        Remove 'hello'
      </button>
      <button onClick={() => toggle("hello")}>Toggle hello</button>
      <pre>{JSON.stringify(Array.from(set), null, 2)}</pre>
    </div>
  )
}

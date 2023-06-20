import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(4)
  function decrement() {
    setCount(prevcount => prevcount - 1)
  }
  function increment() {
    setCount(prevcount => prevcount + 1)
  }
  function increment2() {
    setCount(prevcount => prevcount + 1)
    setCount(prevcount => prevcount + 1)
  }

  function decrement2()
  {
    setCount(prevcount => prevcount - 1)
    setCount(prevcount => prevcount - 1)
  }
  return (
    <>
    <button onClick={decrement2}>-2</button>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
      <button onClick={increment2}>+2</button>
    </>
  );
}

export default App;

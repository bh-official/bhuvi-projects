import { useState } from "react";

export default function UseStateFunctionalUpdate() {
  const [counter, setCounter] = useState(0);

  function handleClick() {
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    console.log(counter);
  }

  return (
    <div>
      <button onClick={handleClick}>Increment</button>
      <p>Counter: {counter}</p>
    </div>
  );
}

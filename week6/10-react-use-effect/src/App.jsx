import { useState, useEffect } from "react";
import DisplayData from "./component/DisplayData";
import { style, style2 } from "./style";

export default function App() {
  const [count, setCount] = useState(0);

  console.log("Running app", style);

  useEffect(() => {
    console.log("Running use effect");
  }, []);

  return (
    <div style={style2}>
      <button onClick={() => setCount(count + 1)}> Update state </button>
      <DisplayData />
    </div>
  );
}

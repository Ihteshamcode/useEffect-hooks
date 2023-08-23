import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [width, setWidth] = useState(window.screen.width);

  useEffect(
    function () {
      document.title = count;
    },
    [count]
  );

  useEffect(()=>{
    window.addEventListener("resize", currentWidth);
  })
  const currentWidth = ()=>{
    setWidth(()=>window.innerWidth)
  }

  return (
    <>
      <div className="container">
        <button onClick={() => setCount(count + 1)}>Increment</button>{" "}
        <h1>{count}</h1>{" "}
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </div>

      <div className="child">
        <h2>my current screen width is <span>{width}</span></h2>
      </div>
    </>
  );
}

export default App;

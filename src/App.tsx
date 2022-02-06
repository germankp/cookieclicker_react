import Reactm, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <div className="cookieHolder">
        <div
          className="cookie"
          onClick={() => {
            setCount(count + 1);
          }}
        ></div>
        <div className="counter">{count}</div>
      </div>
    </div>
  );
}

export default App;

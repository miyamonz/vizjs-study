import { useState } from "react";
import "./App.css";

import dot from "../graph.dot?raw";
import { RenderDot } from "./RenderDot";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <RenderDot dot={dot} />
      </header>
    </div>
  );
}

export default App;

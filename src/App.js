import { useState } from "react";
import "./App.css";
import Bottom from "./components/Footer";
import Navbar from "./components/NavBar";

function App() {
  const [counter, setCounter] = useState(0);
  const [header, setHeader] = useState("Default header");

  function increment() {
    console.log("counter:", counter);
    setCounter(counter + 1);
  }

  function decrement() {
    setCounter(counter - 1);
    console.log("counter:", counter);
  }

  return (
    <div className="App">
      <Navbar />
      <div>{header}</div>
      <input onChange={(e) => setHeader(e.target.value)} className="input" />
      <div>
        <button onClick={increment}>Increment</button>
        <div className="counter">{counter}</div>
        <button onClick={decrement}>Decrement</button>
      </div>
      <Bottom />
    </div>
  );
}

export default App;

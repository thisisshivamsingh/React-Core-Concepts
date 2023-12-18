import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [state, setState] = useState(0);
  const [timer, setTimer] = useState(null);
  const startTimer = () => {
    // if (timer) {
    //   clearInterval(timer);
    // }
    setTimer(
      setInterval(() => {
        setState((prev) => prev + 1);
      }, 1000)
    );
  };
  const stopTimer = () => {
    clearInterval(timer);
  };
  return (
    <div className="App">
      <h1>{state}</h1>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
    </div>
  );
}

export default App;

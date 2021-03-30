import React from "react";
import "./App.css";
import Pomodoro from "./pomodoro/Pomodoro";

function App() {
  return (
    <div className="App">
      <header className="App-header container">
        <h1>PomoPomo</h1>
      </header>
      <div className="container">
        <Pomodoro />
      </div>
    </div>
  );
}

export default App;

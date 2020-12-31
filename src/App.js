import React from "react";
import Board from "./Board";
import lightsout from "./lights-out.svg"
import "./App.css";

/** Simple app that just shows the LightsOut game. */

function App() {
  return (
      <div className="App">
      <h1>LIGHTS <span>OUT</span><img src={lightsout}></img></h1>
        <Board />
      
      </div>
  );
}

export default App;

import React from "react";

import "./App.css";
import BearCounter from "./components/BearCounter";
import Controls from "./components/Controls";
import Persons from "./components/Persons";

function App() {
  return (
    <div className="App">
      <h2>Hello Bears</h2>
      <BearCounter />
      <Controls />
      <hr />
      <div>Persons</div>
      <Persons />
    </div>
  );
}

export default App;

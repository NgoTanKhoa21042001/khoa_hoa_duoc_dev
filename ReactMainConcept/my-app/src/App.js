import { useState } from "react";
import "./App.css";
import AutoBatching from "./AutoBatching";
import User from "./User";
function App() {
  return (
    <div className="App">
      <User />
      <AutoBatching />
    </div>
  );
}

export default App;

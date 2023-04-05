import { useState } from "react";
import "./App.css";
import AutoBatching from "./AutoBatching";
import Cart from "./Header/Cart";
import Navigation from "./Header/Navigation";
import User from "./User";
function App() {
  return (
    <div className="App">
      <User />
      <AutoBatching />
      <Cart />
      <useUser />
      <Navigation />
    </div>
  );
}

export default App;

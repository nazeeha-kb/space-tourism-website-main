import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

import "./App.css";

function App() {
  return (
    <div className="w-screen overflow-x-hidden">
      <Home />
    </div>
  );
}

export default App;

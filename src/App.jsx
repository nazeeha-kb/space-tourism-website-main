import { useState } from "react";
import Navbar from "./components/Navbar";

import "./App.css";

function App() {
  return (
    <>
      <main className="space-y-0">
        <Navbar/>
        <div>
          So, you want to travel to Space Let’s face it; if you want to go to
          space, you might as well genuinely go to outer space and not hover
          kind of on the edge of it. Well sit back, and relax because we’ll give
          you a truly out of this world experience! Explore
        </div>
      </main>
    </>
  );
}

export default App;

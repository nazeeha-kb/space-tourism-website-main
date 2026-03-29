import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/AppLayout.jsx";
// Pages
import Destination from "./pages/Destination.jsx";
import Crew from "./pages/Crew.jsx";
import Technology from "./pages/Technology.jsx";

import "./App.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/destination", element: <Destination /> },
        { path: "/crew", element: <Crew /> },
        { path: "/technology", element: <Technology /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

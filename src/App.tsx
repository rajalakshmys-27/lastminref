import React from "react";
import Home from "./components/Home";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GitPage from "./pages/git";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  { path: "/git", element: <GitPage /> },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;

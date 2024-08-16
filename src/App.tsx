import React from "react";
import Home from "./pages/homePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages";
import GitPage from "./pages/gitPage";
import CSSPage from "./pages/cssPage";
import JSPage from "./pages/jsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      { path: "/git", element: <GitPage /> },
      { path: "/css", element: <CSSPage /> },
      { path: "/javascript", element: <JSPage /> },
    ],
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;

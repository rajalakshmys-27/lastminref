import React from "react";
import NavBar from "../components/navbar";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <main>
      <NavBar />
      <Outlet />
    </main>
  );
};

export default RootLayout;

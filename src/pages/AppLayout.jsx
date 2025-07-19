import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components";

const AppLayout = () => {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;

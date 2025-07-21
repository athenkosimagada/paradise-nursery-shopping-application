import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components";
import { Provider } from "react-redux";
import store from "@/redux/store";

const AppLayout = () => {
  return (
    <Provider store={store}>
      <div className="relative min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Outlet />
        </main>
      </div>
    </Provider>
  );
};

export default AppLayout;

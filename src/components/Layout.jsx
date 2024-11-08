import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Header from "../components/Header";
import useCookie from "react-use-cookie";

const Layout = () => {
  const [userToken] = useCookie("token");
  if (!userToken) {
    return <Navigate to={"/"} />;
  }
  return (
    <main className=" flex flex-col min-h-screen">
      <Header />
      <Outlet />
    </main>
  );
};

export default Layout;

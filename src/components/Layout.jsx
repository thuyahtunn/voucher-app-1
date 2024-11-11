import React, { useEffect } from "react";
import { json, Navigate, Outlet } from "react-router-dom";
import Header from "../components/Header";
import useCookie from "react-use-cookie";
import useUserDataStore from "../store/useUserDataStore";

const Layout = () => {
  const [userToken] = useCookie("token");
  const [userData] = useCookie("user");
  const { userStore, setUserStore } = useUserDataStore();
  if (!userToken) {
    return <Navigate to={"/"} />;
  }
  const userObj = JSON.parse(userData);
  useEffect(() => {
    setUserStore(userObj);
  }, []);
  return (
    <main className=" flex flex-col min-h-screen">
      <Header />
      <Outlet />
    </main>
  );
};

export default Layout;

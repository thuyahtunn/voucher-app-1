import React from "react";
import { useNavigate } from "react-router-dom";
import { removeCookie } from "react-use-cookie";

const Logout = () => {
  const nav = useNavigate();
  const handleLogout = () => {
    removeCookie("token");
    removeCookie("user");
    nav("/");
  };
  return (
    <div className=" self-end">
      <button
        onClick={handleLogout}
        className=" px-5 py-2 border bg-stone-50 border-blue-600 font-semibold active:ring-1  active:ring-blue-600 text-blue-600 rounded "
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;

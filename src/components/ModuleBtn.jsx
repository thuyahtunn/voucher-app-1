import React from "react";
import { Link } from "react-router-dom";

const ModuleBtn = ({ name, icon, url }) => {
  return (
    <Link className=" bg-blue-500 px-5 py-14 rounded-lg" to={url}>
      <div className=" text-stone-50 flex flex-col justify-center items-center gap-3">
        <div>{icon}</div>
        <h5 className=" font-semibold text-lg">{name}</h5>
      </div>
    </Link>
  );
};

export default ModuleBtn;

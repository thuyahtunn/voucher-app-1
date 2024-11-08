import React from "react";
import { Link } from "react-router-dom";

const BreadCrumb = ({ pageTitle, links }) => {
  return (
    <div className=" w-full flex  gap-1.5 items-center mb-5 text-sm print:hidden">
      <div className=" flex flex-row items-center gap-1.5">
        <Link to={"/"}>
          <p className=" font-semibold text-stone-400">Home</p>
        </Link>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.0}
          stroke="currentColor"
          className="size-4 text-neutral-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </div>

      {links &&
        links.map((link, index) => (
          <div key={index} className=" flex flex-row items-center gap-1.5">
            <Link to={link.pathName}>
              <p className=" font-semibold text-stone-400">
                {link.currentPageTitle}
              </p>
            </Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.0}
              stroke="currentColor"
              className="size-4 text-neutral-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        ))}

      <p className=" font-semibold text-stone-800">{pageTitle}</p>
    </div>
  );
};

export default BreadCrumb;

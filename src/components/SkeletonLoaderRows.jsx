import React from "react";
import SkeletonLoader from "./SkeletonLoader";

const SkeletonLoaderRows = () => {
  const numArr = Array.from({ length: 5 }, (_, index) => index + 1);

  return (
    <>
      {numArr.map((index, num) => (
        <SkeletonLoader key={index} />
      ))}
    </>
  );
};

export default SkeletonLoaderRows;

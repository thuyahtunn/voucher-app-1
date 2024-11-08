import React from "react";

const ProductEditSkeletonLoader = () => {
  return (
    <div className=" flex flex-col gap-3  p-5">
      <h2 className=" font-bold text-2xl text-center">Product Edit Form</h2>
      <p className=" font-medium text-stone-500 w-2/3 text-center mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eum
        ipsum enim maiores. Mollitia aut quae alias ullam quasi fuga!
      </p>
      <form className="flex flex-col gap-3.5 w-2/3 mx-auto font-medium py-3">
        {/* Product Name Skeleton */}
        <div className="flex flex-col gap-2 w-1/2 mx-auto">
          <label className="h-4 w-24 bg-gray-300 animate-pulse rounded-md"></label>
          <div className="h-9 w-full bg-gray-300 animate-pulse rounded-lg"></div>
        </div>

        {/* Product Price Skeleton */}
        <div className="flex flex-col gap-2 w-1/2 mx-auto">
          <label className="h-4 w-24 bg-gray-300 animate-pulse rounded-md"></label>
          <div className="h-9 w-full bg-gray-300 animate-pulse rounded-lg"></div>
        </div>

        {/* Checkboxes Skeleton */}
        <div className="flex items-center justify-between w-1/2 mx-auto">
          <div className="flex items-center gap-1.5">
            <div className="h-4 w-4 bg-gray-300 animate-pulse rounded"></div>
            <label className="h-4 w-20 bg-gray-300 animate-pulse rounded-md"></label>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="h-4 w-4 bg-gray-300 animate-pulse rounded"></div>
            <label className="h-4 w-28 bg-gray-300 animate-pulse rounded-md"></label>
          </div>
        </div>

        {/* Button Skeleton */}
        <div className="flex justify-center items-center w-1/2 mx-auto mt-2">
          <div className="h-10 w-full bg-gray-300 animate-pulse rounded-full"></div>
        </div>
      </form>
    </div>
  );
};

export default ProductEditSkeletonLoader;

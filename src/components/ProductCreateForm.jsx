import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { bouncy } from "ldrs";
import { useNavigate } from "react-router-dom";
import { apiUrl } from "../api/constant";
import reactUseCookie from "react-use-cookie";

const ProductCreateForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [sending, setSending] = useState(false);
  const nav = useNavigate();
  const [userToken] = reactUseCookie("token");

  const handleForm = async (data) => {
    setSending(true);
    const res = await fetch(`${apiUrl}/products`, {
      method: "POST",
      body: JSON.stringify({
        product_name: data.product_name,
        price: data.product_price,
      }),
      headers: {
        "Content-Type": "application/json",

        Authorization: `Bearer ${userToken}`,
      },
    });
    console.log(res);

    reset();
    if (data.back_to_product) {
      nav(`/dashboard/product`);
    }
    setSending(false);
  };
  bouncy.register();

  return (
    <div className=" flex flex-col gap-3  p-5">
      <h2 className=" font-bold text-2xl text-center">Create New Product</h2>
      <p className=" font-medium text-stone-500 w-2/3 text-center mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eum
        ipsum enim maiores. Mollitia aut quae alias ullam quasi fuga!
      </p>
      <form
        onSubmit={handleSubmit(handleForm)}
        className=" flex flex-col  gap-3.5 w-2/3 mx-auto font-medium py-3"
      >
        <div className=" flex flex-col  gap-2 w-1/2 mx-auto">
          <label
            htmlFor="product_name"
            className={`text-sm  font-semibold ${
              errors.product_name ? "text-red-500" : "text-stone-700"
            }`}
          >
            Product Name
          </label>
          <input
            {...register("product_name", {
              required: true,
              minLength: 3,
              maxLength: 40,
            })}
            type="text"
            id="product_name"
            className={`border focus-visible:outline-none ring-1 px-3 py-1.5 rounded-lg text-sm   w-full bg-stone-50 ${
              errors.product_name
                ? "border-red-500 ring-red-500 focus:border-red-500 focus:ring-red-500"
                : "border-stone-500 ring-stone-500 focus:border-stone-500 focus:ring-stone-500"
            }`}
          />

          {errors.product_name?.type === "required" && (
            <p className=" text-start text-xs text-red-500 font-medium">
              Product Name Required
            </p>
          )}
          {errors.product_name?.type === "minLength" && (
            <p className=" text-start text-xs text-red-500 font-medium">
              Product Name must 3 characters at least
            </p>
          )}
          {errors.product_name?.type === "maxLength" && (
            <p className=" text-start text-xs text-red-500 font-medium">
              Product Name must 10 characters maximum
            </p>
          )}
        </div>

        <div className=" flex flex-col  gap-2 w-1/2 mx-auto">
          <label
            htmlFor="product_price"
            className={`text-sm  font-semibold ${
              errors.product_price ? "text-red-500" : "text-stone-700"
            }`}
          >
            Product Price
          </label>
          <input
            {...register("product_price", {
              required: true,
              min: 100,
            })}
            type="number"
            id="product_price"
            className={`border focus-visible:outline-none ring-1 px-3 py-1.5 rounded-lg text-sm   w-full bg-stone-50 ${
              errors.product_price
                ? "border-red-500 ring-red-500 focus:border-red-500 focus:ring-red-500"
                : "border-stone-500 ring-stone-500 focus:border-stone-500 focus:ring-stone-500"
            }`}
          />
          {errors.product_price?.type === "required" && (
            <p className=" text-start text-xs text-red-500 font-medium">
              Product Name Required
            </p>
          )}
          {errors.product_price?.type === "min" && (
            <p className=" text-start text-xs text-red-500 font-medium">
              Product Price must greater than 100 at least
            </p>
          )}
        </div>

        <div className=" flex items-center justify-between w-1/2 mx-auto ">
          <div className=" flex items-center gap-1.5">
            <input
              {...register("all_correct", {
                required: true,
              })}
              type="checkbox"
              id="all_correct"
              className=" accent-stone-700 size-4"
            />
            <label
              htmlFor="all_correct"
              className="text-sm text-stone-700 font-semibold select-none"
            >
              Make Sure
            </label>
          </div>
          <div className="flex items-center gap-1.5">
            <input
              type="checkbox"
              {...register("back_to_product")}
              id="back_to_product"
              className=" accent-stone-700 size-4"
            />
            <label
              htmlFor="back_to_product"
              className="text-sm text-stone-700 font-semibold select-none"
            >
              Back To Product
            </label>
          </div>
        </div>
        {errors.all_correct?.type === "required" && (
          <p className=" text-start text-xs text-red-500 font-medium w-1/2 mx-auto -m-2">
            Required Make Sure
          </p>
        )}

        <button className=" border flex justify-center items-center gap-3 border-stone-800 hover:bg-stone-700 active:bg-stone-600 duration-200 bg-stone-800 text-stone-50 rounded-full py-1.5 w-1/2 mx-auto  mt-2">
          Create Product{" "}
          {sending && (
            <l-bouncy size="20" speed="1.75" color="white"></l-bouncy>
          )}
        </button>
      </form>
    </div>
  );
};

export default ProductCreateForm;

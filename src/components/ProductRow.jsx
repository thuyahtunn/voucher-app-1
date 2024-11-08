import React, { useState } from "react";
import { HiPencil, HiTrash } from "react-icons/hi";
import { useSWRConfig } from "swr";
import { dotSpinner } from "ldrs";
import { useNavigate } from "react-router-dom";
import ShowDate from "./ShowDate.jsx";

const ProductRow = ({ product: { id, product_name, price, created_at } }) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const nav = useNavigate();
  //create_at
  const date = new Date(created_at);
  const dateOptions = { year: "numeric", month: "short", day: "numeric" };
  const createDate = date.toLocaleDateString("en-GB", dateOptions);
  const timeOptions = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };
  const createTime = date.toLocaleTimeString("en-GB", timeOptions);

  //ldrs need
  dotSpinner.register();

  //actions -> delete , edit
  const apiUrl = import.meta.env.VITE_API_URL;
  const { mutate } = useSWRConfig();
  const handleDelBtn = async () => {
    setIsDeleting(true);
    await fetch(`${apiUrl}/products/${id}`, {
      method: "DELETE",
    });
    mutate(`${apiUrl}/products`);
    setIsDeleting(false);
  };
  const handleEditBtn = () => {
    nav(`/product/edit/${id}`);
  };
  return (
    <tr className="bg-white border-b font-medium">
      <td className="px-6 py-4">{id}</td>
      <th scope="row" className="px-6 py-4 text-gray-700 whitespace-nowrap ">
        {product_name}
      </th>
      <td className="px-6 py-4 text-end">{price}</td>
      <ShowDate timestamp={created_at} time={true} />
      <td className="px-6 py-4  text-end ">
        <div className=" flex justify-end items-center space-x-1">
          <button
            onClick={handleEditBtn}
            className=" size-9 flex justify-center items-center border border-stone-300 shadow hover:bg-gray-100 duration-200"
          >
            {isEditing ? (
              <l-dot-spinner
                size="20"
                speed="0.8"
                color="black"
              ></l-dot-spinner>
            ) : (
              <HiPencil className=" size-5" />
            )}
          </button>
          <button
            onClick={handleDelBtn}
            className="size-9 flex justify-center items-center border border-stone-300 hover:border-red-300 shadow hover:bg-red-100 duration-200"
          >
            {!isDeleting ? (
              <HiTrash className=" size-5 text-red-500" />
            ) : (
              <l-dot-spinner size="20" speed="0.8" color="red"></l-dot-spinner>
            )}
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ProductRow;

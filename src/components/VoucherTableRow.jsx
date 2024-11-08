import React, { useState } from "react";
import { HiArrowRight, HiPencil, HiTrash } from "react-icons/hi";
import { dotSpinner } from "ldrs";
import { Link } from "react-router-dom";
import ShowDate from "./ShowDate";
import { useSWRConfig } from "swr";
// import useVoucherStore from "../store/useVoucherStore";

const VoucherTableRow = ({
  voucher: { invoice_id, customer_name, customer_email, sale_date, id },
}) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const { mutate } = useSWRConfig();
  dotSpinner.register();

  // const { deleteVoucher } = useVoucherStore();
  const apiUrl = import.meta.env.VITE_API_URL;

  const handleDelBtn = async () => {
    setIsDeleting(true);
    await fetch(`${apiUrl}/vouchers/${id}`, {
      method: "DELETE",
    });
    mutate(`${apiUrl}/vouchers`);
    setIsDeleting(false);
  };
  return (
    <tr className="bg-white border-b font-medium">
      <td className="px-6 py-4 text-start">{invoice_id}</td>
      <th scope="row" className="px-6 py-4 text-gray-700 whitespace-nowrap ">
        {customer_name}
      </th>
      <td className="px-6 py-4 text-start">{customer_email}</td>
      <ShowDate timestamp={sale_date} />
      <td className="px-6 py-4  text-end ">
        <div className=" flex justify-end items-center ">
          <Link
            to={`/voucher/detail/${id}`}
            className="size-9 flex justify-center items-center border border-stone-300 hover:border-red-300 shadow hover:bg-red-100 duration-200"
          >
            <HiArrowRight className=" size-5 " />
          </Link>
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

export default VoucherTableRow;
// import { dotSpinner } from 'ldrs'

// // Default values shown
// <l-dot-spinner
//   size="40"
//   speed="0.9"
//   color="black"
// ></l-dot-spinner>

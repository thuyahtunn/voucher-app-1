import React from "react";
import useSaleRecordStore from "../store/useSaleRecordStore";
import { HiMinus, HiPlus } from "react-icons/hi";

const SaleTableRow = ({
  record: {
    id,
    price,
    quantity,
    cost,
    currentProduct: { product_name },
  },
  index,
}) => {
  const { deleteRecord, updateRecord } = useSaleRecordStore();
  const handleDelBtn = () => {
    deleteRecord(id);
  };
  const addQuantityBtn = () => {
    updateRecord(id, 1);
  };
  const subQuantityBtn = () => {
    quantity > 1 && updateRecord(id, -1);
  };
  return (
    <tr className="bg-white border-b font-medium">
      <td className="px-6 py-3">{index + 1}</td>
      <th scope="row" className="px-6 py-3 text-gray-700 whitespace-nowrap ">
        {product_name}
      </th>
      <td className="px-6 py-3 text-end">{price}</td>
      <td className="px-6 py-3 text-end ">
        <div className=" flex justify-end items-center gap-3">
          <button
            onClick={subQuantityBtn}
            className=" size-6 border-2 border-stone-200 flex justify-center items-center rounded-full hover:bg-stone-200 duration-200"
          >
            <HiMinus className=" size-3" />
          </button>
          {quantity}
          <button
            onClick={addQuantityBtn}
            className=" size-6 flex justify-center border-2 border-stone-200 items-center rounded-full hover:bg-stone-200 duration-200"
          >
            <HiPlus className=" size-3" />
          </button>
        </div>
      </td>
      <td className="px-6 py-3 text-end ">{cost}</td>
      <td className="px-6 py-3  flex justify-end">
        <button
          onClick={handleDelBtn}
          className="size-9 flex justify-center items-center border border-stone-300 hover:border-red-300 shadow hover:bg-red-100 duration-200"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth={0}
            viewBox="0 0 20 20"
            aria-hidden="true"
            className=" size-5 text-red-500"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </td>
    </tr>
  );
};

export default SaleTableRow;

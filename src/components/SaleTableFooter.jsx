import React from "react";
import useSaleRecordStore from "../store/useSaleRecordStore";

const SaleTableFooter = () => {
  const { records } = useSaleRecordStore();
  const total = records.reduce((pv, cv) => pv + cv.cost, 0);
  const tax = total * 0.05;
  const netTotal = total + tax;
  return (
    <>
      <tr className="bg-white border-b font-medium">
        <th
          colSpan={4}
          className="px-6 py-3 text-gray-700 whitespace-nowrap text-end"
        >
          Total
        </th>

        <td className="px-6 py-3 text-end">{total.toFixed(0)}</td>
        <td className="px-6 py-3 text-end"></td>
      </tr>
      <tr className="bg-white border-b font-medium">
        <th
          colSpan={4}
          className="px-6 py-3 text-gray-700 whitespace-nowrap text-end"
        >
          Tax ( 5 % )
        </th>

        <td className="px-6 py-3 text-end">{tax.toFixed(0)}</td>
        <td className="px-6 py-3 text-end"></td>
      </tr>
      <tr className="bg-white border-b font-medium">
        <th
          colSpan={4}
          className="px-6 py-3 text-gray-700 whitespace-nowrap text-end"
        >
          Net Total
        </th>

        <td className="px-6 py-3 text-end">{netTotal.toFixed(0)}</td>
        <td className="px-6 py-3 text-end"></td>
      </tr>
    </>
  );
};

export default SaleTableFooter;

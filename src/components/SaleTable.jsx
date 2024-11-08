import React from "react";
import SaleTableRow from "./SaleTableRow";
import useSaleRecordStore from "../store/useSaleRecordStore";
import SaleTableFooter from "./SaleTableFooter";
import EmptyProduct from "./EmptyProduct";

const SaleTable = () => {
  const { records } = useSaleRecordStore();
  return (
    <div className="relative overflow-x-auto border  shadow-md rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-700 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-b-2">
          <tr>
            <th scope="col" className="px-6 py-3">
              #
            </th>
            <th scope="col" className="px-6 py-3">
              Product name
            </th>
            <th scope="col" className="px-6 py-3 text-end">
              Price (MMK)
            </th>
            <th scope="col" className="px-6 py-3 text-end">
              Quantity
            </th>
            <th scope="col" className="px-6 py-3 text-end">
              Cost
            </th>
            <th scope="col" className="px-6 py-3 text-end"></th>
          </tr>
        </thead>
        <tbody>
          {records.map((record, index) => (
            <SaleTableRow key={index} record={record} index={index} />
          ))}
        </tbody>
        <tfoot>
          {records.length === 0 && <EmptyProduct />}
          {records.length > 0 && <SaleTableFooter />}
        </tfoot>
      </table>
    </div>
  );
};

export default SaleTable;

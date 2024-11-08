import React, { useRef, useState } from "react";
import VoucherTableRow from "./VoucherTableRow";
import useSWR from "swr";
import { HiSearch, HiX } from "react-icons/hi";
import { apiUrl } from "../api/constant";
import { debounce } from "lodash";

const VoucherTable = () => {
  const fetcher = (...url) => fetch(...url).then((res) => res.json());
  const [search, setSearch] = useState("");
  const searchRef = useRef("");
  const { isLoading, data, error } = useSWR(
    search
      ? `${apiUrl}/vouchers?invoice_id_like=${search}`
      : `${apiUrl}/vouchers`,
    fetcher
  );
  const handleSearchOnChange = debounce((event) => {
    setSearch(event.target.value);
  }, 500);

  const handleClearSearch = () => {
    searchRef.current.value = "";
    setSearch("");
  };

  return (
    <div className="relative overflow-x-auto border  shadow-md rounded-lg">
      <div className=" w-full flex justify-start items-center py-3.5 px-5">
        <div className="relative w-1/3">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none pt-0.5">
            <HiSearch className=" w-4 h-4 text-gray-400" />
          </div>
          <input
            type="text"
            id="input-group-1"
            ref={searchRef}
            onChange={handleSearchOnChange}
            className="bg-gray-50 border border-gray-300 font-medium text-gray-900 text-sm rounded-lg w-full ps-10 p-2.5  "
            placeholder="Search"
          />
          {search && (
            <button
              onClick={handleClearSearch}
              className=" absolute right-2 top-0 bottom-0 flex items-center  "
            >
              <HiX className=" w-4 h-4 text-gray-400" />
            </button>
          )}
        </div>
      </div>
      <table className="w-full text-sm text-left rtl:text-right text-gray-700 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
          <tr>
            <th scope="col" className="px-6 py-3 text-start">
              # Voucher ID
            </th>
            <th scope="col" className="px-6 py-3 text-start">
              Customer Name
            </th>
            <th scope="col" className="px-6 py-3 text-start">
              Email
            </th>
            <th scope="col" className="px-6 py-3 text-end">
              CREATED AT
            </th>
            <th scope="col" className="px-6 py-3 text-end">
              ACTION
            </th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <tr className="bg-white border-b font-medium">
              <td colSpan={5} className="px-6 py-4 text-center">
                Loading...
              </td>
            </tr>
          ) : (
            data.map((voucher, index) => (
              <VoucherTableRow key={index} voucher={voucher} />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default VoucherTable;

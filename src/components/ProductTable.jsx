import React, { useRef, useState } from "react";
import EmptyProduct from "./EmptyProduct";
import ProductRow from "./ProductRow";
import SkeletonLoaderRows from "./SkeletonLoaderRows";
import useSWR from "swr";
import { HiPlus, HiSearch, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import { apiUrl } from "../api/constant";
import { debounce } from "lodash";
import reactUseCookie from "react-use-cookie";

const ProductTable = () => {
  const [userToken] = reactUseCookie("token");
  const fetcher = (args) =>
    fetch(args, {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    }).then((res) => res.json());
  const [search, setSearch] = useState("");
  const searchRef = useRef("");
  const handleSearchOnChange = debounce((event) => {
    setSearch(event.target.value);
  }, 500);

  const { data, error, isLoading } = useSWR(
    search
      ? `${apiUrl}/products?product_name_like=${search}`
      : `${apiUrl}/products`,
    fetcher
  );

  const handleClearSearch = () => {
    searchRef.current.value = "";
    setSearch("");
  };

  return (
    <div className=" p-5 border rounded-xl shadow">
      <div className=" w-full flex justify-between items-center mb-3">
        <div className="relative w-1/3">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none pt-0.5">
            <HiSearch className=" w-4 h-4 text-gray-400" />
          </div>
          <input
            type="text"
            id="input-group-1"
            onChange={handleSearchOnChange}
            ref={searchRef}
            className="bg-gray-50 border border-gray-300 font-medium text-gray-900 text-sm rounded-lg w-full ps-10 p-2.5  "
            placeholder="Search"
          />
          {search && (
            <button
              onClick={handleClearSearch}
              className=" absolute flex items-center right-2 top-0 bottom-0"
            >
              <HiX className=" size-4 text-gray-400" />
            </button>
          )}
        </div>
        <Link
          to={"/dashboard/product/create"}
          className=" flex justify-center items-center py-2.5 px-6 bg-stone-700 text-gray-50 text-sm rounded-lg font-medium  gap-2 border border-stone-700"
        >
          Add New Product
          <HiPlus className=" font-bold size-4" />
        </Link>
      </div>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-700 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
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
                CREATED AT
              </th>
              <th scope="col" className="px-6 py-3 text-end">
                ACTION
              </th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <SkeletonLoaderRows />
            ) : (
              <>
                {data.data.length === 0 ? (
                  <EmptyProduct />
                ) : (
                  data.data.map((product, index) => (
                    <ProductRow
                      key={product.id}
                      index={index}
                      product={product}
                    />
                  ))
                )}
              </>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductTable;

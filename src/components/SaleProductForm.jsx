import React from "react";
import { useForm } from "react-hook-form";
import useSWR from "swr";
import useSaleRecordStore from "../store/useSaleRecordStore";

const SaleProductForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { records, addRecord, updateRecord } = useSaleRecordStore();
  const fetcher = (...url) => fetch(...url).then((res) => res.json());
  const apiUrl = import.meta.env.VITE_API_URL;
  const { data, isLoading, error } = useSWR(`${apiUrl}/products`, fetcher);

  const handleSaleForm = (formData) => {
    const { product_select, sale_quantity } = formData;
    if (product_select) {
      const currentProduct = data.find(
        (product) => product.id === parseInt(product_select)
      );
      const isExistedRecord = records.find(
        (record) => record.currentProduct.id === parseInt(product_select)
      );
      if (!isExistedRecord) {
        const newRecord = {
          id: Date.now(),
          currentProduct: currentProduct,
          price: currentProduct.price,
          quantity: sale_quantity,
          cost: sale_quantity * currentProduct.price,
        };
        addRecord(newRecord);
      } else {
        updateRecord(isExistedRecord.id, sale_quantity);
      }

      reset();
    } else {
      console.log("select a product");
    }
  };

  return (
    <section className=" p-3 border shadow-sm rounded-lg">
      <form onSubmit={handleSubmit(handleSaleForm)}>
        <div className=" grid grid-cols-3 md:grid-cols-5 items-center gap-4 md:gap-8">
          <div className=" col-span-1 md:col-span-2 flex flex-col gap-1">
            <label className=" font-medium text-sm">Select Your Product</label>
            <select
              {...register("product_select")}
              className=" border-2 border-stone-400 bg-stone-50 px-3 py-2 rounded  text-sm font-medium"
            >
              <option value="">Select a Product</option>
              {!isLoading &&
                data.map((product, index) => (
                  <option key={index} value={product.id}>
                    {product.product_name}
                  </option>
                ))}
            </select>
          </div>
          <div className=" col-span-1 md:col-span-2 flex flex-col gap-1">
            <label htmlFor="sale_quantity" className="font-medium text-sm">
              Quantity
            </label>
            <input
              type="text"
              id="sale_quantity"
              {...register("sale_quantity")}
              className={`border-2   px-3 py-2 rounded bg-stone-50 text-sm font-medium ${
                !errors.sale_quantity
                  ? "border-stone-400 focus:ring-stone-600"
                  : "border-red-400 focus:ring-red-600"
              }`}
            />
          </div>

          <button
            type="submit"
            className=" col-span-1 h-full text-sm hover:bg-stone-600 duration-200 hover:text-stone-50 flex justify-center items-center rounded border-2 border-stone-600 bg-stone-50 text-stone-800"
          >
            Add Product
          </button>
        </div>
      </form>
    </section>
  );
};

export default SaleProductForm;

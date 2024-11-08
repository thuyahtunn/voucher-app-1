import React from "react";
import SaleProductForm from "./SaleProductForm";
import SaleTable from "./SaleTable";

const SaleProductFormAndTable = () => {
  return (
    <section className=" flex flex-col gap-2 col-span-2">
      <SaleProductForm />
      <SaleTable />
    </section>
  );
};

export default SaleProductFormAndTable;

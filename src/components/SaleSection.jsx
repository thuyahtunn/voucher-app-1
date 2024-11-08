import React from "react";
import SaleInfo from "./SaleInfo";

import SaleProductFormAndTable from "./SaleProductFormAndTable";

const SaleSection = () => {
  return (
    <section className=" gap-2 grid grid-cols-3 pb-3">
      <SaleProductFormAndTable />
      <SaleInfo />
    </section>
  );
};

export default SaleSection;

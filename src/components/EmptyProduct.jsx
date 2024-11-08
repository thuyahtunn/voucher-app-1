import React from "react";

const EmptyProduct = () => {
  return (
    <tr className="bg-white border-b font-semibold text-stone-700">
      <td colSpan={5} className="px-6 py-4 text-center">
        There is no products...
      </td>
    </tr>
  );
};

export default EmptyProduct;

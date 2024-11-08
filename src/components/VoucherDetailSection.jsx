import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { apiUrl } from "../api/constant";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const VoucherDetailSection = () => {
  const { id } = useParams();
  const fetcher = (...url) => fetch(...url).then((res) => res.json());

  const { isLoading, data, error } = useSWR(
    `${apiUrl}/vouchers/${id}`,
    fetcher
  );
  const {
    invoice_id,
    customer_name,
    total,
    netTotal,
    tax,
    records,
    sale_date,
  } = data || {};

  const handlePrintBtn = () => {
    window.print();
  };
  const printRef = useRef();

  // const handleDownloadPdf = () => {
  //   const input = printRef.current;
  //   html2canvas(input, { scale: 2 }).then((canvas) => {
  //     const imgData = canvas.toDataURL("image/png");
  //     const pdf = new jsPDF("p", "mm", "a4");
  //     const imgWidth = 170; // A4 width in mm
  //     const pageHeight = pdf.internal.pageSize.height;
  //     const imgHeight = (canvas.height * imgWidth) / canvas.width;
  //     let heightLeft = imgHeight;

  //     let position = 0;

  //     pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
  //     heightLeft -= pageHeight;

  //     while (heightLeft >= 0) {
  //       position = heightLeft - imgHeight;
  //       pdf.addPage();
  //       pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
  //       heightLeft -= pageHeight;
  //     }

  //     pdf.save("invoice.pdf");
  //   });
  // };

  return (
    <section>
      {!data ? (
        <p>Loading...</p>
      ) : (
        <div
          ref={printRef}
          className="flex flex-col gap-5 border-b border-stone-500  mb-5 print:pt-5"
        >
          <div className=" flex justify-between items-center">
            <div className="flex flex-col">
              <h1 className=" font-bold text-2xl uppercase">Invoice</h1>
              <h3 className=" font-semibold text-lg uppercase text-stone-700">
                {invoice_id}
              </h3>
            </div>
            <div className=" flex flex-col text-base font-semibold">
              <h5 className="  font-bold">Invoice to</h5>
              <p className=" text-stone-500">{customer_name}</p>
              <p className=" text-stone-500">Date: {sale_date}</p>
            </div>
          </div>
          <table className=" w-full text-sm ">
            <thead>
              <tr className=" font-bold border-b border-stone-700">
                <th className=" py-2 text-start">No</th>
                <th className=" py-2 text-start">Description</th>
                <th className=" py-2 text-end">Price</th>
                <th className=" py-2 text-end">Qty</th>
                <th className=" py-2 text-end">Cost</th>
              </tr>
            </thead>
            <tbody>
              {records.map((record, index) => (
                <tr
                  key={index}
                  className=" font-semibold text-stone-800 border-b border-stone-300"
                >
                  <td className=" py-2 text-start">{index + 1}</td>
                  <td className=" py-2 text-start">
                    {record.currentProduct.product_name}
                  </td>
                  <td className=" py-2 text-end">{record.price}</td>
                  <td className=" py-2 text-end">{record.quantity}</td>
                  <td className=" py-2 text-end">{record.cost}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className=" font-bold text-stone-800 border-b border-stone-300">
                <td colSpan={4} className=" py-2 text-end">
                  Total
                </td>
                <td className=" py-2 text-end">{total.toFixed(0)}</td>
              </tr>
              <tr className=" font-bold text-stone-800 border-b border-stone-300">
                <td colSpan={4} className=" py-2 text-end">
                  Tax
                </td>
                <td className=" py-2 text-end">{tax.toFixed(0)}</td>
              </tr>
              <tr className=" font-bold text-stone-800 border-b border-stone-300">
                <td colSpan={4} className=" py-2 text-end">
                  Net Total
                </td>
                <td className=" py-2 text-end">{netTotal.toFixed(0)}</td>
              </tr>
            </tfoot>
          </table>
          <div className=" flex justify-between items-center">
            <div>
              <h5 className=" font-bold text-stone-900 ">
                Payment Transfer To
              </h5>
              <p className=" font-semibold text-stone-600">
                Kpay,Wave : 09250152018
              </p>
              <p className=" font-semibold text-stone-600">
                KBZ Bank : 2354352352353244
              </p>
              <p className=" font-semibold text-stone-600">
                AYA Bank : 325235242342
              </p>
            </div>
            <div>
              <h3 className=" font-bold uppercase text-stone-900 text-xl">
                MMS IT
              </h3>
              <p className=" font-semibold text-stone-600">
                48, 1st Floor, Shan Kone St.
              </p>
              <p className=" font-semibold text-stone-600">+959-250-152-018</p>
              <p className=" font-semibold text-stone-600">
                enquiry@mms-it.com
              </p>
            </div>
          </div>
          <h6 className=" font-semibold text-stone-700 text-center ">
            Thanks For Buying Us
          </h6>
        </div>
      )}

      <div className=" flex justify-between items-center font-semibold text-sm print:hidden">
        <button className=" px-4 py-2 border-2 border-stone-700 bg-stone-50 text-stone-900 rounded ">
          Download PDF
        </button>
        <button
          onClick={handlePrintBtn}
          className=" px-4 py-2 border-2 border-stone-700 bg-stone-700 text-stone-50 rounded "
        >
          Print
        </button>
      </div>
    </section>
  );
};

export default VoucherDetailSection;

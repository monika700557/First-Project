import React from "react";

const InvoiceDetailsPage = () => {
  return (
    <div className=" relative bg-white w-[85%] m-auto shadow-md h-[1254px] border-0">
      <div className="bg-white p-6 rounded-md border p border-b-gray-200  flex flex-row  justify-between">
        <div>
          <div className="text-3xl  font-bold text-blue-600">Tiara</div>

          <h2 className="text-[28px] font-bold mt-2">INVOICE</h2>
          <p className="text-lg font-semibold">Invoice Number: In983248782</p>
        </div>

        <div className="flex flex-col justify-end  items-end">
          <h3 className="text-xl font-bold">Invoice From</h3>
          <p className="font-bold text-md">Company Name</p>
          <p className="font-semibold text-sm">9087424882</p>
          <p className="font-semibold text-sm">
            Address line 1, Address line 2
          </p>
          <p className="font-semibold text-sm">Zip code, City, Country</p>
        </div>
      </div>

      <div className="bg-white mt-4 p-6 rounded-md  flex   flex-row justify-between">
        <div>
          <h3 className="text-xl font-bold">Billed to</h3>
          <p className="font-bold text-md mt-2">Customer Name</p>

          <p className="font-semibold text-sm mt-2">9087424882</p>
          <p className="font-semibold text-sm">
            Address line 1, Address line 2
          </p>
          <p className="font-semibold text-sm">Zip code, City, Country</p>
        </div>

        <div className="flex flex-col justify-end  items-end">
          <h3 className="text-xl font-bold">Payment Details</h3>
          <br />
          <p className="font-semibold text-sm">Debit Card</p>
          <p className="font-semibold text-sm">XXXXXXXXXXXX2541</p>
          <p className="font-semibold text-sm">HDFC Bank</p>
          <span className="p-4 bg-[#F7F7FF] mt-2 ml-[-4px]">
            <p>Recurring: 15 Months</p>
            <p>PO Number: 54815454</p>
          </span>
        </div>
      </div>

      <div className="bg-[#7638FF] text-white mt-4 p-6 h-[10vh] w-[96%]   align-middle py-4  m-auto rounded-md  items-center flex justify-between">
        <p className="font-semibold text-center ml-24">
          Issue Date: 27 Jul 2022
        </p>
        <p className="font-semibold text-center">Due Date: 27 Aug 2022</p>
        <p className="font-semibold text-center mr-24">Due Amount: ₹1,54,922</p>
      </div>

      <div className="bg-white mt-4 p-6 rounded-md ">
        <table className="w-full table-auto">
          <thead className="bg-[#F7F7FF] h-[6vh] ">
            <tr className="text-left">
              <th className="border-b-2 pb-2 p-4">Description</th>
              <th className="border-b-2 pb-2">Category</th>
              <th className="border-b-2 pb-2">Rate/Item</th>
              <th className="border-b-2 pb-2">Quantity</th>
              <th className="border-b-2 pb-2">Discount (%)</th>
              <th className="border-b-2 pb-2 justify-end text-end p-4">
                Amount
              </th>
            </tr>
          </thead>
          <tbody className="p-4">
            <tr className="border border-b-gray-200 pb-2 p-4 font-semibold  text-sm">
              <td className="p-4">Dell Laptop</td>
              <td>Laptop</td>
              <td>$1100</td>
              <td>2</td>
              <td>2%</td>
              <td className="text-end pr-3">$400</td>
            </tr>
            <tr className="border border-b-gray-200 pb-2 p-4 font-semibold">
              <td className="p-4">HP Laptop</td>
              <td>Laptop</td>
              <td>$1500</td>
              <td>3</td>
              <td>6%</td>
              <td className="text-end pr-3">$3000</td>
            </tr>
            <tr className="border border-b-gray-200 pb-2 p-4 font-semibold">
              <td className="p-4 ">Apple Ipad</td>
              <td>Ipad</td>
              <td>$11500</td>
              <td>1</td>
              <td>10%</td>
              <td className="text-end pr-3">$11000</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-white mt-4 p-6 rounded-md   justify-between flex flex-row  ">
      <div>
  <span className="block mb-8">
    <h3 className="font-semibold text-xl">Notes</h3>
    <p className="font-semibold text-gray-400">Enter customer notes or any other details</p>
  </span>

  <span className="block">
    <h3 className="font-semibold text-xl">Terms and Conditions</h3>
    <p className="font-semibold text-gray-400">Enter customer notes or any other details</p>
  </span>
</div>

        <div className="text-right p-4 w-[45%] border border-gray-200 justify-end items-center">
          <div className="border-b border-gray-200 ">
            <p className="text-md flex flex-row justify-between font-semibold text-sm  mb-4 ">
              {" "}
              Taxable<span>$6,660.00</span>
            </p>
            <p className="text-md text-md flex flex-row justify-between  font-semibold text-sm mb-4  ">
              Additional Charges <span>$6,660.00</span>
            </p>
            <p className="text-md text-md flex flex-row justify-between  font-semibold text-sm mb-4 ">
              Discount <span>$6,660.00</span>
            </p>
            <p className="text-md text-md flex flex-row justify-between   font-semibold text-sm  mb-4">
              Sub Total <span>$6,660.00</span>
            </p>
          </div>

          <p className="font-semibold mt-4 text-xl text-[#7638FF] text-md flex flex-row justify-between ">
            Total Amount <span>$143,300.00</span>
          </p>
          <p className="font-bold text-xl text-blue-600"></p>
        </div>
      </div>

      <div className="mt-4 flex flex-col justify-end text-end items-end  pr-4">
        <img
          src="https://kanakku.dreamstechnologies.com/html/template-materializecss/assets/img/signature.png"
          className=" h-[7vh] w-[10rem]"
        />
        <p className="font-medium text-base">Harristemp</p>
      </div>
    </div>
  );
};

export default InvoiceDetailsPage;

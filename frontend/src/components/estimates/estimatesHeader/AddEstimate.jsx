import React from "react";
import Sidebar from "../../../components/dashboard/sidebar/Sidebar";
import { useNavigate } from "react-router-dom";
import EstimateHeader from "./EstimateHeader";
import {CirclePlus} from "lucide-react";
import {CircleMinus} from "lucide-react";


const AddEstimate = () => {
  const navigate = useNavigate();

  return (
    <Sidebar>
      <div className="mt-[20px] p-[1rem]">
        <EstimateHeader />
      </div>

      <div className="p-6 bg-white   rounded-lg">
        <div className="flex flex-wrap gap-4">
          <div className="flex-1 min-w-[300px]">
            <div className="md:col-span-2">
              <label className="block text-gray-700 mb-1">Customer:</label>
              <select className="w-full p-2 border border-gray-300 rounded">
                <option>Select Customer</option>
                <option>Select Customer</option>
                <option>Select Customer</option>
                <option>Select Customer</option>
                <option>Select Customer</option>
                <option>Select Customer</option>

              </select>
            </div>
          </div>

          <div className="flex-1 min-w-[300px]">
            <div>
              <label className="block text-gray-700 mb-1">From:</label>
              <input
                type="date"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
          </div>
          <div className="flex-1 min-w-[300px]">
            <div>
              <label className="block text-gray-700 mb-1">To:</label>
              <input
                type="date"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 justify-center p-6 mt-7">
          <div className="w-[480px] ml-[1rem]">
            <label className="mb-2 flex flex-col">Estimate Number:</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="w-[480px] ml-[22rem] flex flex-col ">
            <label className="mb-2 flex flex-col">Ref Number:</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
        </div>

        
        <div className="w-full">
          <table className="w-full table-auto  border-collapse">
            <thead className="border-b border-gray-300 ">
              <tr className=" text-gray-700 text-left">
                <th className="p-2">Items</th>
                <th className="p-2 ">Quantity</th>
                <th className="p-2 ">Price</th>
                <th className="p-2 ">Amount</th>
                <th className="p-2">Actions</th>
              </tr>
            </thead>

            <tbody className="p-6 mt-6">
              <tr className="mt-4 border-b border-gray-300 hover:bg-[#f7f8f9] transition-colors duration-200">
                <td className="p-4">
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300"
                  />
                </td>
                <td className="p-4 ">
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300"
                  />
                </td>
                <td className="p-4 ">
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 "
                  />
                </td>
                <td className="p-4 ">
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 bg-[#dee2e6]"
                  />
                </td>
                <td className="p-4 flex justify-end items-center gap-1 ">
  <CirclePlus className=" rounded-full " />
  <CircleMinus className=" rounded-full " />
</td>
              </tr>

              <tr className="mt-4 border-b border-gray-300 hover:bg-[#f7f8f9] transition-colors duration-200">
                <td className="p-4">
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300"
                  />
                </td>
                <td className="p-4 ">
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300"
                  />
                </td>
                <td className="p-4 ">
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300"
                  />
                </td>
                <td className="p-4 ">
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 bg-[#dee2e6]"
                  />
                </td>
                <td className="p-4 flex justify-end items-center gap-1 ">
  <CirclePlus className=" rounded-full " />
  <CircleMinus className=" rounded-full " />
</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex flex-col">
  <table className="w-full border-collapse ">
    <tbody>
      <tr className="border-b border-gray-300 hover:bg-[#f7f8f9] transition-colors duration-200">
        <td className="text-gray-700 font-medium text-right p-5">Sub Total</td>
        <td className="text-right py-2 px-4">0</td>
      </tr>
      <tr className="border-b border-gray-300 hover:bg-[#f7f8f9] transition-colors duration-200">
        <td className="text-gray-700 font-medium text-right p-5">Discount</td>
        <td className="text-right py-2 px-4">0</td>
      </tr>
      <tr className="border-b border-gray-300 hover:bg-[#f7f8f9] transition-colors duration-200">
        <td className="text-gray-700 font-medium text-right p-5">Total</td>
        <td className="text-right py-2 px-4">0</td>
      </tr>
    </tbody>
  </table>
</div>


        {/* Submit Button */}
        <div className="flex justify-end mt-4">
          <button className="bg-purple-600 text-white p-2 rounded hover:bg-purple-700">
            Add Estimate
          </button>
        </div>
      </div>
    </Sidebar>
  );
};

export default AddEstimate;

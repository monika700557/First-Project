import React from "react";

const  ExpenseCategory = () => {
  return (
    <div className="w-[95%] ml-[4rem] mt-[6rem] bg-white rounded-lg shadow">
      <div className="border-b border-gray p-4">
        <div className="flex flex-row justify-between">
          <h2 className="text-xl font-semibold mb-6">Expense Category </h2>
          <button className="w-[9rem]  text-[14px] h-[2.5rem] text-center p-[10px] bg-transparent text-purple-500 border border-purple-500 rounded-lg">
            Add New Expenses
          </button>
        </div>




        <table className="w-full mt-[1rem] ">
        <thead>
  <tr>
    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-bold text-black uppercase tracking-wider">
      Tax Name
    </th>
    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-bold text-black uppercase tracking-wider">
      Tax Percentage (%)
    </th>
    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-bold text-black uppercase tracking-wider">
      Status
    </th>
    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-bold text-black uppercase tracking-wider">
      Action
    </th>
  </tr>
</thead>

          <tbody>
            <tr>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                VAT
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                14%
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm ">
                <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight text-center  w-[7rem]">
                  <span
                    aria-hidden
                    className="absolute inset-0 bg-green-200 opacity-50 rounded-[2px]"
                  ></span>
                  <span className="relative">Active</span>
                </span>
              </td>


              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <button className="text-indigo-600 hover:text-indigo-900">
                  Edit
                </button>
                <button className="text-red-600 hover:text-red-900 ml-4">
                  Delete
                </button>
              </td>
            </tr>



            <tr>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                GST
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                30%
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <span className="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight text-center  w-[7rem]">
                  <span
                    aria-hidden
                    className="absolute inset-0 bg-red-200 opacity-50 rounded-[2px]"
                  ></span>
                  <span className="relative">Inactive</span>
                </span>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <button className="text-indigo-600 hover:text-indigo-900">
                  Edit
                </button>
                <button className="text-red-600 hover:text-red-900 ml-4">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExpenseCategory;

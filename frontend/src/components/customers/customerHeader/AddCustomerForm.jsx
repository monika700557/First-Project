import React from "react";
import Sidebar from "../../../components/dashboard/sidebar/Sidebar";
import { useNavigate } from "react-router-dom";

const AddCustomerForm = () => {
  const navigate = useNavigate();

  return (
    <Sidebar>
      <div className=" mb-6 p-2 mt-6 ">
        <h2 className="text-2xl leading-xl text-[#333] font-semibold">Customers</h2>
        <p className="text-sm text-gray-500">
          <span
            className="cursor-pointer"
            onClick={() => navigate("/")}
          >
            Dashboard
          </span>{" "}
          /{" "}
          <span
            className="cursor-pointer"
            onClick={() => navigate("/customer")}
          >
            Customers
          </span>{" "}
          /{" "}
          <span className="font-bold">Add Customer</span>
        </p>
      </div>

      <div className="p-6 bg-white rounded-lg shadow-lg  w-full">

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-4">Basic Info</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  className="mt-1 block w-full h-[5vh] border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            
                />
              </div>
              <div>
                <label className="block text-gray-700">Primary Contact Name</label>
                <input
                  type="text"
                  className="mt-1 block w-full h-[5vh] border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              
                />
              </div>
              <div>
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  className="mt-1 block w-full h-[5vh] border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                 
                />
              </div>
              <div>
                <label className="block text-gray-700">Phone</label>
                <input
                  type="text"
                  className="mt-1 block w-full h-[5vh] border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
               
                />
              </div>
              <div>
                <label className="block text-gray-700">Primary Currency</label>
                <select className="mt-1 block w-full h-[5vh] border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500">
                  <option>Select Currency</option>
                  <option>USD</option>
                  <option>EUR</option>
                  <option>INR</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700">Website</label>
                <input
                  type="text"
                  className="mt-1 block w-full h-[5vh] border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
               
                />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Billing Address</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  className="mt-1 block w-full h-[5vh] border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  
                />
              </div>
              <div>
                <label className="block text-gray-700">Country</label>
                <select className="mt-1 block w-full h-[5vh] border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500">
                  <option>United States</option>
                  <option>Canada</option>
                  <option>United Kingdom</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700">State</label>
                <input
                  type="text"
                  className="mt-1 block w-full h-[5vh] border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label className="block text-gray-700">City</label>
                <input
                  type="text"
                  className="mt-1 block w-full h-[5vh] border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                
                />
              </div>
              <div>
                <label className="block text-gray-700">Address</label>
                <textarea
                  className="mt-1 block w-full h-[19vh] p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                   placeholder="Enter Phone" 
                ></textarea>
              </div>
              <div  className="flex flex-col">
              <div>
                <label className="block text-gray-700">Zip Code</label>
                <input
                  type="text"
                  className="mt-1 block w-full h-[5vh] border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                 
                />
              </div>
              <div>
                <label className="block text-gray-700">Phone</label>
                <input
                  type="text"
                  className="mt-1 block w-full h-[5vh] border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                
                />
              </div>
              </div>
           
            </div>
          </div>

          <div>
         
            <h3 className="text-xl font-semibold mb-4">Shipping Address</h3>

            <div className="flex items-center justify-end ">
          <button
            className="flex p-[4px] text-[13px] mt-10 bg-transparent border-2 border-[#7638ff] text-[#7638ff] rounded hover:bg-purple-700 hover:text-white font-semibold"
          > Copy From Billing
          </button>
        </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
              <div>
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  className="mt-1 block w-full h-[5vh] border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  
                />
              </div>
              <div>
                <label className="block text-gray-700">Country</label>
                <select className="mt-1 block w-full h-[5vh] border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500">
                  <option>United States</option>
                  <option>Canada</option>
                  <option>United Kingdom</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700">State</label>
                <input
                  type="text"
                  className="mt-1 block w-full h-[5vh] border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label className="block text-gray-700">City</label>
                <input
                  type="text"
                  className="mt-1 block w-full h-[5vh] border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                
                />
              </div>
              <div>
                <label className="block text-gray-700">Address</label>
                <textarea
                  className="mt-1 block w-full h-[19vh] p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                   placeholder="Enter Phone" 
                ></textarea>
              </div>
              <div  className="flex flex-col">
              <div>
                <label className="block text-gray-700">Zip Code</label>
                <input
                  type="text"
                  className="mt-1 block w-full h-[5vh] border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                 
                />
              </div>
              <div>
                <label className="block text-gray-700">Phone</label>
                <input
                  type="text"
                  className="mt-1 block w-full h-[5vh] border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                
                />
              </div>
              </div>
           
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end ">
          <button
            className="flex p-2 mt-10 bg-[#7638ff] border-[#7638ff] text-white rounded hover:bg-purple-700 font-semibold text-[13px]"
          > Add Customer
          </button>
        </div>
      </div>
    </Sidebar>
  );
};

export default AddCustomerForm;
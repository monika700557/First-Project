
import React, { useRef } from 'react';
import { useNavigate } from "react-router-dom";

const BankSetting = () => {

    const navigate = useNavigate();

  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };


  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log('Selected file:', file.name);
    }
  };



  return (
    <>
    <div>
    <div className="w-full justify-center flex flex-col  fixed text-center gap-2 mt-[-2rem]   items-center ">
        <h2 className="font-bold text-2xl">Invoice Setting</h2>
        <p className="text-sm ">
          <span
            className="cursor-pointer font-semibold text-black"
            onClick={() => navigate("/home")}
          >
            Dashboard
          </span>{" "}
          /{" "}
          <span
            className="font-semibold"

          >
             Bank Setting
          </span>
         
        </p>
      </div>


    
  <div className="w-[65%]  ml-[365px] justify-end  block bg-white rounded-lg overscroll-none fixed  mt-[40px] shadow items-end">
        <div className="border-b border-gray p-4 ">
          <h2 className="text-xl font-semibold mb-6">Tax Setting</h2>
        </div>

        <div className="p-4 relative   ">
          <form className='leading-10'>
            <div className="flex items-center">
              <label
                className="block text-sm font-medium text-gray-700 w-[25%] ml-4"
                htmlFor="name"
              >
                Default Bank Account
              </label>

              <div className="flex items-center w-[100%]">
                <label className="flex items-center cursor-pointer">
                  <input type="checkbox" className="mr-2 w-4 h-4" />
                  <span className="font-semibold text-sm ">
                    {" "}
                    Check to enable Bank Account Default
                  </span>
                </label>
              </div>
            </div>

   
            <div className="flex flex-row mt-4">
              <label
                className="block text-sm font-medium text-gray-700  w-[25%] ml-[15px]"
                htmlFor="name"
              >
                Account Holder Name
              </label>

              <div className="relative flex items-center w-[100%]">
                <input
                  type="text"
                  id="name"
                  className=" block w-[100%] border border-gray-300 rounded-md shadow-sm py-2 px-3 text-black font-semibold focus:outline-none sm:text-sm h-[5vh]"
                />
              </div>
            </div>

         
            {/* Zip Code */}
            <div className="flex flex-row mt-4">
              <label
                className="block text-sm font-medium text-gray-700  w-[25%] ml-[15px]"
                htmlFor="name"
              >
                 Bank name
              </label>

              <div className="relative flex items-center w-[100%]">
                <input
                  type="text"
                  id="name"
                  className=" block w-[100%] border border-gray-300 rounded-md shadow-sm py-2 px-3 text-black font-semibold focus:outline-none sm:text-sm h-[5vh] "
                />
              </div>
            </div>

            <div className="flex flex-row mt-4">
              <label
                className="block text-sm font-medium text-gray-700  w-[25%] ml-[15px]"
                htmlFor="name"
              >
                 IFSC Code
              </label>

              <div className="relative flex items-center w-[100%]">
                <input
                  type="text"
                  id="name"
                  className=" block w-[100%] border border-gray-300 rounded-md shadow-sm py-2 px-3 text-black font-semibold focus:outline-none sm:text-sm h-[5vh] "
                />
              </div>
            </div>

            
            <div className="flex flex-row mt-4">
              <label
                className="block text-sm font-medium text-gray-700  w-[25%] ml-[15px]"
                htmlFor="name"
              >
                Account Number
              </label>

              <div className="relative flex items-center w-[100%]">
                <input
                  type="text"
                  id="name"
                  className=" block w-[100%] border border-gray-300 rounded-md shadow-sm py-2 px-3 text-black font-semibold focus:outline-none sm:text-sm h-[5vh] "
                />
              </div>
            </div>

            <div className="flex justify-end gap-4">
              <button
                type="submit"
                className=" mt-6    w-[10rem] inline-flex justify-center py-4 px-4 border  border-transparent shadow-sm text-sm font-medium rounded-lg text-white bg-[#1B2559] hover:bg-[#7638ff] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:#7638ff"
              >
                Cancel
              </button>
              <button
                type="submit"
                className=" mt-6  w-[10rem] inline-flex justify-center py-4 px-4 border   border-transparent shadow-sm text-sm font-medium rounded-lg text-white bg-[#7638ff] hover:bg-[#1B2559] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Save Changes
              </button>
            </div>

          
          </form>
        </div>
      </div>
      </div>
    

    
    </>
  );
};

export default BankSetting;

import React from "react";

import { Pencil } from "lucide-react";

const ProfileSetting = () => {
  return (
    <div className="w-[95%]  ml-[4rem]  mt-[6rem] bg-white rounded-lg shadow items-center">
      <div className="border-b border-gray p-4 ">
        <h2 className="text-xl font-semibold mb-6">Basic Information</h2>
      </div>

      <div className="p-4 relative">
        <form>
          <div className="flex flex-row">
            <label
              className="block text-sm font-medium text-gray-700  w-[25%] ml-[15px]"
              htmlFor="name"
            >
              Name
            </label>

            <div className="relative flex items-start  justify-start w-[50%]">
              <label className="ml-[-4rem]">
                <img
                  src="https://kanakku.dreamstechnologies.com/html/template-materializecss/assets/img/profiles/avatar-02.jpg"
                  className="w-28 h-28 rounded-full"
                />
                <input type="file" className=" absolute inset-0 opacity-0 cursor-pointer" />

                <span className="absolute bottom-2 left-20 bg-white p-1 rounded-full shadow-md ml-[-4rem]">
                  <Pencil />
                </span>
              </label>
            </div>
          </div>

        
          <div className="flex flex-row mt-4">
            <label
              className="block text-sm font-medium text-gray-700  w-[25%] ml-[15px]"
              htmlFor="name"
            >
              Name
            </label>

            <div className="relative flex items-center w-[100%]">
          
            <input
              type="text"
              id="name"
              className=" block w-[100%] border border-gray-300 rounded-md shadow-sm py-2 px-3 text-black font-semibold focus:outline-none sm:text-sm "
              defaultValue="monika"
            />
          
            </div>
          </div>

        
          <div className="flex flex-row mt-4">
            <label
              className="block text-sm font-medium text-gray-700  w-[25%] ml-[15px]"
              htmlFor="name"
            >
              Email
            </label>

            <div className="relative flex items-center w-[100%]">
          
            <input
              type="text"
              id="name"
              className=" block w-[100%] border border-gray-300 rounded-md shadow-sm py-2 px-3 text-black font-semibold focus:outline-none sm:text-sm "
              defaultValue="monika75764@hmail.com"
            />
          
            </div>
          </div>

          <div className="flex flex-row mt-4">
            <label
              className="block text-sm font-medium text-gray-700  w-[25%] ml-[15px]"
              htmlFor="name"
            >
              Phone (optional)
            </label>

            <div className="relative flex items-center w-[100%]">
          
            <input
              type="text"
              id="name"
              className=" block w-[100%] border border-gray-300 rounded-md shadow-sm py-2 px-3 text-black font-semibold focus:outline-none sm:text-sm "
              defaultValue="+91 -2649836594836"
            />
          
            </div>
          </div>


       
          <div className="flex flex-row mt-4">
            <label
              className="block text-sm font-medium text-gray-700  w-[25%] ml-[15px]"
              htmlFor="name"
            >
              Location
            </label>

            <div className="relative flex flex-col items-center w-[100%] gap-4">
          
            <input
              type="text"
              id="name"
              className=" block w-[100%] border border-gray-300 rounded-md shadow-sm py-2 px-3 text-black font-semibold focus:outline-none sm:text-sm "
              defaultValue="India"
            />
            <input
              type="text"
              id="name"
              className=" block w-[100%] border border-gray-300 rounded-md shadow-sm py-2 px-3 text-black font-semibold focus:outline-none sm:text-sm "
              defaultValue="Rajasthan"
            />
              <input
              type="text"
              id="name"
              className=" block w-[100%] border border-gray-300 rounded-md shadow-sm py-2 px-3 text-black font-semibold focus:outline-none sm:text-sm "
              defaultValue="Kota"
            />
            </div>
          </div>


          <div className="flex flex-row mt-4">
            <label
              className="block text-sm font-medium text-gray-700  w-[25%] ml-[15px]"
              htmlFor="name"
            >
              Address line 1
            </label>

            <div className="relative flex items-center w-[100%]">
          
            <input
              type="text"
              id="name"
              className=" block w-[100%] border border-gray-300 rounded-md shadow-sm py-2 px-3 text-black font-semibold focus:outline-none sm:text-sm "
              defaultValue="2681  Columbia Mine Road"
            />
          
            </div>
          </div>


          <div className="flex flex-row mt-4">
            <label
              className="block text-sm font-medium text-gray-700  w-[25%] ml-[15px]"
              htmlFor="name"
            >
              Address line 2 (Optional)
            </label>

            <div className="relative flex items-center w-[100%]">
          
            <input
              type="text"
              id="name"
              className=" block w-[100%] border border-gray-300 rounded-md shadow-sm py-2 px-3 text-black font-semibold focus:outline-none sm:text-sm "
              placeholder="address"
            />
          
            </div>
          </div>



       
          {/* Zip Code */}
          <div className="flex flex-row mt-4">
            <label
              className="block text-sm font-medium text-gray-700  w-[25%] ml-[15px]"
              htmlFor="name"
            >
             Zip Code 
            </label>

            <div className="relative flex items-center w-[100%]">
          
            <input
              type="text"
              id="name"
              className=" block w-[100%] border border-gray-300 rounded-md shadow-sm py-2 px-3 text-black font-semibold focus:outline-none sm:text-sm "
              defaultValue="73466"
            />
          
            </div>
          </div>

         
          <div className="flex justify-end">
            <button
              type="submit"
              className=" mt-6  inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileSetting;

import React, { useState } from 'react';


const Preference = () => {
  const [isDiscountEnabled, setIsDiscountEnabled] = useState(false);

  const handleToggle = () => {
    setIsDiscountEnabled(prevState => !prevState);
  };



  return (
    <>
      <div className="w-[95%]  ml-[4rem]  mt-[6rem] bg-white rounded-lg shadow items-center">
        <div className="border-b border-gray p-4 ">
          <h2 className="text-xl font-semibold mb-6">Prefrence</h2>
        </div>

        <div className="p-4 relative">
          <form>
            <div className="flex flex-row mt-4">
              <label
                className="block text-sm font-medium text-gray-700  w-[25%] ml-[15px]"
                htmlFor="name"
              >
                Currency
              </label>

              <div className="relative flex items-center w-[100%]">
                <select className="block w-[100%] border border-gray-300 rounded-md shadow-sm py-2 px-3 text-black font-semibold focus:outline-none sm:text-sm">
                  <option>USD -US Doller</option>
                  <option>USD -US Doller</option>
                  <option>USD -US Doller</option>
                  <option>USD -US Doller</option>
                  <option>USD -US Doller</option>
                  <option>USD -US Doller</option>
                </select>
              </div>
            </div>

            <div className="flex flex-row mt-4">
              <label
                className="block text-sm font-medium text-gray-700  w-[25%] ml-[15px]"
                htmlFor="name"
              >
                Language
              </label>

              <div className="relative flex items-center w-[100%]">
                <select className="block w-[100%] border border-gray-300 rounded-md shadow-sm py-2 px-3 text-black font-semibold focus:outline-none sm:text-sm">
                  <option>Hindi</option>
                  <option>USD -US Doller</option>
                  <option>USD -US Doller</option>
                  <option>USD -US Doller</option>
                  <option>USD -US Doller</option>
                  <option>USD -US Doller</option>
                </select>
              </div>
            </div>

            <div className="flex flex-row mt-4">
              <label
                className="block text-sm font-medium text-gray-700  w-[25%] ml-[15px]"
                htmlFor="name"
              >
                Time Zone
              </label>

              <div className="relative flex items-center w-[100%]">
                <select className="block w-[100%] border border-gray-300 rounded-md shadow-sm py-2 px-3 text-black font-semibold focus:outline-none sm:text-sm">
                  <option>English</option>
                  <option>USD -US Doller</option>
                  <option>USD -US Doller</option>
                  <option>USD -US Doller</option>
                  <option>USD -US Doller</option>
                  <option>USD -US Doller</option>
                </select>
              </div>
            </div>

            <div className="flex flex-row mt-4">
              <label
                className="block text-sm font-medium text-gray-700  w-[25%] ml-[15px]"
                htmlFor="name"
              >
                Date Format
              </label>

              <div className="relative flex items-center w-[100%]">
                <select className="block w-[100%] border border-gray-300 rounded-md shadow-sm py-2 px-3 text-black font-semibold focus:outline-none sm:text-sm">
                  <option>22 April 2002</option>
                  <option>22 Dec 2023</option>
                  <option>USD -US Doller</option>
                  <option>USD -US Doller</option>
                  <option>USD -US Doller</option>
                  <option>USD -US Doller</option>
                </select>
              </div>
            </div>

            <div className="flex flex-row mt-4">
              <label
                className="block text-sm font-medium text-gray-700  w-[25%] ml-[15px]"
                htmlFor="name"
              >
                Financial Year
              </label>

              <div className="relative flex items-center w-[100%]">
                <select className="block w-[100%] border border-gray-300 rounded-md shadow-sm py-2 px-3 text-black font-semibold focus:outline-none sm:text-sm">
                  <option>January - December</option>
                  <option>22 Dec 2023</option>
                  <option>USD -US Doller</option>
                  <option>USD -US Doller</option>
                  <option>USD -US Doller</option>
                  <option>USD -US Doller</option>
                </select>
              </div>
            </div>











        <label className="block text-gray-700 font-semibold mt-[1rem]">Discount Per Item</label>
        <div className="mt-1 flex items-center">
          <p className="text-gray-600  font-semibold text-sm mt-[0rem]">
            Enable this if you want to add Discount to individual invoice items. By default, Discount is added directly to the invoice.
          </p>
        
          <div className="relative inline-flex items-end ml-[7rem]">
            <input
              type="checkbox"
              id="discount-toggle"
              checked={isDiscountEnabled}
              onChange={handleToggle}
              className="sr-only"
            />
            <div
              className={`w-11 h-6 'bg-blue-500 rounded-full cursor-pointer flex items-center ${
                isDiscountEnabled ? 'bg-blue-500' : 'bg-blue-500'
              }`}
              onClick={handleToggle}
            >
              <div
                className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${
                  isDiscountEnabled ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </div>
          </div>
        </div>
    



   <div className="flex justify-end items-end">
   <button className="mt-6 px-4 py-2 bg-purple-500 text-white rounded-lg text-end">
                Save Changes
              </button>
   </div>
            
          </form>
        </div>
      </div>
    </>
  );
};

export default Preference;

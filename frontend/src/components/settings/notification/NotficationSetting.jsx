import React, { useState } from 'react';


const NotficationSetting = () => {
 
  const [isDiscountEnabled, setIsDiscountEnabled] = useState(false);

  const handleToggle = () => {
    setIsDiscountEnabled(prevState => !prevState);
  };



  return (
    <>
      <div className="w-[95%]  ml-[4rem]  mt-[6rem] bg-white rounded-lg shadow items-center">
        <div className="border-b border-gray p-4 ">
          <h2 className="text-xl font-semibold mb-6">Notifications</h2>
          <p className='mt-[-1.5rem] text-sm font-semibold text-gray-600'>Which email notifications would you like to receive when something changes?</p>
        </div>

        <div className="p-4 relative">
        <form>
        <div className="flex flex-row mt-4">
            <label
              className="block text-sm font-medium text-gray-700  w-[25%] ml-[15px]"
              htmlFor="name"
            >
              Send Notifications to
            </label>

            <div className="relative flex items-center w-[100%]">
          
            <input
              type="text"
              id="name"
              className=" block w-[100%] border border-gray-300 rounded-md shadow-sm py-2 px-3 text-black font-semibold focus:outline-none sm:text-sm "
              
            />
          
            </div>
          </div>

        
        </form>



        <label className="block text-gray-700 font-semibold mt-[1rem]">Invoice viewed</label>
        <div className="mt-1 flex items-center">
          <p className="text-gray-600  font-semibold text-sm mt-[0rem]">
          When your customer views the invoice sent via dashboard.
          </p>
        
          <div className="relative inline-flex items-end ml-[33rem]">
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



        <label className="block text-gray-700 font-semibold mt-[1rem]">Estimated viewed</label>
        <div className="mt-1 flex items-center">
          <p className="text-gray-600  font-semibold text-sm mt-[0rem]">
          When your customer views the invoice sent via dashboard.
          </p>
        
          <div className="relative inline-flex items-end ml-[33rem]">
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
    


        <div className="flex justify-end">
            <button
              type="submit"
              className=" mt-6  inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Save Changes
            </button>
          </div>

      </div>


      
      </div>
    </>
  );
};

export default NotficationSetting;

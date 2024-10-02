import React, { useState } from "react";
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';


const BorderLinearProgress1 = styled(LinearProgress)(({ theme }) => ({
    height: 7,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 100 : 700],
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: theme.palette.mode === 'light' ? 'red' : '#308fe8',
    },
}));



const ChangePassword = () => {
  const [isDiscountEnabled, setIsDiscountEnabled] = useState(false);

  const handleToggle = () => {
    setIsDiscountEnabled((prevState) => !prevState);
  };

  return (
    <>
      <div className="w-[95%]  ml-[4rem]  mt-[6rem] bg-white rounded-lg shadow items-center">
        <div className="border-b border-gray p-4 ">
          <h2 className="text-xl font-semibold mb-6">Change Password </h2>
        </div>

        <div className="p-4 relative">
          <form>
            <div className="flex flex-row mt-4">
              <label
                className="block text-sm font-medium text-gray-700  w-[25%] ml-[15px]"
                htmlFor="name"
              >
                current Password
              </label>

              <div className="relative flex items-center w-[100%]">
                <input
                  type="password"
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
                New Password
              </label>

              <div className="relative flex items-center w-[100%]">
                <input
                  type="password"
                  id="name"
                  className=" block w-[100%] border border-gray-300 rounded-md shadow-sm py-2 px-3 text-black font-semibold focus:outline-none sm:text-sm "
                  placeholder="Enter New Password"
                />
              </div>
            </div>



            <div className='my-4 w-[79%] ml-[15rem]'>
                        <BorderLinearProgress1 variant="determinate" value={2} />
                    </div>




            <div className="flex flex-row mt-4">
              <label
                className="block text-sm font-medium text-gray-700  w-[25%] ml-[15px]"
                htmlFor="name"
              >
                Confirm New Password
              </label>

              <div className="relative flex items-center w-[100%]">
                <input
                  type="password"
                  id="name"
                  className=" block w-[100%] border border-gray-300 rounded-md shadow-sm py-2 px-3 text-black font-semibold focus:outline-none sm:text-sm "
                  placeholder="Confirm New password"
                />
              </div>
            </div>
            <div className=" ml-[15rem] items-center ">
              <h3 className="font-semibold text-lg mt-2">Password requirements:</h3>
              <p className="font-semibold text-sm  mt-2">Ensure that these requirements are met:</p>
              <p className="font-semibold text-sm mt-2">Minimum 8 characters long - the more, the better</p>
              <p className="font-semibold text-sm ">At least one lowercase character</p>
              <p className="font-semibold text-sm ">At least one uppercase character</p>
              <p className="font-semibold text-sm ">At least one number, symbol</p>
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
    </>
  );
};

export default ChangePassword;

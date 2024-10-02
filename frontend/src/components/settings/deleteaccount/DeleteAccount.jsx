import React from "react";

const   DeleteAccount = () => {
  return (
    <div className="w-[95%]  ml-[4rem]  mt-[6rem] bg-white rounded-lg shadow items-center">
    <div className="border-b border-gray p-4 ">
      <h2 className="text-xl font-semibold mb-3">Delete Your Account </h2>
    </div>

    <div className="p-4 relative ">
      <div className="font-semibold text-[14px] gap-5 leading-[30px]  ">
      <p>When you delete your account, you lose access to Kanakku account services, and we permanently delete your personal data.</p>
      <p>Are you sure you want to close your account?</p>
      </div>

      <div className="flex items-center mt-6">
          <input
            type="checkbox"
            id="confirm-delete"
            className="mr-2 w-4 h-6"
          />
          <label
            htmlFor="confirm-delete"
            className="text-[#FF0000] font-semibold text-base"
          >
            Confirm to delete my account
          </label>
        </div>



      <div className="flex justify-end items-end">
   <button className="mt-6 px-4 py-2 bg-purple-500 text-white rounded-lg text-end">
                Save Changes
              </button>
   </div>
      
    </div>
  </div>
  );
};

export default DeleteAccount;

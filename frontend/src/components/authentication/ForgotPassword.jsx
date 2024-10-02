import React from "react";

export default function ForgotPassword() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white px-10 py-10 rounded-3xl w-full max-w-md shadow-lg">
        <h1 className="text-2xl font-semibold text-black text-center">
     Forgot Password ?
        </h1>
        <p className="font-medium text-base text-black mt-2 text-center">
        Enter your email to get a password reset link
        </p>

        <div className="mt-4">
          <div className="ml-[-1rem]">
            <label className="text-xs text-gray-500 font-bold">
              Email Address
            </label>
            <input
              type="email"
              className="w-full border-2 border-gray-200 p-2 mt-1 bg-transparent rounded"
           
            />
          </div>
      
     
          <div className="mt-4 ml-[-1rem] flex flex-col  font-medium text-base text-violet-500">
            <button className="active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-md bg-violet-600 text-white text-lg font-bold">
              Reset Passwors
            </button>

        
    
          </div>
          <div className="mt-8 flex justify-center items-center">
            <p className="font-medium text-base text-gray-500">
            Remember your password?{" "}
            </p>
            <button className="text-black text-base font-medium ml-2">
               Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
import React from "react";

export default function LockScreenPage() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <div className="bg-white px-10 py-10 rounded-3xl w-full max-w-md shadow-lg">
          <div className="relative flex items-start  justify-start w-[100%]">
              <label className="ml-[8rem]">
                <img
                  src="https://kanakku.dreamstechnologies.com/html/template-materializecss/assets/img/profiles/avatar-02.jpg"
                  className="w-28 h-28 rounded-full"
                />
               
              </label>
            </div>
            <h1 className="font-semibold  text-2xl text-black mt-2 text-center">
            John Doe
            </h1>
    
            <div className="mt-4">
              <div className="ml-[-1rem]">
                <label className="text-xs text-gray-500 font-bold">
                  Password
                </label>
                <input
                  type="email"
                  className="w-full border-2 border-gray-200 p-2 mt-1 bg-transparent rounded"
               
                />
              </div>
          
         
              <div className="mt-4 ml-[-1rem] flex flex-col  font-medium text-base text-violet-500">
                <button className="active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-md bg-violet-600 text-white text-lg font-bold">
                Enter
                </button>
    
            
        
              </div>
              <div className="mt-8 flex justify-center items-center">
                <p className="font-medium text-base text-gray-500">
                Sign in as a different user? {" "}
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
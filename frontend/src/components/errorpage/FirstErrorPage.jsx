import React from "react";
import {CircleAlert } from 'lucide-react';

export default function FirstErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <span className="text-[#7638ff] font-semibold " style={{ fontSize: '10rem' }} > 404 </span>
      <div className="flex items-center space-x-4">
      <CircleAlert className="text-white text-6xl bg-black w-[33px] h-[33px] rounded-full !p-0 !border-none" />
      <span className="text-black font-semibold text-4xl">
        Oops! Page not found!
      </span>
    </div>

     
    </div>



  );
}
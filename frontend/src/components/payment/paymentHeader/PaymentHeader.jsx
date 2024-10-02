import React from "react";
import { useNavigate } from "react-router-dom";
 import { Plus, Filter } from 'lucide-react';

const PaymentHeader = () => {
  const navigate = useNavigate();

  const handleAddPayment = () => {
    navigate("/add-payment"); 
  };

  return (
    <div className="flex justify-between items-center mb-6 ">
      <div>
        <h2 className="text-2xl font-bold">Payment</h2>
        <p className="text-gray-600">Dashboard / Customers</p>
      </div>
      <div className="flex space-x-2">
          <button
              onClick={handleAddPayment}
             className="flex items-center justify-center p-2 bg- bg-[#7638ff] text-white rounded hover:bg-[#7638ff] w-[2.5rem] h-[2.5rem]"
           >
            <Plus size={20}  className="font-semibold"  />
         </button>
           <button className="flex items-center justify-center p-2 bg- bg-[#7638ff] text-white rounded hover:  w-[2.5rem] h-[2.5rem]">
            <Filter size={20} className="font-semibold" />
           </button>
         </div>
    </div>
  );
};

export default PaymentHeader;
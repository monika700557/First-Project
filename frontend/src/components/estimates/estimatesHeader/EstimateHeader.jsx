import React from "react";
import { useNavigate } from "react-router-dom";
 import { Plus, Filter } from 'lucide-react';

const EstimateHeader = () => {
  const navigate = useNavigate();

  const handleAddCustomer = () => {
    navigate("/add-estimate"); 
  };

  return (
    <div className="flex justify-between items-center mb-6 ">
      <div>
        <h2 className="text-2xl font-bold">Estimates</h2>
        <p className="text-gray-600">Dashboard / Estimates</p>
      </div>
      <div className="flex space-x-2">
          <button
              onClick={handleAddCustomer}
             className="flex items-center justify-center p-2 bg- bg-[#7638ff] text-white rounded hover:bg-[#7638ff] w-[2.5rem] h-[2.5rem]"
           >
            <Plus size={20}  className="font-semibold"  />
         </button>
           <button className="flex items-center justify-center p-2 bg- bg-[#7638ff] text-white rounded hover: bg-[#7638ff] w-[2.5rem] h-[2.5rem]">
            <Filter size={20} className="font-semibold" />
           </button>
         </div>
    </div>
  );
};

export default EstimateHeader;
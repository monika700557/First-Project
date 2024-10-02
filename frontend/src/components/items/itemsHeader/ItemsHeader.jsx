import React, { useState } from "react";
import ItemsForm from "./ItemsForm";
import { CirclePlus } from 'lucide-react';



const ItemHeader = ({ activeTab, setActiveTab }) => {

  const [isFormVisible, setFormVisible] = useState(false);

  const handleAddNewItemClick = () => {
    setFormVisible(true);
  };

  const handleCloseForm = () => {
    setFormVisible(false);
  };

  return (
    <>
      <div className="flex justify-between items-center mb-6  p-4">
        <div>
          <h2 className="text-3xl font-semibold ">Items</h2>
          <p className="text-gray-600">Dashboard / Item List</p>
        </div>
      </div>

      <div className="flex flex-col   mb-6  ">
        <div className="flex space-x-4  border-b-2  border-b-[#dcdcdc]  w-full">
          <button
            className={`px-4 py-2 font-semibold ${
              activeTab === "allItems"
                ? "text-purple-600 border-b-4 border-purple-600"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("allItems")}
          >
            All Items
          </button>
          <button
            className={`px-4 py-2 font-semibold ${
              activeTab === "category"
                ? "text-purple-600 border-b-4 border-purple-600"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("items-category")}
          >
            Category
          </button>
        </div>


        <div className=" w-full  justify-end flex "> 
        <button
        className="bg-[#1B2559] text-white font-semibold rounded px-4 py-2  mt-7 w-[11rem] h-12 mr-4" 
        onClick={handleAddNewItemClick}
       
      >

        <div className="flex flex-row gap-2">
        <CirclePlus  /> 
        <span>Add New Item</span> 

        </div>
      
      </button>
      <ItemsForm isVisible={isFormVisible} onClose={handleCloseForm} /> 
     
        </div>

       
      </div>
    </>
  );
};

export default ItemHeader;

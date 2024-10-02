import React, { useState } from "react";

const  ItemsForm = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50">
      <div className="bg-white rounded-lg p-6 w-[50rem]">
      <div className="relative">
      <h2 className="text-2xl font-semibold mb-4">
        Create New Item
      </h2>
      <span className="absolute mt-4  w-full border-b border-gray-300"></span>
    </div>


        <form className="mt-14">
          <div className="flex flex-row gap-6  ">
          <div className="mb-4 w-[25rem]">
            <label className="block text-gray-700 font-semibold mb-2">Item Name</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded"
              placeholder="Add New Item"
            />
          </div>
          <div className="mb-4 w-[25rem]">
            <label className="block text-gray-700 font-semibold mb-2">Category</label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded">
              <option>Select category</option>
            </select>
          </div>
          </div>

          <div className="flex flex-row gap-6 "> 
          <div className="mb-4 w-[25rem]">
            <label className="block text-gray-700 font-semibold mb-2">Price Per Unit</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded"
              placeholder="$"
            />
          </div>
          <div className="mb-4 w-[25rem]">
            <label className="block text-gray-700 font-semibold mb-2">Discount</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded"
              placeholder="%"
            />
          </div>
          </div>
         
        
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Description (Optional)</label>
            <textarea
              className="w-full h-[7rem] px-3 py-2 border border-gray-300 rounded"
              placeholder="Add item description"
            ></textarea>
          </div>
  
          
          <div className="flex justify-end space-x-4 w-full">
            <button
              type="button"
              className="px-4 py-2 bg-[#1B2559] text-white rounded w-[10rem] "
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-purple-600 text-white rounded w-[10rem]"
            >
              Save Item
            </button>
          </div>
        </form>
 
      </div>
    </div>
  );
};

export default ItemsForm;

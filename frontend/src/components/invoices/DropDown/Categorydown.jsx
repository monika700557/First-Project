import { Bookmark } from "lucide-react";
import { useRef, useState } from "react";

const Categorydown = () => {

    const [userDropdownOpen, setUserDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
  
    const toggleDropdown = () => {
      setUserDropdownOpen(!userDropdownOpen);
    };

  return (
    <div className="relative  flex-1">
      <button
        onClick={() => toggleDropdown("categoryDropdown")}
        className="flex items-center p-2 font-semibold text-[14px]  border border-gray-100 rounded-md w-full gap-1"
      >
        {" "}
        <Bookmark className="text-custom-purple font-semibold w-[20px] " />
        By Category
      </button>
      {userDropdownOpen && (
        <div
          ref={dropdownRef}
          className="absolute z-10  bg-white shadow-lg mt-2  p-4  custom-scrollbar  rounded-md"
        >
          <span className="text-custom-purple font-bold text-base">
            Category
          </span>
          <input
            type="text"
            placeholder="Enter Cetegory Name"
            className="w-full p-2 mt-2 border font-semibold border-gray-200 rounded-md"
          />
          <ul className="h-[13rem] mt-4  overflow-y-auto pb-3">
            <li className="flex items-center mb-[15px] space-x-2  font-[500] text-sm text-[#1B2559]">
              <input type="checkbox" className="w-4 h-4" id="brian" />
              <label htmlFor="brian">Brian Johnson</label>
            </li>
            <li className="flex items-center mb-[15px]  marker: space-x-2   font-[500] text-sm text-[#1B2559]">
              <input type="checkbox" className="w-4 h-4" id="russell" />
              <label htmlFor="russell">Russell Copeland</label>
            </li>
            <li className="flex items-center space-x-2 mb-[15px]  font-[500] text-sm text-[#1B2559]">
              <input type="checkbox" className="w-4 h-4" id="greg" />
              <label htmlFor="greg">Greg Lynch</label>
            </li>
            <li className="flex items-center space-x-2 mb-[15px]  font-[500] text-sm text-[#1B2559]">
              <input type="checkbox" className="w-4 h-4" id="john" />
              <label htmlFor="john">John Blair</label>
            </li>
            <li className="flex items-center space-x-2 mb-[15px]  font-[500] text-sm text-[#1B2559]">
              <input type="checkbox" className="w-4 h-4" id="john" />
              <label htmlFor="john">John Blair</label>
            </li>
            <li className="flex items-center space-x-2 mb-[15px]  font-[500] text-sm text-[#1B2559]">
              <input type="checkbox" className="w-4 h-4" id="john" />
              <label htmlFor="john">John Blair</label>
            </li>
            <li className="flex items-center space-x-2 mb-[15px]  font-[500] text-sm text-[#1B2559]">
              <input type="checkbox" className="w-4 h-4" id="john" />
              <label htmlFor="john">John Blair</label>
            </li>
            <li className="flex items-center space-x-2  mb-[15px]  font-[500] text-sm text-[#1B2559]">
              <input type="checkbox" className="w-4 h-4" id="john" />
              <label htmlFor="john">John Blair</label>
            </li>
            <li className="flex items-center space-x-2 mb-[15px]   font-[500] text-sm text-[#1B2559]">
              <input type="checkbox" className="w-4 h-4" id="john" />
              <label htmlFor="john">John Blair</label>
            </li>
            <li className="flex items-center space-x-2 mb-[15px]  font-[500] text-sm text-[#1B2559]">
              <input type="checkbox" className="w-4 h-4" id="john" />
              <label htmlFor="john">John Blair</label>
            </li>
            <li className="flex items-center space-x-2  mb-[15px]  font-[500] text-sm text-[#1B2559]">
              <input type="checkbox" className="w-4 h-4" id="john" />
              <label htmlFor="john">John Blair</label>
            </li>
          </ul>
          <div className="mt-2 flex flex-col justify-between">
            <button className="bg-custom-purple text-white px-4 py-2 rounded-md">
              Apply
            </button>
            <button className="bg-gray-100 px-4 py-2  mt-2 rounded-md">
              Reset
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Categorydown;

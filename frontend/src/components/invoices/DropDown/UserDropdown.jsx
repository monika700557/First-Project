import { UserRoundPlus } from "lucide-react";
import { useRef, useState } from "react";

const Users = [
  {
    name: "Brian Johnson",
  },
  {
    name: "Russell Copeland",
  },
  {
    name: "Greg Lynch",
  },
];


const UserDropdown = () => {

  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setUserDropdownOpen(!userDropdownOpen);
  };



  return (
    <div className="relative flex-1">
    <button
      onClick={() => toggleDropdown()}
      className="flex items-center p-2 font-semibold text-[14px] gap-1 border border-gray-100 rounded-md w-full"
    >
      <UserRoundPlus className="text-custom-purple font-semibold w-[20px]" />
      Select User
    </button>
    {userDropdownOpen && (
      <div
        ref={dropdownRef}
        className="absolute z-10 bg-white shadow-lg mt-2 p-4 custom-scrollbar rounded-md"
      >
        <span className="text-custom-purple font-semibold text-base">
          Customer Search
        </span>
        <input
          type="text"
          placeholder="Enter Customer Name"
          className="w-full p-2 mt-2 border font-semibold border-gray-200 rounded-md"
        />
        <ul className="h-[13rem] mt-4 overflow-y-auto pb-3">
          {Users.map((item, i) => (
            <li key={i} className="flex items-center mb-[15px] space-x-2 font-[500] text-sm text-[#1B2559]">
              <input type="checkbox" className="w-4 h-4" id={`user-${i}`} />
              <label htmlFor={`user-${i}`}>{item.name}</label>
            </li>
          ))}
        </ul>
        <div className="mt-2 flex flex-col justify-between">
          <button className="bg-custom-purple text-white px-4 py-2 rounded-md">
            Apply
          </button>
          <button className="bg-gray-100 px-4 py-2 mt-2 rounded-md">
            Reset
          </button>
        </div>
      </div>
    )}
  </div>
  );
};

export default UserDropdown;

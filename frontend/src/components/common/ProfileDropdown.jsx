import { Avatar } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import user from "../../assets/avatar-01.jpg";
import { ChevronDown, LogOut, Settings, User } from "lucide-react";

const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={toggleDropdown}
        id="menu-button"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <Avatar alt="Remy Sharp" src={user} sx={{ width: 30, height: 30 }} />
        Admin
        <ChevronDown aria-hidden="true" />
      </div>
      {isOpen && (
        <div
          className="absolute right-0 z-10 top-10 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex="-1"
        >
          <div className="py-1" role="none">
            <a
              href="#"
              className="px-4 py-2 text-sm text-gray-700 hover:text-[#7638ff] flex items-center gap-2"
              role="menuitem"
              tabIndex="-1"
              id="menu-item-0"
            >
              <User size={18} />
              Profile
            </a>
            <a
              href="#"
              className="px-4 py-2 text-sm text-gray-700 hover:text-[#7638ff] flex items-center gap-2"
              role="menuitem"
              tabIndex="-1"
              id="menu-item-1"
            >
              <Settings size={18} />
              Setting
            </a>
            <form method="POST" action="#" role="none">
              <button
                type="submit"
                className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:text-[#7638ff] flex items-center gap-2"
                role="menuitem"
                tabIndex="-1"
                id="menu-item-3"
              >
                <LogOut size={18} />
                Log out
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;

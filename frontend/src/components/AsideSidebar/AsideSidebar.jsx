import {
  House,
  Users,
  ClipboardList,
  Star,
  CreditCard,
  Package,
  ChartPie,
  LayoutGrid,
  Settings,
  UserPlus,
  File,
  User,
  MapPin,
  Pocket,
  Box,
  ChartBar,
  Award,
  Columns2,
  LayoutPanelTop,
  Dock,
  ChevronRight,
  UserRoundPen,
  Lock,
  OctagonAlert,
  StickyNote,
} from "lucide-react";
import { useState } from "react";
import { navLinks } from "../../constants/navLinks";
import React from "react";
import { Link } from "react-router-dom";

const AsideSidebar = () => {
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

  const toggleReportsDropdown = (index) => {
    // If the clicked dropdown is already open, close it. Otherwise, open the clicked one.
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  };

  const iconMap = {
    House,
    Users,
    ClipboardList,
    ChartPie,
    Star,
    CreditCard,
    Package,
    LayoutGrid,
    Settings,
    UserPlus,
    File,
    User,
    MapPin,
    Pocket,
    Box,
    ChartBar,
    Award,
    Columns2,
    LayoutPanelTop,
    Dock,
    ChevronRight,
    UserRoundPen,
    Lock,
    OctagonAlert,
    StickyNote,
  };

  return (
    <aside className="h-screen fixed w-full">
      <nav className="flex-1 pl-6 pt-4 ml-[-20px] mt-[5rem] text-[#95979b] bg-white rounded-3xl h-full !overflow-y-scroll w-[240px]">
        <ul>
          {navLinks.map((navItem, index) => (
            <li className="mb-4" key={index}>
              <Link to={navItem.href}>
                <a
                  href={navItem.href || "#"}
                  className="hover:text-[#7638ff] hover:bg-[rgba(118,56,255,0.05)] pb-[3px] flex"
                  onClick={
                    navItem.subMenu
                      ? () => toggleReportsDropdown(index)
                      : undefined
                  }
                >
                  {navItem.icon &&
                    React.createElement(iconMap[navItem.icon], {
                      className: "mr-2",
                    })}
                  {navItem.title}
                </a>
              </Link>

              {navItem.subMenu && openDropdownIndex === index && (
                <ul className="pl-8 mt-2">
                  {navItem.subMenu.map((subItem, subIndex) => (
                    <li className="mb-2" key={subIndex}>
                      <Link to={subItem.href}>
                        <a className="hover:text-[#7638ff] hover:bg-[rgba(118,56,255,0.05)] pt-[5px] pb-[5px] flex font-semibold text-[15px]">
                          {subItem.title}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default AsideSidebar;

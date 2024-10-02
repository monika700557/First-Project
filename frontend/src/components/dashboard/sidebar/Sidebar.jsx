import React, { useState } from "react";
import { Menu, Bell, Search } from "lucide-react";
import logo from "../../../assets/logo.jpeg";
import {
  Avatar,
  Grid,
  InputAdornment,
  TextField,
  useMediaQuery,
  useTheme,
  IconButton,
} from "@mui/material";
import AsideSidebar from "../../AsideSidebar/AsideSidebar";
import ProfileDropdown from "../../common/ProfileDropdown";
import Badge from "@mui/material/Badge";

export default function Sidebar({ children }) {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const isSmUp = useMediaQuery(theme.breakpoints.up("sm"));

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col h-screen">
      <nav className="flex items-center justify-between p-2 bg-white text-black fixed top-0 left-0 right-0 z-10 w-full">
        <div className="flex items-center gap-4">
          <div className="p-1 text-2xl font-bold">
            <img src={logo} className="w-36 h-12" alt="Logo" />
          </div>


          <IconButton onClick={handleToggleSidebar}>
            <Menu className="text-2xl" color="#000000" />
          </IconButton>


          {isSmUp && (
            <TextField
              id="outlined-start-adornment"
              sx={{ m: 1, width: { xs: "200px", sm: "300px" } }}
              placeholder="Search here"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <Search color="#000000" size={18} />
                  </InputAdornment>
                ),
              }}
              size="small"
            />
          )}
        </div>
        <div className="flex items-center gap-4">
          <Badge badgeContent={4} color="error">
            <Bell />
          </Badge>

          <ProfileDropdown />
        </div>
      </nav>
      <div className={`flex flex-1 ${isMdUp ? "flex-row" : "flex-col"}`}>
        {(isMdUp || isSidebarOpen) && (
          <aside
            className={`w-[240px] p-2 ${
              isMdUp && isSidebarOpen ? "hidden" : ""
            }`}
          >
            <AsideSidebar />
          </aside>
        )}
        <main className={`flex-1 p-3 mt-[80px] `}>{children}</main>
      </div>
    </div>
  );
}

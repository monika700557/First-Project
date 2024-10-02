import { useNavigate } from "react-router-dom";
import { Logs, LayoutGrid, Proportions } from "lucide-react";

import UserDropdown from "../../../invoices/DropDown/UserDropdown";
import DateDropdown from "../../../invoices/DropDown/DateDropdown";
import StatusDropDown from "../../../invoices/DropDown/StatusDropDown";
import Categorydown from "../../../invoices/DropDown/Categorydown";
import { Grid } from "@mui/material";

const InvoicesListHeader = () => {
  const navigate = useNavigate();
  const handleAddCustomer = () => {
    navigate("/");
  };

  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-[1.5rem] font-semibold">Invoices</h2>
          <p className="text-gray-600">Dashboard / Invoices</p>
        </div>

        <div className="flex space-x-2">
          <button
            onClick={handleAddCustomer}
            className="flex items-center justify-center p-2  text-[#7638ff]  rounded hover:bg-[#7638ff] "
          >
            <Logs size={20} className="font-bold w-[1.5rem] h-[1.5rem]" />
          </button>
          <button className="flex items-center justify-center p-2  rounded hover: text-black w-[2.5rem] h-[2.5rem]">
            <LayoutGrid size={20} className="font-bold w-[1.5rem] h-[1.5rem]" />
          </button>
        </div>
      </div>

      {/* <div className="flex flex-row bg-white items-center justify-center rounded-sm p-4 shadow-md space-x-4 h-[10vh]">
        <UserDropdown />

        <DateDropdown />

        <StatusDropDown />

        <Categorydown />

        <div className="relative  flex-1 gap-1">
          <button className="border-2 border-custom-purple  flex flex-row  text-custom-purple font-semibold px-4 py-2 rounded-md w-full items-center justify-center text-center gap-1">
            {" "}
            <Proportions className="text-custom-purple w-[20px]" />
            Generate Report
          </button>
        </div>
      </div> */}

      <Grid container spacing={2} className="pl-2 pb-4 px-4 bg-white">
        <Grid item md={9} sm={12} xs={12}>
          <Grid container>
            <Grid item md={3} sm={6} xs={12} paddingBottom={3}>
              <UserDropdown />
            </Grid>

            <Grid item md={3} sm={6} xs={12} paddingBottom={3}>
              <DateDropdown />
            </Grid>

            <Grid item md={3} sm={6} xs={12} paddingBottom={3}>
              <StatusDropDown />
            </Grid>

            <Grid item md={3} sm={6} xs={12} paddingBottom={3}>
              <Categorydown />
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={3} sm={12} xs={12}>
          <div className="relative  flex-1 gap-1">
            <button className="border-2 border-custom-purple  flex flex-row  text-custom-purple font-semibold px-4 py-2 rounded-md w-full items-center justify-center text-center gap-1">
              <Proportions className="text-custom-purple w-[20px]" />
              Generate Report
            </button>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default InvoicesListHeader;

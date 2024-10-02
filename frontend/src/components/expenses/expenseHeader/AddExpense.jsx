import React from "react";
import Sidebar from "../../../components/dashboard/sidebar/Sidebar";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import dayjs from "dayjs";
import { LocalizationProvider, DateCalendar } from "@mui/x-date-pickers";

import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

const StyledDatePicker = styled(DatePicker)({
  ".MuiInputBase-root": {
    marginTop: "-0.5rem",
    height: "3rem",
    overflow: "hidden",
  },
});

const style = {
  position: "absolute",
  top: "22%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
 
  boxShadow: 24,
};

const AddExpense = () => {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [dateString, setDateString] = React.useState(dayjs().format('YYYY-MM-DD'));

  const [selectedDate, setSelectedDate] = React.useState(dayjs());

  const handleDateChange = (date) => {
    if (date) {
      setSelectedDate(date);
      setDateString(date.format('YYYY-MM-DD'));
    }
  };

  const handleOk = () => {
    handleClose();
  };

  const handleCancel = () => {
    handleClose();

  };

  return (
    <Sidebar>

      <div className=" mb-6 p-2 mt-6 ">
        <h2 className="text-2xl leading-xl text-[#333] font-semibold">
          Dashboard
        </h2>
        <p className="text-sm text-gray-500">
          <span className="cursor-pointer" onClick={() => navigate("/")}>
          Expenses
          </span>{" "}
          /{" "}
          <span className="cursor-pointer" onClick={() => navigate("/payment")}>
            Add-Expenses
          </span>{" "}
          / <span className="font-bold">Add Customer</span>
        </p>
      </div>

      <div className="p-6 bg-white rounded-lg shadow-lg ml-[19rem] w-[83%]">
        <div className="space-y-6">
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div>
                <label className="block text-gray-700">Primary Currency</label>
                <select className="mt-1 block w-full h-[5vh] border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500">
                  <option>Select Currency</option>
                  <option>USD</option>
                  <option>EUR</option>
                  <option>INR</option>
                </select>
              </div>

              <div>


                <label onClick={handleOpen} className="block text-gray-700">
                  Date
                </label>

                <div onClick={() => setOpen(true)}>
                  <input
                    type="text"   value={dateString} readOnly
  
                    className="mt-1 block w-full h-[5vh] border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>

                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          backgroundColor: "#26A69A",
                          color: "#FFF",
                        }}
                      >
                        <Box
                          sx={{
            
                            width: "250px",
                            display:"flex",
                            flexDirection:"column",
                            justifyContent: "center",
                            textAlign:"justify",
                            alignItems:"flex-start",
                            marginTop:"-20rem",
                            marginLeft:"18px",
    }}
                        >
                          <Typography variant="h6" component="div">
                            {selectedDate.format("YYYY")}
                          </Typography>
                          <Typography
                            variant="h4"
                            component="div"
                            sx={{ fontWeight: "bold" , width: "224px"}}
                          >
                            {selectedDate.format("ddd, MMM DD")}
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            backgroundColor: "#FFF",
                            color: "#000",
                            padding: 2,
                          }}
                        >
                          <DateCalendar
                            value={selectedDate}
                            onChange={handleDateChange}
                            renderLoading={() => <div>Loading...</div>}
                          />
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "flex-end",
                              mt: 1,
                            }}
                          >
                            <Button variant="text" sx={{ color: "#000" }} onClick={handleCancel}>
                              Cancel
                            </Button>
                            <Button
                              variant="text"
                              sx={{ color: "#000", marginLeft: 1 }}
                              onClick={handleOk} >
                              Ok
                            </Button>
                          </Box>
                        </Box>
                      </Box>
                    </LocalizationProvider>
                  </Box>
                </Modal>
              </div>

    
            </div>
          </div>

          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700">Address</label>
                <textarea
                  className="mt-1 block w-full h-[15vh] p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter Phone"
                ></textarea>
              </div>
              <div className="flex flex-col justify-center ">
                <div>
                  <label className="block text-gray-700">
                    Primary Currency
                  </label>
                  <select className="mt-1 block w-full h-[5vh] border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500">
                    <option>Select Currency</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700">
                    Primary Currency
                  </label>
                  <select className="mt-1 block w-full h-[5vh] border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500">
                    <option>Select Currency</option>
                    <option>USD</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div></div>
        </div>

        <div className="flex items-center justify-end ">
          <button className="flex p-2 mt-10 bg-[#7638ff] border-[#7638ff] text-white rounded hover:bg-purple-700 font-semibold text-[13px]">
            {" "}
            Add Customer
          </button>
        </div>
      </div>
    </Sidebar>
  );
};

export default AddExpense;

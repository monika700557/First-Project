import { Calendar } from "lucide-react";
import { useRef, useState } from "react";
import dayjs from "dayjs";
import { Modal } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Button } from "@mui/material";

import { LocalizationProvider, DateCalendar } from "@mui/x-date-pickers";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const DateDropdown = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [calenderopen , setCalenderOpen] = useState(false);

  



  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleClose = () => setCalenderOpen(false);

  const [dateString, setDateString] = useState(dayjs().format("YYYY-MM-DD"));

  const [selectedDate, setSelectedDate] = useState(dayjs());

  // const StyledDatePicker = styled(DatePicker)({
  //   ".MuiInputBase-root": {
  //     marginTop: "-0.5rem",
  //     height: "3rem",
  //     overflow: "hidden",
  //   },
  // });

  const style = {
    position: "absolute",
    top: "210px",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",

    boxShadow: 24,
  };

  const handleDateChange = (date) => {
    if (date) {
      setSelectedDate(date);
      setDateString(date.format("YYYY-MM-DD"));
    }
  };

  const handleOk = () => {
    handleClose();
  };

  return (
    <div className="relative  flex-1">
      <button
        onClick={() => toggleDropdown()}
        className="flex items-center  p-2 font-semibold text-[14px]  border border-gray-100 rounded-md w-full gap-1"
      >
        <Calendar className="text-custom-purple font-semibold w-[20px] " />
        Select Date
      </button>

      {dropdownOpen && (
        <div
          ref={dropdownRef}
          className="absolute z-10 bg-white shadow-lg mt-2 p-4 custom-scrollbar w-[18rem] rounded-md"
        >
          <span className="text-custom-purple font-semibold text-base">
            Date Filter
          </span>
          <ul className="h-[13rem] mt-4 overflow-y-auto pb-3">
            <div>
              <div
                onClick={() => setCalenderOpen(true)}
                className="flex  flex-row "
              >
                <input
                  type="text"
                  placeholder="From"
                  value={dateString}
                  readOnly
                  className="mt-1 block w-full h-[5vh] border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
                <input
                  type="text"
                  placeholder="To"
                  value={dateString}
                  readOnly
                  className="mt-1 block w-full h-[5vh] border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <Modal
                open={calenderopen}
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
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          textAlign: "justify",
                          alignItems: "flex-start",
                          marginTop: "-20rem",
                          marginLeft: "18px",
                        }}
                      >
                        <Typography variant="h6" component="div">
                          {selectedDate.format("YYYY")}
                        </Typography>
                        <Typography
                          variant="h4"
                          component="div"
                          sx={{ fontWeight: "bold", width: "224px" }}
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
                          <Button
                            variant="text"
                            sx={{ color: "#000" }}
                            onClick={handleClose}
                          >
                            Cancel
                          </Button>
                          <Button
                            variant="text"
                            sx={{ color: "#000", marginLeft: 1 }}
                            onClick={handleOk}
                          >
                            Ok
                          </Button>
                        </Box>
                      </Box>
                    </Box>
                  </LocalizationProvider>
                </Box>
              </Modal>
            </div>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DateDropdown;

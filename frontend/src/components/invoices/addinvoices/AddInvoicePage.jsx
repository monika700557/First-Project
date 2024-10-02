import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import {
  CircleChevronLeft,
  ChevronUp,
 Plus,
  Eye,
  CirclePlus,
  Trash2,
  Copy,
} from "lucide-react";
import {
  Grid,
  Button,
  TextField,
  Typography,
  Paper,
  Box,
  Checkbox,
} from "@mui/material";

import { useRef } from "react";

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
  {
    name: "Greg Lynch",
  },
  {
    name: "Greg Lynch",
  },
  {
    name: "Greg Lynch",
  },
  {
    name: "Greg Lynch",
  },
];

const AddInvoicePage = () => {

  const [isDiscountEnabled, setIsDiscountEnabled] = useState(false);

  const handleToggle = () => {
    setIsDiscountEnabled(prevState => !prevState);
  };



  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setUserDropdownOpen(!userDropdownOpen);
  };

  const [expanded, setExpanded] = useState(false);

  // Handler for accordion change
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  // Handler for accordion change

  return (
    <div className="container mx-auto w-full ">
      {/* Header */}
      <div className="flex justify-between items-center mb-6 bg-white py-4  p-2 w-full rounded-md">
        <button className="text-[#7638FF] font-bold flex flex-row gap-2">
          {" "}
          <CircleChevronLeft className="font-bold " /> Back to Invoice List
        </button>
        <div className="space-x-4 flex flex-row ">
          <button className="px-4 py-2  text-[#7638FF]  rounded-md flex flex-row gap-1 font-semibold text-[14px]">
            {" "}
            <Eye className="font-bold text-[14px] w-[20px] h-[20px]" />
            Preview
          </button>
          <button className="px-4 py-3 bg-[#1B2559]  w-[160px]  text-white font-bold  rounded-md hover:bg-[#7638FF]">
            Delete Invoice
          </button>
          <button className="px-4 py-3 bg-[#7638FF] text-white w-[160px] font-bold rounded-md hover:bg-[#1B2559]">
            Save Draft
          </button>
        </div>
      </div>

      {/* Form */}
      <Paper elevation={3} style={{ padding: "24px" }}>
        <Grid
          container
          md={12}
          spacing={2}
          className="pl-2  relative border-b border-gray-200 pb-4 w-full"
        >
          <Grid item md={5} xs={12} sm={6} className="pb-4 w-full">
            <h4 className="font-semibold   text-sm">Customer Name</h4>
            <button
              onClick={() => toggleDropdown()}
              className="flex items-center p-2 font-semibold text-[14px] gap-1 mt-3 h-[6vh]  border-[#7638FF] border-2 rounded-md w-full"
            >
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
                <ul className="h-[13rem] mt-4  w-[30rem] overflow-y-auto pb-3">
                  {Users.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center mb-[15px] space-x-2 font-[500] text-sm  text-[#1B2559]"
                    >
                      <input
                        type="checkbox"
                        className="w-4 h-4"
                        id={`user-${i}`}
                      />
                      <label
                        className=" font-semibold text-black "
                        htmlFor={`user-${i}`}
                      >
                        {item.name}
                      </label>
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
            <h4 className="font-semibold text-black mt-5 text-sm">PO Number</h4>
            <div className="flex w-full  h-[5vh]  text-center align-middle  ">
              <input
                type="text"
                placeholder="Enter PO Number "
                className="font-semibold  w-full py-4 pl-[6px] text-[14px] text-black border border-gray-200 rounded-lg "
              />
            </div>
          </Grid>

          <Grid item md={5} xs={12} sm={6}>
            <div className="">
              <h4 className="text-[20px] font-semibold text-black">
                Invoice details
              </h4>
              <div className="bg-white border border-gray-200 rounded-lg  h-[16vh]">
                <div className="flex w-full  py-4 p-6 h-[8vh] border-b border-gray-200 ">
                  <span className="font-semibold text-[14px] text-black">
                    Invoice No.{" "}
                    <a href="" className="font-semibold text-[#7638FF]  mr-4">
                      IN093439#@09
                    </a>
                  </span>
                </div>
                <div className="flex  flex-row w-full    h-[8vh] ">
                  <span className="font-semibold text-[14px] text-black  py-4 p-6  border-r border-gray-200">
                    Date{" "}
                    <a href="" className="font-semibold text-[#7638FF]  mr-4">
                      Aug 29, 2024
                    </a>
                  </span>
                  <span className="font-semibold text-[14px] text-black py-4 p-6">
                    Due Date{" "}
                    <a href="" className="font-semibold text-[#7638FF]  mr-4">
                      2024
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </Grid>

          <Grid item md={2} xs={12} sm={6}>
            <div className="flex w-full flex-col pt-[50px]">
              <label className="flex items-center space-x-2 w-full">
                <input type="checkbox" className="form-checkbox" />
                <span className="font-semibold">Enable Tax</span>
              </label>

              <label className="flex items-center space-x-2 w-full">
                <input type="checkbox" className="form-checkbox" />
                <span className="font-semibold">Recurring Invoice</span>
              </label>
            </div>
          </Grid>
        </Grid>

        {/* Invoice From and To */}
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6}>
            <div className="mt-[1rem]">
              <div className="flex flex-row  ">
                <span className="font-bold text-lg text-black ">
                  Invoice From{" "}
                  <a href="" className="text-sm text-custom-purple ml-6 ">
                    {" "}
                    Edit address
                  </a>
                </span>
              </div>

              <div className="flex flex-col mt-6">
                <span className="font-semibold text-sm "> Darren Elder</span>
                <span className="font-semibold text-sm ">
                  806 Twin Willow Lane, Old Forge
                </span>
                <span className="font-semibold text-sm ">Newyork, USA</span>
              </div>
            </div>
          </Grid>

          <Grid item xs={12} sm={6}>
            <div className="mt-[1rem] ml-[-14rem]">
              <div className="flex flex-row  ">
                <span className="font-bold text-lg text-black ">
                  Invoice To
                </span>
              </div>

              <div className="flex flex-col mt-6">
                <span className="font-semibold text-sm "> Darren Elder</span>
                <span className="font-semibold text-sm ">
                  806 Twin Willow Lane, Old Forge
                </span>
                <span className="font-semibold text-sm ">Newyork, USA</span>
              </div>
            </div>
          </Grid>
        </Grid>

        {/* Item Details */}
        <h2 className="text-custom-purple font-bold text-lg mt-8">
          Item Details{" "}
        </h2>
        <Grid container spacing={2} marginBottom={3}>
          <div className="w-full">
            <table className="w-full table-auto  border-collapse mt-8">
              <thead className="border-b border-gray-300 py-6 h-[7vh] p- bg-[#F8F9FA]">
                <tr className=" text-gray-700 text-left pl-4">
                  <th className="p-2">Items</th>
                  <th className="p-2 ">Quantity</th>
                  <th className="p-2 ">Price</th>
                  <th className="p-2 ">Amount</th>
                  <th className="p-2">Actions</th>
                  <th className="p-2">Actions</th>
                  <th className="p-2">Actions</th>
                </tr>
              </thead>

              <tbody className="p-6 mt-6">
                <tr className="mt-4 border-b border-gray-300 hover:bg-[#f7f8f9] transition-colors duration-200">
                  <td className="p-4">
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300"
                    />
                  </td>
                  <td className="p-4">
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300"
                    />
                  </td>
                  <td className="p-4">
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300"
                    />
                  </td>
                  <td className="p-4 ">
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300"
                    />
                  </td>
                  <td className="p-4 ">
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300 "
                    />
                  </td>
                  <td className="p-4 ">
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300"
                    />
                  </td>
                  <td className="p-4 flex justify-end items-center gap-2 ">
                    <CirclePlus className=" rounded-full w-[20px] h-[20px] text-custom-purple" />
                    <Copy className=" rounded-full   w-[20px] text-gray-300 h-[20px]" />
                    <Trash2 className=" rounded-full  text-red-500 w-[20px] h-[20px] " />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Grid>

       
        <Paper  style={{ boxShadow: 'none' }}> 
      <Grid container spacing={2} className="w-full">
        <Grid item md={6} xs={12} sm={6}>
          <div className="flex flex-col">
            <h2 className="text-lg font-semibold text-black">More Fields</h2>



            <div className="flex flex-col border border-gray-200 rounded-lg h-[16vh] p-4 mt-3">
              <span className="font-semibold text-black text-sm mb-4">Payment Details</span>
             
              <a href="#" className=" text-white align-middle text-centerj justify-center items-center rounded p-[30px]   font-bold hover:underline flex flex-row gap-2 bg-[#7638ff] w-[266px] h-[11vh]"><CirclePlus />Add Bank Details</a>
            </div>

            <div className="mt-8 space-y-4">
      <Accordion
        className="border border-gray-200 rounded-lg shadow-none"
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        <AccordionSummary
          expandIcon={expanded === 'panel1' ? <ChevronUp /> : <Plus />}
          aria-controls="panel1-content"
          id="panel1-header"
          className="border-b border-gray-200 rounded-t-lg"
        >
          Add Terms & Conditions
        </AccordionSummary>

        <div>
        <AccordionDetails>
          {/* Conditional rendering of the input box */}
          {expanded === 'panel1' && (
            <textarea 
              className="mt-2 p-2  shadow-slate-100   rounded w-[30rem] h-[5rem]" 
            />
          )}
        </AccordionDetails>
        </div>
       
      </Accordion>

      <Accordion
        className="border border-gray-200 rounded-lg shadow-none"
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}
      >
        <AccordionSummary
          expandIcon={expanded === 'panel2' ? <ChevronUp /> : <Plus />}
          aria-controls="panel2-content"
          id="panel2-header"
          className="border-b border-gray-200 rounded-t-lg"
        >
          Add Notes
        </AccordionSummary>
        <AccordionDetails>
          {/* Conditional rendering of the input box */}
          {expanded === 'panel2' && (
            <input 
              type="text" 
              placeholder="Enter notes" 
              className="mt-2 p-2 border border-gray-300 rounded" 
            />
          )}
        </AccordionDetails>
      </Accordion>
    </div>


          </div>
        </Grid>

        {/* Second Grid item */}
        <Grid item md={6} xs={12} sm={6}>
          
            <h2 className="text-lg font-semibold text-black">Summary</h2>



            <div className=" border border-gray-200 rounded-lg h-[16vh] p-4">

              <div className=''>
                <p className='relative flex justify-between font-semibold text-sm text-black'>Taxable Amount <span>#21</span></p>
              
                <p className="flex items-center justify-between font-semibold text-sm">
      <div className="flex items-center space-x-2">
        <span>Invoice viewed</span>

        <div
          className={`w-11 h-6 flex items-center rounded-full cursor-pointer ${
            isDiscountEnabled ? 'bg-blue-500' : 'bg-gray-300'
          }`}
          onClick={handleToggle}
        >
          <div
            className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${
              isDiscountEnabled ? 'translate-x-5' : 'translate-x-0'
            }`}
          />
        </div>
      </div>

      <span>$21</span>
    </p>
              </div>
             
            </div>






        
        </Grid>
      </Grid>
    </Paper>
  
        {/* Summary */}

        {/* Save Button */}
        <Box textAlign="right">
          <Button variant="contained" color="primary">
            Save Invoice
          </Button>
        </Box>
      </Paper>
    </div>
  );
};

export default AddInvoicePage;

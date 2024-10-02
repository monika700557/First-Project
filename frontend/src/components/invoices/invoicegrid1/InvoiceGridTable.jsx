import React, { useState } from 'react';
import { Grid, Button } from "@mui/material";
import {
  Settings,
  CirclePlus,
  Banknote,
  EllipsisVertical,
  LoaderCircle,FilePenLine,Eye ,Trash2
} from "lucide-react";

const InvoiceGridTable = () => {

    const [dropdownOpen, setDropdownOpen] = useState(null); 

    const toggleDropdown = (index) => {
        setDropdownOpen(dropdownOpen === index ? null : index);
      };

      
  const invoices = [
    {
      name: " Barbara Moore",
      id: "IN093439#0f9",
      name: "Barbara Moore",
      amount: "$1,54,220",
      dueDate: "23 Mar, 2022",
      status: "Paid",
      statusColor: "bg-[#008F64]",
      imgSrc:
        "https://kanakku.dreamstechnologies.com/html/template-materializecss/assets/img/profiles/avatar-04.jpg",
    },
    {
      name: " Monika Sharma",
      id: "IN093439#sd09",
      name: "Barbara Moore",
      amount: "$1,54,220",
      dueDate: "23 Mar, 2022",
      status: "Overdue",
      statusColor: "bg-[#FF0000]",
      imgSrc:
        "https://kanakku.dreamstechnologies.com/html/template-materializecss/assets/img/profiles/avatar-04.jpg",
    },
    {
      name: " Nikita Jain",
      id: "IN09343q9#09",
      name: "Barbara Moore",
      amount: "$1,54,220",
      dueDate: "23 Mar, 2022",
      status: "Canceled",
      statusColor: "bg-[#7638FF]",
      imgSrc:
        "https://kanakku.dreamstechnologies.com/html/template-materializecss/assets/img/profiles/avatar-04.jpg",
    },
    {
      name: " Charlie Chaplin",
      id: "IN0934w39#09",
      name: "Barbara Moore",
      amount: "$1,54,220",
      dueDate: "23 Mar, 2022",
      status: "Sent",
      statusColor: "bg-[#2196f3]",
      imgSrc:
        "https://kanakku.dreamstechnologies.com/html/template-materializecss/assets/img/profiles/avatar-04.jpg",
    },
    {
      name: "Elizabeth Taylor",
      id: "IN093439e#09",
      name: "Barbara Moore",
      amount: "$1,54,220",
      dueDate: "23 Mar, 2022",
      status: "Canceled",
      statusColor: "bg-[#7638FF]",
      imgSrc:
        "https://kanakku.dreamstechnologies.com/html/template-materializecss/assets/img/profiles/avatar-04.jpg",
    },
    {
      id: "IN093439t#10",
      name: "Karlene Chaideza",
      amount: "$1,222",
      dueDate: "18 Mar, 2022",
      status: "Sent",
      statusColor: "bg-[#2196f3]",
      imgSrc:
        "https://kanakku.dreamstechnologies.com/html/template-materializecss/assets/img/profiles/avatar-04.jpg",
      overdueText: "Overdue 14 days",
    },
    {
      id: "IN093439#1l1",
      name: "Russell Copeland",
      amount: "$3,470",
      dueDate: "10 Mar, 2022",
      status: "Overdue",
      statusColor: "bg-[#FF0000]",
      imgSrc:
        "https://kanakku.dreamstechnologies.com/html/template-materializecss/assets/img/profiles/avatar-04.jpg",
    },
    {
      id: "IN093439#a10",
      name: "Karlene Chaidezm",
      amount: "$1,222",
      dueDate: "18 Mar, 2022",
      status: "Paid",
      statusColor: "bg-[#008F64]",
      imgSrc:
        "https://kanakku.dreamstechnologies.com/html/template-materializecss/assets/img/profiles/avatar-04.jpg",
      overdueText: "Overdue 14 days",
    },
  ];

  return (
    <>
      <div className="flex flex-row justify-end items-end p-4 w-full">
        <a
          href=" "
          className="font-bold text-center  flex align-middle items-center justify-center text-[#7638FF] mr-[16px] py-4"
        >
          <Settings />
        </a>

        <a
          href=""
          className="flex flex-row gap-3 bg-[#1B2559] py-4 font-bold text-white text-center justify-center w-[170px] hover:bg-[#7638FF] rounded-md"
        >
          <CirclePlus /> New Invoices
        </a>
      </div>

      <Grid container md={12} spacing={2} className="pl-2  ">
        <Grid container spacing={4} className="">
          {invoices.map((invoice, index) => (
            <Grid key={index} item xs={12} sm={6} md={4} lg={3}>

              <div className=" mt-6 rounded-lg shadow-md">
                <div className="flex justify-between items-center bg-white mb-3 p-4 ">
                  <span className="font-bold">{invoice.id}</span>

                   <div className="relative">
                    <button
                      className="text-black-500 hover:text-blue-700"
                      onClick={() => toggleDropdown(index)}
                    >
                      <EllipsisVertical className="text-black font-bold" />
                    </button>
                    {dropdownOpen === index && (
                      <div className="absolute bg-white border border-gray-300 rounded shadow-lg p-2 mt-2 right-0 w-40">
                        <a className="w-full text-left px-2 py-1 flex flex-row gap-1 hover:bg-gray-100 font-semibold text-sm"> <FilePenLine  className="font-semibold h-[15px] w-[20px] mt-0 " /> Edit</a>
                        <a className="w-full text-left px-2 py-1 flex flex-row gap-1 hover:bg-gray-100 font-semibold text-sm"> <Eye className="font-semibold h-[15px] w-[20px] mt-0" />View</a>

                        <a className="w-full text-left px-2 py-1 flex flex-row gap-1 hover:bg-gray-100 font-semibold text-sm">  <Trash2  className="font-semibold h-[15px] w-[20px] mt-0" />Delete</a>
                      </div>
                    )}
                  </div>



                  {/* <Button>
                    <EllipsisVertical className="text-black font-bold" />
                  </Button> */}
                </div>

                <div className="flex items-center p-4  bg-[#F7F7FF]   mb-4">
                  <img
                    src={invoice.imgSrc}
                    alt={invoice.name}
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <h3 className="text-lg font-medium">{invoice.name}</h3>
                  </div>
                </div>

                <div className="flex justify-between flex-row  w-full items-center bg-white p-4 ">
                  <div className="  ">
                    <span className=" text-gray-600 flex gap-1">
                      {" "}
                      <Banknote /> Amount:
                    </span>

                    <h2 className="font-semibold"> {invoice.amount}</h2>
                  </div>

                  <div className="">
                    <span className=" text-gray-600 flex gap-1">
                      {" "}
                      <Banknote /> Due Date:
                    </span>

                    <h2 className="font-semibold"> {invoice.dueDate}</h2>
                  </div>
                </div>

                <div className="flex justify-start text-center items-center bg-white w-auto p-[20px] gap-40">
                  <span
                    className={`text-white p-2 text-[13px] text-center rounded ${invoice.statusColor} w-[70px] h-[30px] flex items-center justify-center`}
                  >
                    {invoice.status}
                  </span>
                  {invoice.overdueText && (
                    <span className="text-red-500 text-sm justify-end font-semibold">
                      {invoice.overdueText}
                    </span>
                  )}
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </Grid>

      <div className="flex justify-center mt-6">
        <a
          href=""
          className="flex flex-row gap-3 bg-transparent border-2 border-solid border-[#3E45EB]  py-4 font-bold text-[#3E45EB] text-center justify-center w-[170px] hover:bg-[#3E45EB]  hover:text-white rounded-md"
        >
          <LoaderCircle /> Loading More
        </a>
      </div>
    </>
  );
};

export default InvoiceGridTable;

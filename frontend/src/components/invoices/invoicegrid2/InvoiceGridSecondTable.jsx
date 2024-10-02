import React, { useState } from "react";
import { Grid, Button } from "@mui/material";
import {

  Banknote,
  LoaderCircle,
  Eye,Plus, Filter ,ArrowDownToLine   
} from "lucide-react";

const InvoiceGridSecondTable = () => {
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const toggleDropdown = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  const invoices = [
    {
      name: "Barbara Moore",
      id: "IN093439#09",
      amount: "$118",
      dueDate: "23 Mar, 2022",
      status: "Paid",
      statusColor: "bg-success-light-bg", // Custom background color
      textColor: "text-success-text", // Custom text color
      imgSrc: "https://kanakku.dreamstechnologies.com/html/template-materializecss/assets/img/profiles/avatar-04.jpg",
    },
    {
      name: "Barbara Moore",
      id: "IN093439#09",
      amount: "$118",
      dueDate: "23 Mar, 2022",
      status: "Overdue",
      statusColor: "bg-info-light", // Custom background color
      textColor: "text-info-dark", // Custom text color
      imgSrc: "https://kanakku.dreamstechnologies.com/html/template-materializecss/assets/img/profiles/avatar-04.jpg",
    },
    {
      name: "Barbara Moore",
      id: "IN093439#09",
      amount: "$118",
      dueDate: "23 Mar, 2022",
      status: "Canceled",
      statusColor: "bg-warning-light", // Custom background color
      textColor: "text-warning-dark", // Custom text color
      imgSrc: "https://kanakku.dreamstechnologies.com/html/template-materializecss/assets/img/profiles/avatar-04.jpg",
    },
    {
      name: "Barbara Moore",
      id: "IN093439#09",
      amount: "$118",
      dueDate: "23 Mar, 2022",
      status: "Sent",
      statusColor: "bg-danger-light", // Custom background color
      textColor: "text-danger-dark", // Custom text color
      imgSrc: "https://kanakku.dreamstechnologies.com/html/template-materializecss/assets/img/profiles/avatar-04.jpg",
    },
    {
      name: "Barbara Moore",
      id: "IN093439#09",
      amount: "$118",
      dueDate: "23 Mar, 2022",
      status: "Partially Paid",
      statusColor: "bg-info-light", // Custom background color (same as second)
      textColor: "text-info-dark", // Custom text color (same as second)
      imgSrc: "https://kanakku.dreamstechnologies.com/html/template-materializecss/assets/img/profiles/avatar-04.jpg",
    },
    {
      id: "IN093439#10",
      name: "Karlene Chaidez",
      amount: "$118",
      dueDate: "18 Mar, 2022",
      status: "Overdue",
      statusColor: "bg-danger-light", // Custom background color
      textColor: "text-danger-dark", // Custom text color
      imgSrc: "https://kanakku.dreamstechnologies.com/html/template-materializecss/assets/img/profiles/avatar-04.jpg",
      overdueText: "Overdue 14 days",
    },
    {
      id: "IN093439#11",
      name: "Russell Copeland",
      amount: "$118",
      dueDate: "10 Mar, 2022",
      status: "Overdue",
     
      statusColor: "bg-success-light-bg", // Custom background color
      textColor: "text-success-text", // Custom text color
      imgSrc: "https://kanakku.dreamstechnologies.com/html/template-materializecss/assets/img/profiles/avatar-04.jpg",
    },
    {
      id: "IN093439#10",
      name: "Karlene Chaidez",
      amount: "$118",
      dueDate: "18 Mar, 2022",
      status: "Paid",
      statusColor: "bg-danger-light", // Custom background color
      textColor: "text-danger-dark", // Custom text color
      imgSrc: "https://kanakku.dreamstechnologies.com/html/template-materializecss/assets/img/profiles/avatar-04.jpg",
      overdueText: "Overdue 14 days",
    },
   
   
     

  ]

  return (
    <>
      <div className="flex justify-between items-center mb-6 ">
        <div>
          <h2 className="text-2xl font-bold">Invoice Grid </h2>
          <p className="text-gray-600">Dashboard / Invoice Grid</p>
        </div>
        <div className="flex space-x-2">
          <button
          
            className="flex items-center justify-center p-2 bg- bg-[#7638ff] text-white rounded hover:bg-[#7638ff] w-[2.5rem] h-[2.5rem]"
          >
            <Plus size={20} className="font-semibold" />
          </button>
          <button className="flex items-center justify-center p-2 bg- bg-[#7638ff] text-white rounded hover: bg-[#7638ff] w-[2.5rem] h-[2.5rem]">
            <Filter size={20} className="font-semibold" />
          </button>
        </div>
      </div>

   
      <Grid container md={12} spacing={2} className="pl-2  ">
        <Grid container spacing={4} className="">
          {invoices.map((invoice, index) => (
            <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
              <div className=" mt-6 rounded-lg shadow-md bg-white">
             
                <div className="flex items-center p-4     mb-[-1rem]">
                  <img
                    src={invoice.imgSrc}
                    alt={invoice.name}
                    className="w-8 h-8 rounded-full mr-3"
                  />
                  <div>
                    <h3 className="text-sm font-medium">{invoice.name}</h3>
                  </div>
                </div>

                <div className=" flex flex-row justify-start items-start text-center p-4 mb-[-1rem] ">
                  <a href="" className="text-[#3E45EB]   underline  text-sm">#20220001</a>
                </div>

                <div className="flex justify-between flex-row  w-full items-center bg-white p-4  border-b border-gray-200">
                  <div className="  ">
                    <span className=" text-[#757575] font-semibold flex gap-1 text-[13px] ">
                      {" "}
                      <Banknote /> Amount:
                    </span>

                    <h2 className="font-bold text-[14px] "> {invoice.amount}</h2>
                  </div>

                  <div className="">
                    <span className=" text-[#757575] font-semibold flex gap-1 text-[13px] ">
                      {" "}
                      <Banknote /> Due Date:
                    </span>

                    <h2 className="font-bold text-[14px]"> {invoice.dueDate}</h2>
                  </div>
                </div>

                <div className="flex flex-row text-center items-center bg-white w-auto p-[20px] gap-40">

                  <div className="">
                  <span
                    className={` p-2 text-[1] text-center rounded ${invoice.statusColor} ${invoice.textColor}  font-bold text-[12px] w-[101px] h-[12px] flex items-center justify-center`}
                  >
                    {invoice.status}
                  </span>
                  </div>
                  


                  <div className="flex   w-[20rem] justify-end items-end gap-2">
                    <a href="" className="bg-[#f8f9fa] text-[#a6a6a6] w-[33px] h-[33px] flex items-center justify-center border border-[#e6e6e6] rounded-full"> <Eye   className="w-[25px] font-bold  h-[25px] font-sm py-1"/> </a>
                    <a href="" className="bg-[#f8f9fa] text-[#a6a6a6] w-[33px] h-[33px] flex items-center justify-center border border-[#e6e6e6] rounded-full"> <ArrowDownToLine   className="w-[25px] font-bold  h-[25px] font-sm py-1"/> </a>
                  </div>




             
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </Grid>

   
    </>
  );
};

export default InvoiceGridSecondTable;

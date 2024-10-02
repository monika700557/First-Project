import { Grid, Paper } from "@mui/material";
import styled from "styled-components";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

const InvoicesWidgets = () => {
  return (
    <>
      <Grid container spacing={2} className="pl-2">
        <Grid item md={3} xs={12} className=" align-middle text-center">
          <div className="bg-white py-3 rounded-sm">
            <div className="flex flex-row justify-between p-4">
              <img className="w-[50px]" src="https://kanakku.dreamstechnologies.com/html/template-materializecss/assets/img/icons/invoices-icon1.svg" />
              <span className="font-bold text-2xl text-[#7638FF] flex-wrap">
                $8,78,797
              </span>
            </div>

            <p className="text-[#1b2559] font-bold text-sm  align-middle text-center flex justify-start ml-[1rem]">
              {" "}
              All Invoices
              <span className="font-bold text-[10px] mt-[2px] ml-[12px]">
                50
              </span>
            </p>
          </div>
        </Grid>

        <Grid item md={3} xs={12} className=" align-middle text-center">
          <div className="bg-white py-3 rounded-sm">
            <div className="flex flex-row justify-between p-4">
              <img className="w-[50px]" src="https://kanakku.dreamstechnologies.com/html/template-materializecss/assets/img/icons/invoices-icon2.svg" />
              <span className="font-bold text-2xl text-[#7638FF] flex-wrap">
                $8,78,797
              </span>
            </div>

            <p className="text-[#1b2559] font-bold text-sm  align-middle text-center flex justify-start ml-[1rem]">
              {" "}
              Paid Invoices
              <span className="font-bold text-[10px] mt-[2px] ml-[12px]">
                50
              </span>
            </p>
          </div>
        </Grid>
        <Grid item md={3} xs={12} className=" align-middle text-center">
          <div className="bg-white py-3 rounded-sm">
            <div className="flex flex-row justify-between p-4">
              <img className="w-[50px]" src="https://kanakku.dreamstechnologies.com/html/template-materializecss/assets/img/icons/invoices-icon3.svg" />
              <span className="font-bold text-2xl text-[#7638FF] flex-wrap">
                $8,78,797
              </span>
            </div>

            <p className="text-[#1b2559] font-bold text-sm  align-middle text-center flex justify-start ml-[1rem]">
              {" "}
              UnPaid Invoices
              <span className="font-bold text-[10px] mt-[2px] ml-[12px]">
                50
              </span>
            </p>
          </div>
        </Grid>
        <Grid item md={3} xs={12} className=" align-middle text-center">
          <div className="bg-white py-3 rounded-sm">
            <div className="flex flex-row justify-between p-4">
              <img className="w-[50px]" src="https://kanakku.dreamstechnologies.com/html/template-materializecss/assets/img/icons/invoices-icon4.svg" />
              <span className="font-bold text-2xl text-[#7638FF] flex-wrap">
                $8,78,797
              </span>
            </div>
            <p className="text-[#1b2559] font-bold text-sm  align-middle text-center flex justify-start ml-[1rem]">
              {" "}
              Cancelled Invoices
              <span className="font-bold text-[10px] mt-[2px] ml-[12px]">
                50
              </span>
            </p>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default InvoicesWidgets;

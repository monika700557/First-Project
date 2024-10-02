import { Grid } from "@mui/material";
import { DollarSign, ArrowDown, ArrowUp, Users ,FileChartColumn , File} from "lucide-react";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";

const BorderLinearProgress1 = styled(LinearProgress)(({ theme }) => ({
  height: 7,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 100 : 700],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#ffb800" : "#308fe8",
  },
}));
const BorderLinearProgress2 = styled(LinearProgress)(({ theme }) => ({
  height: 7,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 100 : 700],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#42cdff" : "#308fe8",
  },
}));
const BorderLinearProgress3 = styled(LinearProgress)(({ theme }) => ({
  height: 7,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 100 : 700],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#52fb6a" : "#308fe8",
  },
}));
const BorderLinearProgress4 = styled(LinearProgress)(({ theme }) => ({
  height: 7,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 100 : 700],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#f555ff" : "#308fe8",
  },
}));

export default function Widget() {
  return (
    <>
      <Grid container md={12} sm={12}  spacing={2} className="pl-4 ">
        <Grid item md={3} sm={12} xs={12}>
          <div className="align-middle  bg-white px-6 py-4 rounded-[20px]  " style={{
    boxShadow: '0 0 13px 0 rgba(82, 63, 105, .05)',
  }}>
            <div className="flex gap-4 items-center">
              <div className="bg-[#ffeec3] inline-flex justify-center text-[1.875rem]  align-middle items-center w-[4rem] h-[4rem] rounded-[10px]">
              <span className="font-black">
      <DollarSign 
        color="#ffb800" 
        strokeWidth={3} 
        width="2rem" height="2rem" // Inline styles for size and color
      />
    </span>
                
              </div>
              <div className="text-[#455560] flex flex-col font-semibold">
                <span className="font-semibold text-[15px]">Amount Due</span>
                <span>1,642</span>
              </div>
            </div>
            <div className="my-4">
              <BorderLinearProgress1 variant="determinate" value={45} />
            </div>
            <div className="flex items-center gap-2">
              <span className="flex text-[#FF0000] items-center">
                <ArrowDown color="#FF0000" size={20} />
                <span className="text-xs font-semibold">1.15%</span>
              </span>
              <span className="text-xs font-semibold text-[#757575]">
                since last week
              </span>
            </div>
          </div>
        </Grid>
        {/* Second Card  */}
        <Grid item md={3} sm={12} xs={12}>
          <div className="align-middle  bg-white px-6 py-4 rounded-[20px]" style={{
    boxShadow: '0 0 13px 0 rgba(82, 63, 105, .05)',
  }}>
            <div className="flex gap-4 items-center">
              <div className="bg-[#d1f3ff] inline-flex justify-center text-[1.875rem]  align-middle items-center w-[4rem] h-[4rem] rounded-[10px]">
                <Users width="2rem" height="2rem" color="#42cdff" strokeWidth={3} />
              </div>
              <div className="text-[#455560] flex flex-col font-semibold">
                <span>Customers</span>
                <span>3,642</span>
              </div>
            </div>
            <div className="my-4">
              <BorderLinearProgress2 variant="determinate" value={20} />
            </div>
            <div className="flex items-center gap-2">
              <span className="flex text-[#22cc62] items-center">
                <ArrowUp color="#22cc62 " size={20} />
                <span className="text-xs font-semibold">1.15%</span>
              </span>
              <span className="text-xs font-semibold text-[#757575]">
                since last week
              </span>
            </div>
          </div>
        </Grid>
        {/* Third Card  */}
        <Grid item md={3} sm={12} xs={12}>
          <div className="align-middle  bg-white px-6 py-4 rounded-[20px]" style={{
    boxShadow: '0 0 13px 0 rgba(82, 63, 105, .05)',
  }}>
            <div className="flex gap-4 items-center">
              <div className="bg-[#ceffd5] inline-flex justify-center text-[1.875rem]  align-middle items-center w-[4rem] h-[4rem] rounded-[10px]">
              <FileChartColumn width="2rem" height="2rem"  color="#52fb6a" strokeWidth={3} />
              </div>
              <div className="text-[#455560] flex flex-col font-semibold">
                <span>Invoices</span>
                <span>1,041</span>
              </div>
            </div>
            <div className="my-4">
              <BorderLinearProgress3 variant="determinate" value={40} />
            </div>
            <div className="flex items-center gap-2">
              <span className="flex text-[#22cc62] items-center">
                <ArrowUp color="#22cc62" size={20} />
                <span className="text-xs font-semibold">3.77%</span>
              </span>
              <span className="text-xs font-semibold text-[#757575]">
                since last week
              </span>
            </div>
          </div>
        </Grid>
        {/* Fourth Card  */}
        <Grid item md={3} sm={12} xs={12}>
          <div className="align-middle text-center bg-white px-6 py-4 rounded-[20px]" style={{
    boxShadow: '0 0 13px 0 rgba(82, 63, 105, .05)',
  }}>
            <div className="flex gap-4 items-center">
              <div className="bg-[#fccaff] inline-flex justify-center text-[1.875rem]  align-middle items-center w-[4rem] h-[4rem] rounded-[10px]">
              <File  width="2rem" height="2rem" color="#f555ff" strokeWidth={3} />
              </div>
              <div className="text-[#455560] flex flex-col font-semibold">
                <span>Estimates</span>
                <span>2,150</span>
              </div>
            </div>
            <div className="my-4">
              <BorderLinearProgress4 variant="determinate" value={30} />
            </div>
            <div className="flex items-center gap-2">
              <span className="flex text-[#22cc62] items-center">
                <ArrowUp color="#22cc62" size={20} />
                <span className="text-xs font-semibold">3.77%</span>
              </span>
              <span className="text-xs font-semibold text-[#757575]">
                since last week
              </span>
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  );
}

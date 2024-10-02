import Sidebar from "../../components/dashboard/sidebar/Sidebar";
import Widget from "../../components/dashboard/widget/Widget";
import BarChart from "../../components/dashboard/barchart/BarChart";
import DonutChart from "../../components/dashboard/chart/DonutChart";
import Table1 from "../../components/dashboard/firsttable/Table1";
import Table2 from "../../components/dashboard/secondtable/Table2";
import { Grid } from "@mui/material";

export default function Home() {
  return (
    <>
      <Sidebar>
        <Widget />
        <Grid container spacing={2} sx={{ p: 2 }}>
          <Grid item xs={12} sm={12} md={8}>
            <BarChart />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <DonutChart />
          </Grid>
        </Grid>

        <Grid container spacing={2} sx={{ p: 2 }}>
          <Grid item xs={12} sm={12} md={6}>
            <Table1 />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Table2 />
          </Grid>
        </Grid>
      </Sidebar>
    </>
  );
}

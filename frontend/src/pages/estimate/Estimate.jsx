import React from "react";
import Sidebar from "../../components/dashboard/sidebar/Sidebar";
import EstimateHeader from "../../components/estimates/estimatesHeader/EstimateHeader";
import EstimateTable from "../../components/estimates/estimateEnteries/EstimateTable";

export default function Estimate() {
  return (
    <>
      <Sidebar>
        <div className="p-4">
        <EstimateHeader />
          <EstimateTable />
         
        </div>
      </Sidebar>
    </>
  );
}
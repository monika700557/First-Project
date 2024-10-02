import React from "react";
import Sidebar from "../../components/dashboard/sidebar/Sidebar";
import SalesHeader from "../../components/reports/sales/salesheader/SalesHeader";
import SalesEntry from "../../components/reports/sales/salesentry/SalesEntry";

export default function SalesReport() {
  return (
    <>
      <Sidebar>
        <div className="p-4">
          <SalesHeader />
          <SalesEntry />
        </div>
      </Sidebar>
    </>
  );
}
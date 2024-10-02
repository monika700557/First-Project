import React from "react";
import CustomerTable from "../../components/customers/customerEnteries/CustomerTable";
import Sidebar from "../../components/dashboard/sidebar/Sidebar";
import CustomerHeader from "../../components/customers/customerHeader/CustomerHeader";

export default function Home() {
  return (
    <>
      <Sidebar>
        <div className="p-4">
          <CustomerHeader />
          <CustomerTable />
        </div>
      </Sidebar>
    </>
  );
}
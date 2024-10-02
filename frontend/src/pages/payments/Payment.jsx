import React from "react";
import PaymentEntryTable from "../../components/payment/paymentEnteries/PaymentEntryTable";
import Sidebar from "../../components/dashboard/sidebar/Sidebar";
import PaymentHeader from "../../components/payment/paymentHeader/PaymentHeader";
 

export default function payment() {
  return (
    <>
      <Sidebar>
        <div className="p-4">
          <PaymentHeader />
          <PaymentEntryTable />
        </div>
      </Sidebar>
    </>
  );
}
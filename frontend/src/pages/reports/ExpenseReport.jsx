import React from "react";
import ExpenseReportTable from "../../components/reports/expensreport/expensereporttable/ExpenseReportTable";
import ExpenseReportHeader from "../../components/reports/expensreport/expensereportheader/ExpenseReportHeader";
import Sidebar from "../../components/dashboard/sidebar/Sidebar";

export default function ExpenseReport() {
  return (
    <>
      <Sidebar>
        <div className="p-4">
          <ExpenseReportHeader />
          <ExpenseReportTable />
        </div>
      </Sidebar>
    </>
  );
}

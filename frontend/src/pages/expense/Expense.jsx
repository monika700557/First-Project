import React from "react";
import ExpenseEntryTable from "../../components/expenses/expenseEnteries/ExpenseEntryTable";
import ExpenseHeader from "../../components/expenses/expenseHeader/ExpenseHeader";
import Sidebar from "../../components/dashboard/sidebar/Sidebar";

export default function payment() {
  return (
    <>
      <Sidebar>
        <div className="p-4">
          <ExpenseHeader />
          <ExpenseEntryTable />
        </div>
      </Sidebar>
    </>
  );
}

import React from "react";
import Sidebar from "../../components/dashboard/sidebar/Sidebar";
import UserTableHeader from "../../components/usertable/UserTableHeader";
import UserTable from "../../components/usertable/UserTable";
 

export default function User() {
  return (
    <>
      <Sidebar>
        <div className="p-4">
        <UserTableHeader />
        <UserTable />

         
        </div>
      </Sidebar>
    </>
  );
}
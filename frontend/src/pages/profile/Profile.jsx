import React from "react";
import Sidebar from "../../components/dashboard/sidebar/Sidebar";
import ProfilePage from "../../components/profilepage/ProfilePage";
 

export default function payment() {
  return (
    <>
      <Sidebar>
        <div className="p-4">
          <ProfilePage />
         
        </div>
      </Sidebar>
    </>
  );
}
import { React, useState } from "react";
import Sidebar from "../../components/dashboard/sidebar/Sidebar";
import ItemsHeader from "../../components/items/itemsHeader/ItemsHeader";
import FirstEntryTable from "../../components/items/itemsEnteries/FirstEntryTable";
import SecondEntryTable from "../../components/items/itemsEnteries/SecondEntryTable";
import { useNavigate } from "react-router-dom";

export default function Item() {
  const [activeTab, setActiveTab] = useState("allItems");

  return (
    <>
      <Sidebar>
        <div>
          <ItemsHeader activeTab={activeTab} setActiveTab={setActiveTab} />

          <div>
            {activeTab === "allItems" && <FirstEntryTable />}
            {activeTab === "items-category" && <SecondEntryTable />}
          </div>
        </div>
      </Sidebar>
    </>
  );
}

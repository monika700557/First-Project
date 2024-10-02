import React, { useState } from 'react';


import Sidebar from "../../components/dashboard/sidebar/Sidebar";
import TaxType from '../../components/settings/taxtype/TaxType';
import InvoiceSettingSidebar from '../../components/invoices/invoicesettings/invoicesettingnavbar/InvoiceSettingSidebar';
import GeneralSetting from '../../components/invoices/invoicesettings/generalsettings/GeneralSetting';
import TaxSetting from '../../components/invoices/invoicesettings/taxsettings/TaxSetting';
import BankSetting from '../../components/invoices/invoicesettings/banksetting/BankSetting';

const InvoiceSetting = () => {
  const [activePage, setActivePage] = useState('profile'); 

  const renderPage = () => {
    switch (activePage) {
      case 'generalsetting':
        return <GeneralSetting />;
      case 'taxsetting':
        return <TaxSetting />;

        case 'banksetting':
          return <BankSetting />;

         

      default:
        return <GeneralSetting />;
    }
  };

  return (
    <Sidebar>
      <div className="flex ">
        <InvoiceSettingSidebar setActivePage={setActivePage} activePage={activePage} />
        <div className="flex-grow p-4 ">
          {renderPage()}
        </div>
      </div>
    </Sidebar>
  );
};

export default InvoiceSetting;

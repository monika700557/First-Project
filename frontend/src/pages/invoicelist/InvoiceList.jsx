import { useState } from 'react';

import AllInvoices from '../../components/invoices/invoiceslist/invoiceslisttable/invoicetable/AllInvoices.jsx';
import InvoiceListNavbar from '../../components/invoices/invoiceslist/invoiceslisttable/InvoiceListNavbar.jsx';
import InvoicesListHeader from '../../components/invoices/invoiceslist/invoiceslistheader/InvoicesListHeader.jsx'
import InvoicesWidgets from '../../components/invoices/invoiceslist/invoiceslisttable/InvoicesWidgets.jsx'
import Sidebar from '../../components/dashboard/sidebar/Sidebar.jsx';
import PaidInvoices from '../../components/invoices/invoiceslist/invoiceslisttable/invoicetable/PaidInvoices.jsx';
import OverDue from '../../components/invoices/invoiceslist/invoiceslisttable/invoicetable/OverDue.jsx';
import DraftTable from '../../components/invoices/invoiceslist/invoiceslisttable/invoicetable/DraftTable.jsx';

const InvoiceList = () => {
  const [activePage, setActivePage] = useState('all invoices'); 

  const renderPage = () => {
    switch (activePage) {
      case 'all invoices':
        return <AllInvoices />;
      case 'paid':
        return <PaidInvoices />;

        case 'overdue':
          return <OverDue />;

          case 'draft':
            return <DraftTable />

      default:
        return <AllInvoices />;
    }
  };

  return (
    <Sidebar>
      <div className="">
        <InvoicesListHeader />
        
        <InvoiceListNavbar setActivePage={setActivePage} activePage={activePage} />
        <InvoicesWidgets />
        <div className="flex-grow p-4">
          {renderPage()}
        </div>
      </div>
    </Sidebar>
  );
};

export default InvoiceList;

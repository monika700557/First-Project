
import InvoicesListHeader from '../../components/invoices/invoiceslist/invoiceslistheader/InvoicesListHeader.jsx'
import Sidebar from '../../components/dashboard/sidebar/Sidebar.jsx';
import InvoiceGridTable from '../../components/invoices/invoicegrid1/InvoiceGridTable.jsx';


const InvoiceGridFirst = () => {
 

 
  return (
    <Sidebar>
  
        <InvoicesListHeader />
        <InvoiceGridTable />
    
     

     
    </Sidebar>
  );
};

export default InvoiceGridFirst;

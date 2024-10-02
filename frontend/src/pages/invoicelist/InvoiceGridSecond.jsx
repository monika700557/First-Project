
import Sidebar from '../../components/dashboard/sidebar/Sidebar.jsx';
import InvoiceGridSecondTable from '../../components/invoices/invoicegrid2/InvoiceGridSecondTable.jsx';


const InvoiceGridSecond = () => {
 

 
  return (
    <Sidebar>
    <div className="p-4">
   
      <InvoiceGridSecondTable/>
     
    </div>
  </Sidebar>
  );
};

export default InvoiceGridSecond;

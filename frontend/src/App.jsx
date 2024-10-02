import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Customer from "./pages/customer/Customer";
import Estimate from "./pages/estimate/Estimate";
import Payment from "./pages/payments/Payment";
import AddCustomerForm from "./components/customers/customerHeader/AddCustomerForm";
import AddEstimate from "./components/estimates/estimatesHeader/AddEstimate";
import AddPayment from "./components/payment/paymentHeader/AddPayment";
import AddExpense from "./components/expenses/expenseHeader/AddExpense";
import Expense from "./pages/expense/Expense";
import Item from "./pages/item/Item";
import ExpenseReport from "./pages/reports/ExpenseReport";
import SalesReport from "./pages/reports/SalesReport";
import Setting from "./pages/setting/Setting";
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";
import Forgot from "./pages/login/Forgot";
import LockScreen from "./pages/login/LockScreen";
import Register from "./pages/login/Register";
import Error2 from "./pages/error/Error2";
import Error1 from "./pages/error/Error1";
import InvoiceList from "./pages/invoicelist/InvoiceList";
import InvoiceGridFirst from "./pages/invoicelist/InvoiceGridFirst";
import InvoiceGridSecond from "./pages/invoicelist/InvoiceGridSecond";
import AddInvoice from "./pages/invoicelist/AddInvoivce";
import EditInvoice from "./pages/invoicelist/EditInvoice";
import InvoiceDetails from "./pages/invoicelist/InvoiceDetails";
import InvoiceDetailsSecond from "./pages/invoicelist/InvoiceDetailsSecond";
import InvoiceSetting from "./pages/invoicelist/InvoiceSetting";
import UserPage from "./pages/users/UserPage";
import { Navigate } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/estimates" element={<Estimate />} />
        <Route path="/estimates" element={<Estimate />} />

        <Route path="/invoices-list" element={<InvoiceList />} />
        <Route path="/invoices-grid1" element={<InvoiceGridFirst />} />
        <Route path="/invoices-grid-2" element={<InvoiceGridSecond />} />
        <Route path="/add-invoice" element={<AddInvoice />} />
        <Route path="/edit-invoice" element={<EditInvoice />} />
        <Route path="/invoice-details" element={<InvoiceDetails />} />
        <Route path="/invoice-details2" element={<InvoiceDetailsSecond />} />
        <Route path="/invoice-setting" element={<InvoiceSetting />} />

        <Route path="/items" element={<Item />} />
        <Route path="/payments" element={<Payment />} />
        <Route path="/expenses" element={<Expense />} />

        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<Forgot />} />
        <Route path="/register" element={<Register />} />
        <Route path="/lock-screen" element={<LockScreen />} />

        <Route path="/add-customer" element={<AddCustomerForm />} />

        <Route path="/add-estimate" element={<AddEstimate />} />

        <Route path="/add-payment" element={<AddPayment />} />

        <Route path="add-expense" element={<AddExpense />} />
        <Route path="/sales-report" element={<SalesReport />} />
        <Route path="/expense-report" element={<ExpenseReport />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/404" element={<Error1 />} />
        <Route path="/505" element={<Error2 />} />
        <Route path="/users" element={<UserPage />} />
      </Routes>
    </Router>
  );
}

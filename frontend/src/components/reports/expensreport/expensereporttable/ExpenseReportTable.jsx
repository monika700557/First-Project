import React, { useState } from 'react';
import { Edit, Trash , ArrowDownUp,Search} from 'lucide-react';

const customers = [
  {
    category:'Software',
    name: 'Alice Johnson',
    amountDue: '$1,200',
    registeredOn: '12 Jan 2021',
    status: 'Active',
   note:'	Lorem ipsum dollar...'
  },
  {
      note:'	Lorem ipsum dollar...',
    category:'Software',
    name: 'Bob Smith',
    amountDue: '$550',
    registeredOn: '23 Feb 2021',
    status: 'Inactive',
  },
  {
    category:'Software',
    name: 'Charlie Davis',
    amountDue: '$2,300',
    registeredOn: '15 Mar 2021',
    status: 'Active',
    note:'	Lorem ipsum dollar...',
  },
  {
    category:'Software',
    name: 'Diana Prince',
     note:'	Lorem ipsum dollar...',
    amountDue: '-',
    registeredOn: '30 Apr 2021',
    status: 'Pending',
  },
  {
    category:'Software',
    name: 'Ethan Hunt',
    note:'	Lorem ipsum dollar...',
    amountDue: '$750',
    registeredOn: '18 May 2021',
    status: 'Active',
  },
  {
    category:'Software',
    name: 'Fiona Gallagher',
    note:'	Lorem ipsum dollar...',
    amountDue: '$1,000',
    registeredOn: '27 Jun 2021',
    status: 'Inactive',
  },
  {
    category:'Software',
    name: 'George Miller',
    note:'	Lorem ipsum dollar...',
    amountDue: '$3,500',
    registeredOn: '05 Jul 2021',
    status: 'Active',
  },
  {  category:'Software',
    name: 'Hannah Baker',
    note:'	Lorem ipsum dollar...',
    amountDue: '-',
    registeredOn: '14 Aug 2021',
    status: 'Pending',
  },
  {
    category:'Software',
    name: 'Ian Somerhalder',
    note:'	Lorem ipsum dollar...',
    amountDue: '$2,150',
    registeredOn: '22 Sep 2021',
    status: 'Active',
  },
  {
    category:'Software',
    name: 'Jenna Ortega',
    note:'	Lorem ipsum dollar...',
    amountDue: '$850',
    registeredOn: '11 Oct 2021',
    status: 'Inactive',
  },
  {
    category:'Software',
    name: 'Charlie Davis',
    note:'	Lorem ipsum dollar...',
    amountDue: '$2,300',
    registeredOn: '15 Mar 2021',
    status: 'Active',
  },
  {
    category:'Software',
    name: 'Charlie Davis',
    note:'	Lorem ipsum dollar...',
    amountDue: '$2,300',
    registeredOn: '15 Mar 2021',
    status: 'Active',
  },
  {
    category:'Software',
    name: 'Charlie Davis',
    note:'	Lorem ipsum dollar...',
    amountDue: '$2,300',
    registeredOn: '15 Mar 2021',
    status: 'Active',
  },
  {
    category:'Software',
    name: 'Charlie Davis',
    note:'	Lorem ipsum dollar...',
    amountDue: '$2,300',
    registeredOn: '15 Mar 2021',
    status: 'Active',
  },
  {
    category:'Software',
    name: 'Charlie Davis',
    note:'	Lorem ipsum dollar...',
    amountDue: '$2,300',
    registeredOn: '15 Mar 2021',
    status: 'Active',
  },
  {
    category:'Software',
    name: 'Charlie Davis',
    note:'	Lorem ipsum dollar...',
    amountDue: '$2,300',
    registeredOn: '15 Mar 2021',
    status: 'Active',
  },
  {
    category:'Software',
    name: 'Charlie Davis',
    note:'	Lorem ipsum dollar...',
    amountDue: '$2,300',
    registeredOn: '15 Mar 2021',
    status: 'Active',
  },
];

const ExpenseReportTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [sortConfig, setSortConfig] = useState({ key: '', direction: 'asc' });
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCustomers = customers.filter((customer) =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.phone.includes(searchTerm) ||
    customer.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedCustomers = [...filteredCustomers].sort((a, b) => {
    if (sortConfig.key) {
      const keyA = a[sortConfig.key];
      const keyB = b[sortConfig.key];
      if (keyA < keyB) {
        return sortConfig.direction === 'asc' ? -1 : 1;
      }
      if (keyA > keyB) {
        return sortConfig.direction === 'asc' ? 1 : -1;
      }
    }
    return 0;
  });


  const indexOfLastCustomer = currentPage * itemsPerPage;
  const indexOfFirstCustomer = indexOfLastCustomer - itemsPerPage;
  const currentCustomers = sortedCustomers.slice(indexOfFirstCustomer, indexOfLastCustomer);

  const totalPages = Math.ceil(filteredCustomers.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(parseInt(e.target.value));
    setCurrentPage(1); 
  };

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div className="p-4 bg-white shadow rounded-lg w-full ">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-2">
          <span>Show</span>
          <select
            value={itemsPerPage}
            onChange={handleItemsPerPageChange}
            className="border border-gray-300 rounded p-1"
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
          </select>
          <span>entries</span>
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="border border-gray-300 rounded p-2 pl-10"
          />
          <Search size={20} className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-gray-100">
            <tr>
            <th className="p-3 cursor-pointer" onClick={() => handleSort('category')}>
                Category <ArrowDownUp size={16} className="inline ml-1" />
              </th>

              <th className="p-3 cursor-pointer" onClick={() => handleSort('name')}>
                Customer <ArrowDownUp size={16} className="inline ml-1" />
              </th>
              <th className="p-3 cursor-pointer" onClick={() => handleSort('registeredOn')}>
               Expense Date<ArrowDownUp size={16} className="inline ml-1" />
              </th>
              <th className="p-3 cursor-pointer" onClick={() => handleSort('note')}>
              Note<ArrowDownUp size={16} className="inline ml-1" />
              </th>
              <th className="p-3 cursor-pointer" onClick={() => handleSort('amountDue')}>
                Amount Due <ArrowDownUp size={16} className="inline ml-1" />
              </th>
              <th className="p-3 cursor-pointer" onClick={() => handleSort('status')}>
                Status <ArrowDownUp size={16} className="inline ml-1" />
              </th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {currentCustomers.map((customer, index) => (
              <tr key={index} className="hover:bg-gray-50">
                  <td className="p-3">{customer.category}</td>

                <td className="p-3 flex items-center">
                  <img
                    src={`https://randomuser.me/api/portraits/med/men/${index + 1}.jpg`}
                    alt="Customer Avatar"
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <p className="font-medium">{customer.name}</p>
                    <p className="text-xs text-gray-500">{customer.phone}</p>
                  </div>
                </td>
                <td className="p-3">{customer.registeredOn}</td>
                <td className="p-3">{customer.note}</td>
                <td className="p-3">{customer.amountDue}</td>
             
                <td className="p-3">
                  <span
                    className={`px-2 py-1 text-xs font-medium rounded ${
                      customer.status === 'Active'
                        ? 'bg-green-100 text-green-800'
                        : customer.status === 'Inactive'
                        ? 'bg-red-100 text-red-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}
                  >
                    {customer.status}
                  </span>
                </td>
                <td className="p-3 flex space-x-2">
                  <button className="text-blue-500 hover:text-blue-700">
                    <Edit size={16} />
                  </button>
                  <button className="text-red-500 hover:text-red-700">
                    <Trash size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center mt-4">
        <span>
          Showing {indexOfFirstCustomer + 1} to{' '}
          {indexOfLastCustomer > filteredCustomers.length
            ? filteredCustomers.length
            : indexOfLastCustomer}{' '}
          of {filteredCustomers.length} entries
        </span>
        <div className="flex space-x-1">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i + 1}
              onClick={() => paginate(i + 1)}
              className={`px-3 py-1 border rounded ${
                currentPage === i + 1
                  ? 'bg-blue-500 text-white'
                  : 'bg-white text-blue-500 border-gray-300'
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExpenseReportTable;
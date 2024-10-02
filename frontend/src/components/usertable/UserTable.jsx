import React, { useState } from 'react';
import { Edit, Trash , ArrowDownUp,Search} from 'lucide-react';

const customers = [
  {
    name: 'Alice Johnson',
    phone: '123-456-7890',
    email: 'alice.johnson@example.com',
    amountDue: '$1,200',
    registeredOn: '12 Jan 2021',
    status: 'Active',
  },
  {
    name: 'Bob Smith',
    phone: '987-654-3210',
    email: 'bob.smith@example.com',
    amountDue: '$550',
    registeredOn: '23 Feb 2021',
    status: 'Inactive',
  },
  {
    name: 'Charlie Davis',
    phone: '456-789-0123',
    email: 'charlie.davis@example.com',
    amountDue: '$2,300',
    registeredOn: '15 Mar 2021',
    status: 'Active',
  },
  {
    name: 'Diana Prince',
    phone: '321-654-0987',
    email: 'diana.prince@example.com',
    amountDue: '-',
    registeredOn: '30 Apr 2021',
    status: 'Pending',
  },
  {
    name: 'Ethan Hunt',
    phone: '654-321-7890',
    email: 'ethan.hunt@example.com',
    amountDue: '$750',
    registeredOn: '18 May 2021',
    status: 'Active',
  },
  {
    name: 'Fiona Gallagher',
    phone: '789-012-3456',
    email: 'fiona.gallagher@example.com',
    amountDue: '$1,000',
    registeredOn: '27 Jun 2021',
    status: 'Inactive',
  },
  {
    name: 'George Miller',
    phone: '012-345-6789',
    email: 'george.miller@example.com',
    amountDue: '$3,500',
    registeredOn: '05 Jul 2021',
    status: 'Active',
  },
  {
    name: 'Hannah Baker',
    phone: '210-987-6543',
    email: 'hannah.baker@example.com',
    amountDue: '-',
    registeredOn: '14 Aug 2021',
    status: 'Pending',
  },
  {
    name: 'Ian Somerhalder',
    phone: '543-210-6789',
    email: 'ian.somerhalder@example.com',
    amountDue: '$2,150',
    registeredOn: '22 Sep 2021',
    status: 'Active',
  },
  {
    name: 'Jenna Ortega',
    phone: '678-901-2345',
    email: 'jenna.ortega@example.com',
    amountDue: '$850',
    registeredOn: '11 Oct 2021',
    status: 'Inactive',
  },
  {
    name: 'Charlie Davis',
    phone: '456-789-0123',
    email: 'charlie.davis@example.com',
    amountDue: '$2,300',
    registeredOn: '15 Mar 2021',
    status: 'Active',
  },
  {
    name: 'Charlie Davis',
    phone: '456-789-0123',
    email: 'charlie.davis@example.com',
    amountDue: '$2,300',
    registeredOn: '15 Mar 2021',
    status: 'Active',
  },
  {
    name: 'Charlie Davis',
    phone: '456-789-0123',
    email: 'charlie.davis@example.com',
    amountDue: '$2,300',
    registeredOn: '15 Mar 2021',
    status: 'Active',
  },
  {
    name: 'Charlie Davis',
    phone: '456-789-0123',
    email: 'charlie.davis@example.com',
    amountDue: '$2,300',
    registeredOn: '15 Mar 2021',
    status: 'Active',
  },
  {
    name: 'Charlie Davis',
    phone: '456-789-0123',
    email: 'charlie.davis@example.com',
    amountDue: '$2,300',
    registeredOn: '15 Mar 2021',
    status: 'Active',
  },
  {
    name: 'Charlie Davis',
    phone: '456-789-0123',
    email: 'charlie.davis@example.com',
    amountDue: '$2,300',
    registeredOn: '15 Mar 2021',
    status: 'Active',
  },
  {
    name: 'Charlie Davis',
    phone: '456-789-0123',
    email: 'charlie.davis@example.com',
    amountDue: '$2,300',
    registeredOn: '15 Mar 2021',
    status: 'Active',
  },
];

const UserTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [sortConfig, setSortConfig] = useState({ key: '', direction: 'asc' });
  const [searchTerm, setSearchTerm] = useState('');

  // Filter the customers based on the search term
  const filteredCustomers = customers.filter((customer) =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.phone.includes(searchTerm) ||
    customer.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort the data based on the current sort configuration
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

  // Calculate the index of the first and last customer on the current page
  const indexOfLastCustomer = currentPage * itemsPerPage;
  const indexOfFirstCustomer = indexOfLastCustomer - itemsPerPage;
  const currentCustomers = sortedCustomers.slice(indexOfFirstCustomer, indexOfLastCustomer);

  // Calculate total pages
  const totalPages = Math.ceil(filteredCustomers.length / itemsPerPage);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Handle change in items per page
  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(parseInt(e.target.value));
    setCurrentPage(1); // Reset to first page whenever items per page is changed
  };

  // Handle sorting by column
  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset to first page when search term changes
  };

  return (
    <div className="p-4 bg-white shadow rounded-lg  w-full ">
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
              <th className="p-3 cursor-pointer" onClick={() => handleSort('name')}>
                Customer <ArrowDownUp size={16} className="inline ml-1" />
              </th>
              <th className="p-3 cursor-pointer" onClick={() => handleSort('email')}>
                Email <ArrowDownUp size={16} className="inline ml-1" />
              </th>
              <th className="p-3 cursor-pointer" onClick={() => handleSort('amountDue')}>
                Amount Due <ArrowDownUp size={16} className="inline ml-1" />
              </th>
              <th className="p-3 cursor-pointer" onClick={() => handleSort('registeredOn')}>
                Registered On <ArrowDownUp size={16} className="inline ml-1" />
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
                <td className="p-3">{customer.email}</td>
                <td className="p-3">{customer.amountDue}</td>
                <td className="p-3">{customer.registeredOn}</td>
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

      {/* Pagination */}
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

export default UserTable;
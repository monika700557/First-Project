import React, { useState , useEffect,useRef} from 'react';
import { ArrowDownUp,Search,Ellipsis } from 'lucide-react';

const estimates = [
  {
    estimateNumber: 'EST-11KI214',
    name: 'Alice Johnson',
    date: '	1 Nov 2020',
    amountDue: '$1,200',
    expiryDate: '12 Jan 2021',
    status: 'Active',
  },
  {
    estimateNumber: 'EST-11KI214',
    name: 'Bob Smith',
    date: '	1 Nov 2020',
    amountDue: '$550',
    expiryDate: '23 Feb 2021',
    status: 'Inactive',
  },
  {
    estimateNumber: 'EST-11KI214',
    name: 'Charlie Davis',
    date: '	1 Nov 2020',
    amountDue: '$2,300',
    expiryDate: '15 Mar 2021',
    status: 'Active',
  },
  {
    estimateNumber: 'EST-11KI214',
    name: 'Diana Prince',
    date: '	1 Nov 2020',
    amountDue: '-',
    expiryDate: '30 Apr 2021',
    status: 'Pending',
  },
  {
    estimateNumber: 'EST-11KI214',
    name: 'Ethan Hunt',
    date: '	1 Nov 2020',
    amountDue: '$750',
    expiryDate: '18 May 2021',
    status: 'Active',
  },
  {
    estimateNumber: 'EST-11KI214',
    name: 'Fiona Gallagher',
    date: '	1 Nov 2020',
    amountDue: '$1,000',
    expiryDate: '27 Jun 2021',
    status: 'Inactive',
  },
  {
    estimateNumber: 'EST-11KI214',
    name: 'George Miller',
    date: '	1 Nov 2020',
    amountDue: '$3,500',
    expiryDate: '05 Jul 2021',
    status: 'Active',
  },
  {
    estimateNumber: 'EST-11KI214',
    name: 'Hannah Baker',
    date: '	1 Nov 2020',
    amountDue: '-',
    expiryDate: '14 Aug 2021',
    status: 'Pending',
  },
  {
    estimateNumber: 'EST-11KI214',
    name: 'Ian Somerhalder',
    date: '	1 Nov 2020',
    amountDue: '$2,150',
    expiryDate: '22 Sep 2021',
    status: 'Active',
  },
  {
    estimateNumber: 'EST-11KI214',
    name: 'Jenna Ortega',
    date: '	1 Nov 2020',
    amountDue: '$850',
    expiryDate: '11 Oct 2021',
    status: 'Inactive',
  },
  {
    estimateNumber: 'EST-11KI214',
    name: 'Charlie Davis',
    date: '	1 Nov 2020',
    amountDue: '$2,300',
    expiryDate: '15 Mar 2021',
    status: 'Active',
  },
  {
    estimateNumber: 'EST-11KI214',
    name: 'Charlie Davis',
    date: '	1 Nov 2020',
    amountDue: '$2,300',
    expiryDate: '15 Mar 2021',
    status: 'Active',
  },
  {
    estimateNumber: 'EST-11KI214',
    name: 'Charlie Davis',
    date: '	1 Nov 2020',
    amountDue: '$2,300',
    expiryDate: '15 Mar 2021',
    status: 'Active',
  },
  {
    estimateNumber: 'EST-11KI214',
    name: 'Charlie Davis',
    date: '	1 Nov 2020',
    amountDue: '$2,300',
    expiryDate: '15 Mar 2021',
    status: 'Active',
  },
  {
    estimateNumber: 'EST-11KI214',
    name: 'Charlie Davis',
    date: '	1 Nov 2020',
    amountDue: '$2,300',
    expiryDate: '15 Mar 2021',
    status: 'Active',
  },
  {
    estimateNumber: 'EST-11KI214',
    name: 'Charlie Davis',
    date: '	1 Nov 2020',
    amountDue: '$2,300',
    expiryDate: '15 Mar 2021',
    status: 'Active',
  },
  {
    estimateNumber: 'EST-11KI214',
    name: 'Charlie Davis',
    date: '	1 Nov 2020',
    amountDue: '$2,300',
    expiryDate: '15 Mar 2021',
    status: 'Active',
  },
];

const EstimateTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [sortConfig, setSortConfig] = useState({ key: '', direction: 'asc' });
  const [searchTerm, setSearchTerm] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(null); 

  const toggleDropdown = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  const handleClickOutside = (event) => {
    if (!event.target.closest('.dropdown-container')) {
      setDropdownOpen(null);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const filteredCustomers = estimates.filter((customer) =>
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
            <th className="p-3 cursor-pointer" onClick={() => handleSort('estimateNumber')}>
                Estimate Number <ArrowDownUp size={16} className="inline ml-1" />
              </th>
              <th className="p-3 cursor-pointer" onClick={() => handleSort('name')}>
                Customer <ArrowDownUp size={16} className="inline ml-1" />
              </th>
              <th className="p-3 cursor-pointer" onClick={() => handleSort('email')}>
                Estimate Date<ArrowDownUp size={16} className="inline ml-1" />
              </th>
              <th className="p-3 cursor-pointer" onClick={() => handleSort('expiryDate')}>
               Expiry Date <ArrowDownUp size={16} className="inline ml-1" />
              </th>
              <th className="p-3 cursor-pointer" onClick={() => handleSort('amountDue')}>
                Amount <ArrowDownUp size={16} className="inline ml-1" />
              </th>
          
              <th className="p-3 cursor-pointer" onClick={() => handleSort('status')}>
                Status <ArrowDownUp size={16} className="inline ml-1" />
              </th>
              <th className="p-3 cursor-pointer ">
                Amount <ArrowDownUp size={16} className="inline text-end ml-1" />
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {currentCustomers.map((customer, index) => (
              <tr key={index} className="hover:bg-gray-50">
              <td className='p-3 text-[#377dff] font-semibold'>{customer.estimateNumber}</td>
                <td className="p-3 flex items-center">
                  <img
                    src={`https://randomuser.me/api/portraits/med/men/${index + 1}.jpg`}
                    alt="Customer Avatar"
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <p className="font-medium">{customer.name}</p>
                   
                  </div>
                </td>
                <td className="p-3">{customer.date}</td>
                <td className="p-3">{customer.expiryDate}</td>
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
                <td className="p-3 flex justify-center items-center dropdown-container">
                  <button
                    className="text-black-500 hover:text-blue-700"
                    onClick={() => toggleDropdown(index)}
                  >
                    <Ellipsis />
                  </button>
                  {dropdownOpen === index && (
                    <div className="absolute bg-white border rounded shadow-lg p-2 mt-2">
                      <button className="block w-full text-left px-2 py-1 hover:bg-gray-100">Edit</button>
                      <button className="block w-full text-left px-2 py-1 hover:bg-gray-100">Delete</button>
                    </div>
                  )}
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

export default EstimateTable;
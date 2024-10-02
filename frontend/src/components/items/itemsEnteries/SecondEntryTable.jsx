import React, { useState , useEffect,useRef} from 'react';
import { ArrowDownUp,Search,Ellipsis ,Edit, Trash ,} from 'lucide-react';

const firstItems = [
  {
    name: ' Aquatak High Pressure Wash.',
    price:'$5,200',
    discription: '	Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    discount: '60',
    date: '12 Jan 2021',
   
  },
  {
    name: ' Aquatak High Pressure Wash.',
    price:'$5,200',
    discription: '	Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    discount: '60',
    date: '12 Jan 2021',
    
  },
  {
    name: ' Aquatak High Pressure Wash.',
    price:'$5,200',
    discription: '	Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    discount: '60',
    date: '12 Jan 2021',
    
  },
  {
    name: ' Aquatak High Pressure Wash.',
    price:'$5,200',
    discription: '	Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    discount: '60',
    date: '12 Jan 2021',
    
  },
  {
    name: ' Aquatak High Pressure Wash.',
    price:'$5,200',
    discription: '	Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    discount: '60',
    date: '12 Jan 2021',
    
  },
  {
    name: ' Aquatak High Pressure Wash.',
    price:'$5,200',
    discription: '	Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    discount: '60',
    date: '12 Jan 2021',
    
  },
  {
    name: ' Aquatak High Pressure Wash.',
    price:'$5,200',
    discription: '	Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    discount: '60',
    date: '12 Jan 2021',
   
  },
  {
    name: ' Aquatak High Pressure Wash.',
    price:'$5,200',
    discription: '	Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    discount: '60',
    date: '12 Jan 2021',
    
  },
  {
    name: ' Aquatak High Pressure Wash.',
    price:'$5,200',
    discription: '	Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    discount: '60',
    date: '12 Jan 2021',
    
  },
  {
    name: ' Aquatak High Pressure Wash.',
    price:'$5,200',
    discription: '	Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    discount: '60',
    date: '12 Jan 2021',
    
  },
  {
    name: ' Aquatak High Pressure Wash.',
    price:'$5,200',
    discription: '	Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    discount: '60',
    date: '12 Jan 2021',
    
  },
  {
    name: ' Aquatak High Pressure Wash.',
    price:'$5,200',
    discription: '	Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    discount: '60',
    date: '12 Jan 2021',
    
  },
  {
    name: ' Aquatak High Pressure Wash.',
    price:'$5,200',
    discription: '	Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    discount: '60',
    date: '12 Jan 2021',
   
  },
  {
    name: ' Aquatak High Pressure Wash.',
    price:'$5,200',
    discription: '	Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    discount: '60',
    date: '12 Jan 2021',
   
  },
  {
    name: ' Aquatak High Pressure Wash.',
    price:'$5,200',
    discription: '	Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    discount: '60',
    date: '12 Jan 2021',
    
  },
  {
    name: ' Aquatak High Pressure Wash.',
    price:'$5,200',
    discription: '	Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    discount: '60',
    date: '12 Jan 2021',
   
  },
  {
    name: ' Aquatak High Pressure Wash.',
    price:'$5,200',
    discription: '	Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    discount: '60',
    date: '12 Jan 2021',
  },
];

const SecondEntryTable = () => {
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

  const filteredCustomers = firstItems.filter((customer) =>
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
    setCurrentPage(1); // Reset to first page when search term changes
  };
  
  return (
    <>
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
              className="border border-gray-300 rounded p-2 pl-10" />
            <Search size={20} className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 cursor-pointer" onClick={() => handleSort('name')}>
                  Name  <ArrowDownUp size={16} className="inline ml-1" />
                </th>
                <th className="p-3 cursor-pointer" onClick={() => handleSort('price')}>
                  Price  <ArrowDownUp size={16} className="inline ml-1" />
                </th>
                <th className="p-3 cursor-pointer" onClick={() => handleSort('discount')}>
                  Discount(%) <ArrowDownUp size={16} className="inline ml-1" />
                </th>
                <th className="p-3 cursor-pointer" onClick={() => handleSort('price')}>
                  Description<ArrowDownUp size={16} className="inline ml-1" />
                </th>
                <th className="p-3 cursor-pointer" onClick={() => handleSort('email')}>
                  Date Added<ArrowDownUp size={16} className="inline ml-1" />
                </th>
                <th className="p-3 cursor-pointer" onClick={() => handleSort('expiryDate')}>
                  Action <ArrowDownUp size={16} className="inline ml-1" />
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {currentCustomers.map((customer, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className='p-3 font-semibold'>{customer.name}</td>
               
                  <td className="p-3 text-[#7638ff] font-semibold">{customer.price}</td>
                  <td className="p-3">{customer.discount}</td>
                  <td className="p-3">{customer.discription}</td>
                  <td className="p-3">{customer.date}</td>
               

                  <td className="p-3 ">
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
                className={`px-3 py-1 border rounded ${currentPage === i + 1
                    ? 'bg-blue-500 text-white'
                    : 'bg-white text-blue-500 border-gray-300'}`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
      </>
  );
};

export default SecondEntryTable;
import React from 'react';
import MultiColorProgressBar from '../chart/MultiColorProgressBar';
import  {Ellipsis}  from "lucide-react";

const rows = [
  { customer: 'Barbara Moore', amount: '$118', dueDate: '23 Nov 2020', status: 'Paid' },
  { customer: 'John Doe', amount: '$150', dueDate: '25 Nov 2020', status: 'Sent' },
  { customer: 'Jane Smith', amount: '$200', dueDate: '27 Nov 2020', status: 'Partially Paid' },
  { customer: 'Mike Johnson', amount: '$175', dueDate: '29 Nov 2020', status: 'Overdue' },
  { customer: 'Emily Davis', amount: '$125', dueDate: '01 Dec 2020', status: 'Paid' },
];

const Table1 = () => {
  const [tableRows, setTableRows] = React.useState(rows);

  const getStatusClass = (status) => {
    switch (status.toLowerCase()) {
      case 'paid':
        return 'bg-paid-green text-[#26af48] font-bold'; // Custom Tailwind class
        case 'sent':
        return 'bg-paid-green text-[#1db9aa]'
      case 'partially paid':
        return 'bg-partialy-paid  text-[#f39c12]';
      case 'overdue':
     return 'bg-overdue-red text-[#FF0000]'
      default:
        return '';
    }
  };
  const segments = [
    { label: 'Paid', color: 'bg-green-500', value: 40 },
    { label: 'Unpaid', color: 'bg-yellow-500', value: 30 },
    { label: 'Overdue', color: 'bg-red-500', value: 20 },
    { label: 'Draft', color: 'bg-blue-500', value: 10 },
  ];

  return (
    <div className="shadow-md rounded-lg mb-8 bg-white">
      <div className="border-b border-gray-200 p-4 flex items-center justify-between">
        <h5 className="text-lg font-semibold text-gray-800">Invoice Analytics</h5>
        <button className="text-indigo-600 border-2 border-indigo-600 px-3 py-1 rounded-lg text-xs hover:bg-indigo-100">
          View All
        </button>
      </div>

      <div className="p-4">
        <div className="mb-4">
          <div className="flex gap-2 mb-4">
            <MultiColorProgressBar  segments={segments}/>
          </div>

        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 whitespace-nowrap">
            <thead className="bg-gray-100 text-gray-600">
              <tr>
                <th className="px-4 py-4 text-left text-base font-semibold">Customer</th>
                <th className="px-4 py-4 text-left text-base font-semibold">Amount</th>
                <th className="px-4 py-4 text-left text-base font-semibold">Due Date</th>
                <th className="px-4 py-4 text-left text-base font-semibold">Status</th>
                <th className="px-4 py-4 text-base font-semibold ml-16">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {tableRows.map((row, index) => (
                <tr key={index} className="text-gray-800 align-middle">
                  <td className="px-4 py-2">
                    <div className="flex items-center">
                      <img
                        className="w-10 h-10 rounded-full mr-2"
                        src="https://kanakku.dreamstechnologies.com/html/template-materializecss/assets/img/profiles/avatar-04.jpg"
                        alt="Avatar"
                      />
                      <span className='font-medium text-sm'>{row.customer}</span>
                    </div>
                  </td>
                  <td className="px-4 py-2 font-medium text-sm">{row.amount}</td>
                  <td className="px-4 py-2 font-medium text-sm">{row.dueDate}</td>


                  <td className="px-2 py-2 font-bold  flex justify-center text-center">
                    <span className={`px-2 py-2 rounded-md min-w-24 text-xs font-bold ${getStatusClass(row.status)}`}>
                      {row.status}
                    </span>
                  </td>


                  <td className="px-4 py-2  font-bold  ">
                  <Ellipsis className='text-right ml-10' />
                  </td>


                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table1;
import React from 'react';

// Define constants for navbar items
const NAVBAR_ITEMS = [
  { name: 'All Invoices', page: 'all invoices' },
  { name: 'Paid', page: 'paid' },
  { name: 'Overdue', page: 'overdue' },
  { name: 'Draft', page: 'draft' },
  { name: 'Recurring', page: 'notification' },
  { name: 'Canceled', page: 'password' }
];

const InvoicesListNavbar = ({ setActivePage, activePage }) => {
  return (
    <div className="flex flex-col sm:flex-row justify-start ml-4 items-start">
      <aside className="text-black flex flex-col mt-4 border-b-gray-300 w-full sm:w-auto">
        <ul className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-10 w-full sm:w-auto">
          {NAVBAR_ITEMS.map(({ name, page }) => (
            <li className="mb-2 sm:mb-4 w-full sm:w-auto" key={page}>
              <a
                href="#"
                onClick={() => setActivePage(page)}
                className={`block w-full sm:w-auto text-center sm:text-left hover:text-[#7638ff] pt-[5px] pb-[5px] font-bold text-[16px] gap-3 ${
                  activePage === page ? "text-[#7638ff]" : ""
                } ${name === 'Recurring' || name === 'Canceled' ? 'hover:bg-[rgba(118,56,255,0.05)]' : ''}`}
              >
                {name}
              </a>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
};

export default InvoicesListNavbar;

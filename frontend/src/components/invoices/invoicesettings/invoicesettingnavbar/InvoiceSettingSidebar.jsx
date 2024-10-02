

import React from 'react';
import { Bookmark ,Landmark , GitCommitHorizontal } from 'lucide-react';

const InvoiceSettingSidebar = ({ setActivePage, activePage }) => {
  return (
    <>
   
      <div className="flex flex-col h-screen justify-start items-start ml-[1rem]   fixed mt-[83px]">
       
          <ul>
            <li className="mb-4">
              <a
                href="#"
                onClick={() => setActivePage('generalsetting')}
                className={`hover:text-[#7638ff] hover:bg-[rgba(118,56,255,0.05)] pt-[10px] pb-[5px] flex font-semibold text-[14px] gap-3 ${activePage === 'generalsetting' ? 'text-[#7638ff] ' : ''}`}
              >
                <GitCommitHorizontal  className="mr-2" />
                Profile Setting
              </a>
            </li>

            <li className="mb-4">
              <a
                href="#"
                onClick={() => setActivePage('taxsetting')}
                className={`hover:text-[#7638ff] hover:bg-[rgba(118,56,255,0.05)] pt-[5px] pb-[5px] flex font-semibold text-[14px] gap-3 ${activePage === 'taxsetting' ? 'text-[#7638ff] ' : ''}`}
              >
                <Bookmark className="mr-2" />
              Tax Setting
              </a>
            </li>

            <li className="mb-4">
              <a
                href="#"
                onClick={() => setActivePage('banksetting')}
                className={`hover:text-[#7638ff] hover:bg-[rgba(118,56,255,0.05)] pt-[5px] pb-[5px] flex font-semibold text-[14px] gap-3 ${activePage === 'banksetting' ? 'text-[#7638ff] ' : ''}`}
              >
             
                <Landmark  className="mr-2" />
                Bank Setting
              </a>
            </li>
       
          </ul>
      
     
      </div>
    </>
  );
};

export default InvoiceSettingSidebar;



import React from 'react';
import { SquareCheck, Settings, LockKeyholeOpen, Ban, User, BookAudio, Bell } from 'lucide-react';

const SettingSidebar = ({ setActivePage, activePage }) => {
  return (
    <>
      <div className="flex justify-between mt-[1rem] ">
        <div>
          <h2 className="text-[1.7rem] font-semibold">Setting</h2>
          <p className="text-gray-600">Dashboard / Profile Setting</p>
        </div>
      </div>

      <div className="flex flex-col h-screen justify-start items-end ml-[4.5rem]">
        <aside className="w-[15%]  text-black flex flex-col mt-28 absolute">
          <ul>
            <li className="mb-4">
              <a
                href="#"
                onClick={() => setActivePage('profile')}
                className={`hover:text-[#7638ff] hover:bg-[rgba(118,56,255,0.05)] pt-[10px] pb-[5px] flex font-semibold text-[14px] gap-3 ${activePage === 'profile' ? 'text-[#7638ff] ' : ''}`}
              >
                <User className="mr-2" />
                Profile Setting
              </a>
            </li>

            <li className="mb-4">
              <a
                href="#"
                onClick={() => setActivePage('preference')}
                className={`hover:text-[#7638ff] hover:bg-[rgba(118,56,255,0.05)] pt-[5px] pb-[5px] flex font-semibold text-[14px] gap-3 ${activePage === 'preference' ? 'text-[#7638ff] ' : ''}`}
              >
                <Settings className="mr-2" />
                Preference
              </a>
            </li>

            <li className="mb-4">
              <a
                href="#"
                onClick={() => setActivePage('taxtype')}
                className={`hover:text-[#7638ff] hover:bg-[rgba(118,56,255,0.05)] pt-[5px] pb-[5px] flex font-semibold text-[14px] gap-3 ${activePage === 'taxtype' ? 'text-[#7638ff] ' : ''}`}
              >
                <SquareCheck className="mr-2" />
                Tax - Type
              </a>
            </li>

            <li className="mb-4">
              <a
                href="#"
                onClick={() => setActivePage('expense')}
                className={`hover:text-[#7638ff] hover:bg-[rgba(118,56,255,0.05)] pt-[5px] pb-[5px] flex font-semibold text-[14px] gap-4 ${activePage === 'expense' ? 'text-[#7638ff] ' : ''}`}
              >
                <BookAudio className="mr-2" />
                Expense Category
              </a>
            </li>

            <li className="mb-4">
              <a
                href="#"
                onClick={() => setActivePage('notification')}
                className={`hover:text-[#7638ff] hover:bg-[rgba(118,56,255,0.05)] pt-[5px] pb-[5px] flex font-semibold text-[14px] gap-4 ${activePage === 'notification' ? 'text-[#7638ff] ' : ''}`}
              >
                <Bell />
                Notification
              </a>
            </li>

            <li className="mb-4">
              <a
                href="#"
                onClick={() => setActivePage('password')}
                className={`hover:text-[#7638ff] hover:bg-[rgba(118,56,255,0.05)] pt-[5px] pb-[5px] flex font-semibold text-[14px] gap-4 ${activePage === 'password' ? 'text-[#7638ff] ' : ''}`}
              >
                <LockKeyholeOpen className="mr-2" />
                Change Password
              </a>
            </li>

            <li className="mb-4">
              <a
                href="#"
                onClick={() => setActivePage('delete')}
                className={`hover:text-[#7638ff] hover:bg-[rgba(118,56,255,0.05)] pt-[5px] pb-[5px] flex font-semibold text-[14px] gap-4 ${activePage === 'delete' ? 'text-[#7638ff] ' : ''}`}
              >
                <Ban className="mr-2" />
                Delete Account
              </a>
            </li>
          </ul>
        </aside>
     
      </div>
    </>
  );
};

export default SettingSidebar;

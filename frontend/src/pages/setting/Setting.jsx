import React, { useState } from 'react';
import SettingSidebar from '../../components/settings/settingsidebar/SettingSidebar';
import ProfileSetting from '../../components/settings/profilesetting/ProfileSetting';
import Preference from '../../components/settings/prefrence/Prefrence';
import Sidebar from "../../components/dashboard/sidebar/Sidebar";
import TaxType from '../../components/settings/taxtype/TaxType';
import ExpenseCategory  from '../../components/settings/expensecategory/ExpenseCategory.jsx';
import  DeleteAccount from '../../components/settings/deleteaccount/DeleteAccount.jsx'
import ChangePassword from '../../components/settings/changepassword/ChangePassword.jsx';
import NotficationSetting from '../../components/settings/notification/NotficationSetting.jsx';

const Settings = () => {
  const [activePage, setActivePage] = useState('profile'); // Default to 'profile'

  const renderPage = () => {
    switch (activePage) {
      case 'profile':
        return <ProfileSetting />;
      case 'preference':
        return <Preference />;

        case 'taxtype':
          return <TaxType />;

          case 'expense':
            return <ExpenseCategory />

            case 'delete':
              return <DeleteAccount />
              

              case 'password':
                return <ChangePassword />

                case 'notification':
                  return <NotficationSetting />


      default:
        return <ProfileSetting />;
    }
  };

  return (
    <Sidebar>
      <div className="flex ">
        <SettingSidebar setActivePage={setActivePage} activePage={activePage} />
        <div className="flex-grow p-4">
          {renderPage()}
        </div>
      </div>
    </Sidebar>
  );
};

export default Settings;

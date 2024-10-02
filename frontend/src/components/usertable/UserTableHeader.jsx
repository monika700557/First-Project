import React from "react";
import { useNavigate } from "react-router-dom";
 import { Plus, Filter } from 'lucide-react';

const UserTableHeader = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center mb-6 ">
      <div>
        <h2 className="text-2xl font-bold">Users</h2>
        <p className="text-gray-600">Dashboard /  Users</p>
      </div>
    </div>
  );
};

export default  UserTableHeader;
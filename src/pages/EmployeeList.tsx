import React from 'react';

import EmployeeTable from '../components/EmployeeTable';
import './EmployeeList.css';

const EmployeePage: React.FC = () => {
  return (
    <div id="employee-div" className="container">
      <h1>Current Employees</h1>
      <div className='table_container'>
        <EmployeeTable />
      </div>
      <a href="/">Home</a>
    </div>
  );
};

export default EmployeePage;
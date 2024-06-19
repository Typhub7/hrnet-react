import React, { useState } from 'react';
import EmployeeTable from '../components/EmployeeTable';
import SearchInput from '../components/SearchInput';
import './EmployeeList.css';

const EmployeePage: React.FC = () => {
  const [filterText, setFilterText] = useState('');

  const handleSearch = (searchTerm: string) => {
    setFilterText(searchTerm);
  };

  return (
    <div id="employee-div" className="container">
      <h1>Current Employees</h1>
      <div className="search-container">
        <SearchInput onSearch={handleSearch} />
      </div>
      <div className='table_container'>
        <EmployeeTable filterText={filterText} />
      </div>
      <a href="/">Home</a>
    </div>
  );
};

export default EmployeePage;
import React, { useState } from 'react';
import EmployeeTable from '../components/EmployeeTable';
import SearchInput from '../components/SearchInput';
import TableInfo from '../components/TableInfo';
import './EmployeeList.css';

const EmployeePage: React.FC = () => {
  const [filterText, setFilterText] = useState('');
  const [filteredCount, setFilteredCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const handleSearch = (searchTerm: string) => {
    setFilterText(searchTerm);
    setCurrentPage(1); // Reset to the first page on search
  };

  const updateCounts = (filtered: number, total: number) => {
    setFilteredCount(filtered);
    setTotalCount(total);
  };

  const handleEntriesPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setEntriesPerPage(Number(e.target.value));
    setCurrentPage(1); // Reset to the first page when changing entries per page
  };

  return (
    <div id="employee-div" className="container">
      <h1>Current Employees</h1>
      <div className="controls-container">
        <div className="search-container">
          <SearchInput onSearch={handleSearch} />
        </div>
        <div className="entries-container">
          <label htmlFor="entries-per-page">Show </label>
          <select id="entries-per-page" value={entriesPerPage} onChange={handleEntriesPerPageChange}>
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
          <span> entries</span>
        </div>
      </div>
      
      <div className='table_container'>
        <EmployeeTable
          filterText={filterText}
          updateCounts={updateCounts}
          entriesPerPage={entriesPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
      <div className='table_footer'>
      <TableInfo
        currentCount={filteredCount}
        totalCount={totalCount}
        filtered={filterText.trim() !== ''}
      />
      </div>
      <a href="/">Home</a>
    </div>
  );
};

export default EmployeePage;

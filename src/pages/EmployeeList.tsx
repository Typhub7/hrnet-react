import React, { useState } from 'react';
import EmployeeTable from '../components/EmployeeTable';
import SearchInput from '../components/SearchInput';
import TableInfo from '../components/TableInfo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import Pagination from '../components/Pagination';


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

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div id="employee-div" className="bg-white w-screen max-w-screen-xl flex flex-col items-center">
      <h1 className='text-5xl text-sky-800 font-bold drop-shadow-lg'>
        Current Employees
        <span className='absolute left-1 -bottom-2.5 w-72 h-1.5 bg-gradient-to-r from-sky-900 via-sky-600 to-slate-400 drop-shadow-lg'></span>
      </h1>
      <div className="flex justify-between items-center mb-5 w-full">
        <div className="flex items-center">
          <label htmlFor="entries-per-page" className='mr-1'>Show </label>
          <select id="entries-per-page" className='mx-2 mt-3' value={entriesPerPage} onChange={handleEntriesPerPageChange}>
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
          <span> entries</span>
        </div>
        <div className="flex items-center mr-1">
          <SearchInput onSearch={handleSearch} />
        </div>
      </div>
      
      <div className='table_container mb-5 w-full'>
        <EmployeeTable
          filterText={filterText}
          updateCounts={updateCounts}
          entriesPerPage={entriesPerPage}
          currentPage={currentPage}
        />
      </div>
      <div className="pagination-info flex justify-between items-center w-full">
        <TableInfo
          currentCount={filteredCount}
          totalCount={totalCount}
          filtered={filterText.trim() !== ''}
        />
        <Pagination
          currentPage={currentPage}
          filteredCount={filteredCount}
          entriesPerPage={entriesPerPage}
          onPageChange={handlePageChange}
        />
      </div>
      <a 
        className="text-center text-sky-800 font-bold drop-shadow-lg no-underline mt-3 text-2xl my-5 hover:text-blue-900 hover:scale-110 transition-all duration-300 flex items-center justify-center"
        href="/"
      >
        <FontAwesomeIcon icon={faHome} className="mr-2" />
        Home
      </a>
    </div>
  );
};

export default EmployeePage;

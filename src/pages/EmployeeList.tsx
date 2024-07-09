import React, { useState } from 'react';
import EmployeeTable from '../components/EmployeeTable';
import SearchInput from '../components/SearchInput';
import TableInfo from '../components/TableInfo';


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

  const handlePreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, Math.ceil(filteredCount / entriesPerPage)));
  };

  return (
    <div id="employee-div" className="container bg-white w-full max-w-screen-xl flex flex-col items-center">
      <h1 className='text-5xl mt-4 text-zinc-500 font-bold'>Current Employees</h1>
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
      <div className="pagination-info flex justify-between items-center mt-3 w-full">
        <TableInfo
          currentCount={filteredCount}
          totalCount={totalCount}
          filtered={filterText.trim() !== ''}
        />
        <div className="pagination flex items-center">
          <button className="mr-1" onClick={handlePreviousPage} disabled={currentPage === 1}>
            Previous
          </button>
          <span className="page-number mx-10 my-0">{currentPage}</span>
          <button onClick={handleNextPage} disabled={currentPage === Math.ceil(filteredCount / entriesPerPage)}>
            Next
          </button>
        </div>
      </div>
      <a className="text-center text-blue-700 no-underline mt-3 text-2xl my-5 hover:text-blue-900  hover:scale-110 transition-all duration-300" href="/">Home</a>
    </div>
  );
};

export default EmployeePage;

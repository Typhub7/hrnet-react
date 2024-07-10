import React from 'react';

interface PaginationProps {
  currentPage: number;
  filteredCount: number;
  entriesPerPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  filteredCount,
  entriesPerPage,
  onPageChange,
}) => {
  const handlePreviousPage = () => {
    onPageChange(currentPage - 1);
  };

  const handleNextPage = () => {
    onPageChange(currentPage + 1);
  };

  return (
    <div className="pagination flex items-center">
      <button className="mr-1" onClick={handlePreviousPage} disabled={currentPage === 1}>
        Previous
      </button>
      {[...Array(Math.ceil(filteredCount / entriesPerPage)).keys()].map((page) => (
        <button
          key={page + 1}
          className={`page-number mx-2 my-0 ${currentPage === page + 1 ? 'font-bold' : ''}`}
          onClick={() => onPageChange(page + 1)}
        >
          {page + 1}
        </button>
      ))}
      <button onClick={handleNextPage} disabled={currentPage === Math.ceil(filteredCount / entriesPerPage)}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
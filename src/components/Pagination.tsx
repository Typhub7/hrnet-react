import React from "react";

interface PaginationProps {
  currentPage: number;
  filteredCount: number;
  entriesPerPage: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({
  currentPage,
  filteredCount,
  entriesPerPage,
  onPageChange,
}: PaginationProps) => {
  const handlePreviousPage = () => {
    onPageChange(currentPage - 1);
  };

  const handleNextPage = () => {
    onPageChange(currentPage + 1);
  };

  return (
    <div className="pagination flex items-center">
      <button
        className={`mr-1 mt-0 ${
          currentPage === 1 ? "text-gray-400 cursor-not-allowed" : "text-black"
        }`}
        onClick={handlePreviousPage}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      {[...Array(Math.ceil(filteredCount / entriesPerPage)).keys()].map(
        (page) => (
          <button
            key={page + 1}
            className={`page-number mx-2 my-0 ${
              currentPage === page + 1 ? "font-bold bg-gray-400" : ""
            }`}
            onClick={() => onPageChange(page + 1)}
          >
            {page + 1}
          </button>
        )
      )}
      <button
        className={`mr-1 mt-0 ${
          currentPage === Math.ceil(filteredCount / entriesPerPage)
            ? "text-gray-400 cursor-not-allowed"
            : "text-black"
        }`}
        onClick={handleNextPage}
        disabled={currentPage === Math.ceil(filteredCount / entriesPerPage)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;

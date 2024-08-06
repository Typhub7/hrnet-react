import React from "react";

// Props interface for Pagination
interface PaginationProps {
  currentPage: number;
  filteredCount: number;
  entriesPerPage: number;
  onPageChange: (page: number) => void;
}

/**
 * Pagination component for navigating through pages of employees.
 *
 * @param {number} currentPage - The current page number.
 * @param {number} filteredCount - The total number of filtered items.
 * @param {number} entriesPerPage - The number of items per page.
 * @param {function} onPageChange - Callback function to change the page.
 */
const Pagination = ({
  currentPage,
  filteredCount,
  entriesPerPage,
  onPageChange,
}: PaginationProps) => {
  // Calculate the total number of pages
  const totalPages = Math.ceil(filteredCount / entriesPerPage);
  const maxButtons = 7;

  // Handle the action when the previous page button is clicked
  const handlePreviousPage = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  // Handle the action when the next page button is clicked
  const handleNextPage = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  // Generate the page numbers to be displayed
  const renderPageNumbers = () => {
    const pages = [];
    const half = Math.floor(maxButtons / 2);

    if (totalPages <= maxButtons) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1); // Always display the first page
      if (currentPage > half + 1) {
        pages.push("...");
      }

      const start = Math.max(2, currentPage - half + 1);
      const end = Math.min(totalPages - 1, currentPage + half - 1);

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      if (currentPage + half < totalPages - 1) {
        pages.push("...");
      }
      pages.push(totalPages); // Always display the last page
    }

    return pages;
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
      {renderPageNumbers().map((page, index) =>
        typeof page === "string" ? (
          <span key={`ellipsis-${index}`} className="mx-2">
            {page}
          </span>
        ) : (
          <button
            key={page}
            className={`page-number mx-2 my-0 ${
              currentPage === page ? "font-bold bg-gray-400" : ""
            }`}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        )
      )}
      <button
        className={`mr-1 mt-0 ${
          currentPage === totalPages
            ? "text-gray-400 cursor-not-allowed"
            : "text-black"
        }`}
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;

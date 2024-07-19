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
  const totalPages = Math.ceil(filteredCount / entriesPerPage);
  const maxButtons = 7; // Nombre maximum de boutons (sans compter "Previous" et "Next")

  const handlePreviousPage = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  const renderPageNumbers = () => {
    const pages = [];
    const half = Math.floor(maxButtons / 3);
    let start = Math.max(2, currentPage - half);
    let end = Math.min(totalPages - 1, currentPage + half);

    if (currentPage <= half) {
      end = maxButtons - 1;
    } else if (currentPage + half >= totalPages) {
      start = totalPages - maxButtons + 2;
    }

    if (start > 2) {
      pages.push(1);
      pages.push("...");
    } else {
      for (let i = 1; i < start; i++) {
        pages.push(i);
      }
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (end < totalPages - 1) {
      pages.push("...");
      pages.push(totalPages);
    } else {
      for (let i = end + 1; i <= totalPages; i++) {
        pages.push(i);
      }
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
          currentPage === totalPages ? "text-gray-400 cursor-not-allowed" : "text-black"
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

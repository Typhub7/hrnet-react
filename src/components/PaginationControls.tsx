/*import React from 'react';
import { useTableInstance } from 'react-table';

interface PaginationControlsProps {
  // Ajoutez les props nécessaires selon votre besoin
}

const PaginationControls: React.FC<PaginationControlsProps> = () => {
  const {
    canPreviousPage,
    canNextPage,
    nextPage,
    previousPage,
    pageOptions,
    pageCount,
    gotoPage,
    state: { pageIndex },
  } = useTableInstance();

  return (
    <div>
      <button onClick={() => previousPage()} disabled={!canPreviousPage}>
        Previous
      </button>
      <button onClick={() => nextPage()} disabled={!canNextPage}>
        Next
      </button>
      <span>
        Go to page:
        <input
          type="number"
          value={pageIndex + 1}
          onChange={(e) => {
            const page = e.target.value ? Number(e.target.value) - 1 : 0;
            gotoPage(page);
          }}
          style={{ width: '50px' }}
        />
      </span>
      <span>
        Page {pageIndex + 1} of {pageOptions.length}
      </span>
    </div>
  );
};

export default PaginationControls;*/

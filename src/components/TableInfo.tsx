import React from "react";

interface TableInfoProps {
  currentCount: number;
  totalCount: number;
  filtered: boolean;
}

/**
 * TableInfo component that displays information about the table entries.
 * 
 * @param {number} currentCount - The current number of entries displayed.
 * @param {number} totalCount - The total number of entries available.
 * @param {boolean} filtered - Indicates if the data is filtered.
 * @returns {JSX.Element} The rendered table information component.
 */
const TableInfo = ({ currentCount, totalCount, filtered }: TableInfoProps) => {
  return (
    <div className="table-info">
      {filtered ? (
        <p>
          Showing {currentCount} to {currentCount} of {currentCount} entries
          (filtered from {totalCount} total entries)
        </p>
      ) : (
        <p>
          Showing 1 to {currentCount} of {currentCount} entries
        </p>
      )}
    </div>
  );
};

export default TableInfo;

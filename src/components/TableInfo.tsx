import React from 'react';

interface TableInfoProps {
  currentCount: number;
  totalCount: number;
  filtered: boolean;
}

const TableInfo = ({ currentCount, totalCount, filtered } : TableInfoProps) => {
  return (
    <div className="table-info">
      {filtered ? (
        <p>
          Showing {currentCount} to {currentCount} of {currentCount} entries (filtered from {totalCount} total entries)
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
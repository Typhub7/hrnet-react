/*import React from 'react';
import { useTable } from 'react-table';

interface PageSizeSelectorProps {
  // Vous pouvez ajouter des props supplémentaires selon vos besoins
}

const PageSizeSelector: React.FC<PageSizeSelectorProps> = () => {
    const { state, setPageSize } = useTable();
    const { pageSize } = state;

  return (
    <div>
      Show{' '}
      <select
        value={pageSize}
        onChange={(e) => setPageSize(Number(e.target.value))}
      >
        {[10, 25, 50, 100].map((size) => (
          <option key={size} value={size}>
            {size}
          </option>
        ))}
      </select>{' '}
      entries
    </div>
  );
};

export default PageSizeSelector;*/

/*import React from 'react';
import { useGlobalFilter } from 'react-table';

interface GlobalFilterProps {
  globalFilter: string;
  setGlobalFilter: (filterValue: string | undefined) => void;
}

const GlobalFilter: React.FC<GlobalFilterProps> = ({ globalFilter, setGlobalFilter }) => {
  const { setGlobalFilter: setTableGlobalFilter } = useGlobalFilter();

  return (
    <span>
      Search:{' '}
      <input
        value={globalFilter || ''}
        onChange={(e) => {
          const value = e.target.value;
          setGlobalFilter(value); // Met à jour le filtre global dans votre composant parent
          setTableGlobalFilter(value); // Met à jour le filtre global dans React Table
        }}
        style={{ fontSize: '1.1rem', margin: '0 0 10px 10px' }}
      />
    </span>
  );
};

export default GlobalFilter;*/
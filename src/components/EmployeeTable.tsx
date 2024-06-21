import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useTable, useSortBy, Column, TableInstance } from 'react-table';
import { RootState } from '../redux/store';
import { Employee } from '../pages/CreateEmployee';
import './EmployeeTable.css';

interface EmployeeTableProps {
  filterText: string;
  updateCounts: (filteredCount: number, totalCount: number) => void;
  entriesPerPage: number;
  currentPage: number;
}

const EmployeeTable: React.FC<EmployeeTableProps> = ({
  filterText,
  updateCounts,
  entriesPerPage,
  currentPage,
}) => {
  const employees = useSelector((state: RootState) => state.employees.list);

  const columns: Column<Employee>[] = useMemo(
    () => [
      { Header: 'First Name', accessor: 'firstName' },
      { Header: 'Last Name', accessor: 'lastName' },
      { Header: 'Start Date', accessor: 'startDate' },
      { Header: 'Department', accessor: 'department' },
      { Header: 'Date of Birth', accessor: 'dateOfBirth' },
      { Header: 'Street', accessor: 'street' },
      { Header: 'City', accessor: 'city' },
      { Header: 'State', accessor: 'state' },
      { Header: 'Zip Code', accessor: 'zipCode' },
    ],
    []
  );

  const data = useMemo(() => {
    let filteredData = employees;
    if (filterText.trim()) {
      filteredData = employees.filter(employee =>
        Object.values(employee).some(
          value =>
            typeof value === 'string' &&
            value.toLowerCase().includes(filterText.toLowerCase())
        )
      );
    }
    updateCounts(filteredData.length, employees.length);
    return filteredData;
  }, [employees, filterText, updateCounts]);

  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * entriesPerPage;
    return data.slice(startIndex, startIndex + entriesPerPage);
  }, [data, currentPage, entriesPerPage]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setSortBy,
  } = useTable({ columns, data: paginatedData }, useSortBy) as TableInstance<Employee>;

  const handleSortAsc = (column: Column<Employee>) => {
    if (column.id) {
      setSortBy([{ id: column.id, desc: false }]);
    }
  };

  const handleSortDesc = (column: Column<Employee>) => {
    if (column.id) {
      setSortBy([{ id: column.id, desc: true }]);
    }
  };

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>
                <div className="arrow_container">
                  {column.render('Header')}
                  <div className="sort-arrows">
                    <span
                      className={`sort-arrow ${
                        column.isSorted && !column.isSortedDesc ? 'sort-asc' : 'sort-default'
                      }`}
                      onClick={() => handleSortAsc(column)}
                    >
                      ▲
                    </span>
                    <span
                      className={`sort-arrow ${
                        column.isSorted && column.isSortedDesc ? 'sort-desc' : 'sort-default'
                      }`}
                      onClick={() => handleSortDesc(column)}
                    >
                      ▼
                    </span>
                  </div>
                </div>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => (
                <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default EmployeeTable;

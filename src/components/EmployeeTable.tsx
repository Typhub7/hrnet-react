import React from 'react';
import { useSelector } from 'react-redux';
import { useTable, useSortBy, Column, TableInstance } from 'react-table';
import { RootState } from '../redux/store';
import { Employee } from '../pages/CreateEmployee';
import './EmployeeTable.css'; // Assurez-vous de créer ce fichier CSS

const EmployeeTable: React.FC = () => {
  const employees = useSelector((state: RootState) => state.employees.list);

  const columns: Column<Employee>[] = React.useMemo(
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

  const data = React.useMemo(() => employees, [employees]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data }, useSortBy) as TableInstance<Employee>;

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                <div className="arrow_container">
                  {column.render('Header')}
                  <div className="sort-arrows">
                    <span
                      className={`sort-arrow ${
                        column.isSorted && !column.isSortedDesc
                          ? 'sort-asc'
                          : 'sort-default'
                      }`}
                    >
                      ▲
                    </span>
                    <span
                      className={`sort-arrow ${
                        column.isSorted && column.isSortedDesc
                          ? 'sort-desc'
                          : 'sort-default'
                      }`}
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
import React, { useMemo, useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { useTable, useSortBy, Column, TableInstance } from "react-table";
import { RootState } from "../redux/store";
import { Employee } from "../pages/CreateEmployee";

interface EmployeeTableProps {
  filterText: string;
  updateCounts: (filteredCount: number, totalCount: number) => void;
  entriesPerPage: number;
  currentPage: number;
}

const EmployeeTable = ({
  filterText,
  updateCounts,
  entriesPerPage,
  currentPage,
}: EmployeeTableProps) => {
  const employees = useSelector((state: RootState) => state.employees.list);
  const tableRef = useRef<HTMLTableElement>(null);

  const [sortedColumnId, setSortedColumnId] = useState<string | null>(null);

  const columns: Column<Employee>[] = useMemo(
    () => [
      { Header: "First Name", accessor: "firstName" },
      { Header: "Last Name", accessor: "lastName" },
      { Header: "Start Date", accessor: "startDate" },
      { Header: "Department", accessor: "department" },
      { Header: "Date of Birth", accessor: "dateOfBirth" },
      { Header: "Street", accessor: "street" },
      { Header: "City", accessor: "city" },
      { Header: "State", accessor: "state" },
      { Header: "Zip Code", accessor: "zipCode" },
    ],
    []
  );

  const data = useMemo(() => {
    let filteredData = employees;
    if (filterText.trim()) {
      filteredData = employees.filter((employee) =>
        Object.values(employee).some(
          (value) =>
            typeof value === "string" &&
            value.toLowerCase().includes(filterText.toLowerCase())
        )
      );
    }
    return filteredData;
  }, [employees, filterText]);

  useEffect(() => {
    updateCounts(data.length, employees.length);
  }, [data.length, employees.length, updateCounts]);

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
  } = useTable(
    { columns, data: paginatedData },
    useSortBy
  ) as TableInstance<Employee>;

  const handleSortAsc = (column: Column<Employee>) => {
    if (column.id) {
      setSortBy([{ id: column.id, desc: false }]);
      setSortedColumnId(column.id);
    }
  };

  const handleSortDesc = (column: Column<Employee>) => {
    if (column.id) {
      setSortBy([{ id: column.id, desc: true }]);
      setSortedColumnId(column.id);
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (tableRef.current && !tableRef.current.contains(event.target as Node)) {
      setSortBy([]);
      setSortedColumnId(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <table ref={tableRef} className="w-full border-collapse" {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => {
          const { key, ...restHeaderGroupProps } = headerGroup.getHeaderGroupProps();
          return (
            <tr key={key} {...restHeaderGroupProps}>
              {headerGroup.headers.map((column) => {
                const { key: columnKey, ...restColumnProps } = column.getHeaderProps();
                return (
                  <th
                    key={columnKey}
                    className={`bg-gray-400 ${sortedColumnId === column.id ? "bg-slate-400" : ""}`}
                    {...restColumnProps}
                  >
                    <div className="arrow_container flex items-center cursor-pointer justify-between">
                      {column.render("Header")}
                      <div className="sort-arrows flex flex-col ml-1 text-gray-300">
                        <span
                          className={`sort-arrow ${
                            column.isSorted && !column.isSortedDesc ? "text-black" : "text-gray-300"
                          } text-xl`}
                          onClick={() => handleSortAsc(column)}
                        >
                          ▲
                        </span>
                        <span
                          className={`sort-arrow ${
                            column.isSorted && column.isSortedDesc ? "text-black" : "text-gray-300"
                          } text-xl`}
                          onClick={() => handleSortDesc(column)}
                        >
                          ▼
                        </span>
                      </div>
                    </div>
                  </th>
                );
              })}
            </tr>
          );
        })}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          const { key, ...restRowProps } = row.getRowProps();
          return (
            <tr key={key} {...restRowProps}>
              {row.cells.map((cell) => {
                const { key: cellKey, ...restCellProps } = cell.getCellProps();
                return (
                  <td key={cellKey} className={sortedColumnId === cell.column.id ? "bg-slate-300" : ""} {...restCellProps}>
                    {cell.render("Cell")}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default EmployeeTable;

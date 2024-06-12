import React from 'react';
import DataTable from '../components/DataTable';
import { Column } from 'react-table';

interface Employee {
  firstName: string;
  lastName: string;
  // Ajoute d'autres champs selon tes besoins
}

const EmployeeList: React.FC = () => {
  const data: Employee[] = React.useMemo(() => [
    // Ajoute tes données ici, par exemple:
    // { firstName: 'John', lastName: 'Doe' },
  ], []);

  const columns: Column<Employee>[] = React.useMemo(() => [
    { Header: 'First Name', accessor: 'firstName' },
    { Header: 'Last Name', accessor: 'lastName' },
    // Ajoute d'autres colonnes ici
  ], []);

  return (
    <div>
      <h1>Current Employees</h1>
      <DataTable columns={columns} data={data} />
      <a href="index.html">Home</a>
    </div>
  );
};

export default EmployeeList;
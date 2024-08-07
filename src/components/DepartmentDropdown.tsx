import React from "react";
import { Dropdown } from "react-dropdown-package";
import { options as departmentOptions } from "../data/department";

interface DepartmentDropdownProps {
  selectedDepartment: string;
  onSelectedChange: (selected: string) => void;
}

/**
 * Renders a dropdown component for selecting a department.
 *
 * @param {DepartmentDropdownProps} props - The props object containing the selected department and the onSelectedChange function.
 * @return {JSX.Element} The rendered DepartmentDropdown component.
 */
const DepartmentDropdown = ({
  selectedDepartment,
  onSelectedChange,
}: DepartmentDropdownProps) => {
  return (
    <div className="dropdown_container">
      <label htmlFor="department">Department</label>
      <Dropdown
        options={departmentOptions}
        selected={selectedDepartment}
        onSelectedChange={onSelectedChange}
        customClasses={{
          list: "bg-white",
        }}
        buttonWidth={304}
        listWidth={300}
      />
    </div>
  );
};

export default DepartmentDropdown;

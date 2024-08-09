import React, { useEffect, useRef, useState } from "react";
import { Dropdown } from "react-dropdown-package";
import { options as departmentOptions } from "../data/department";

interface DepartmentDropdownProps {
  selectedDepartment: string;
  onSelectedChange: (selected: string) => void;
}

const DepartmentDropdown = ({
  selectedDepartment,
  onSelectedChange,
}: DepartmentDropdownProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isDropdownOpen && dropdownRef.current) {
      dropdownRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [isDropdownOpen]);

  return (
    <div className="dropdown_container" ref={dropdownRef}>
      <label htmlFor="department">Department</label>
      <Dropdown
        options={departmentOptions}
        selected={selectedDepartment}
        onSelectedChange={(selected) => {
          onSelectedChange(selected);
          setIsDropdownOpen(false); 
        }}
        onOpen={() => setIsDropdownOpen(true)} 
        onClose={() => setIsDropdownOpen(false)} 
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

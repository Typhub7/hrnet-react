import React, { useEffect, useRef, useState } from "react";
import { Dropdown } from "react-dropdown-package";
import { states } from "../data/states";

interface StateDropdownProps {
  selectedState: string;
  onSelectedChange: (selected: string) => void;
}

const StateDropdown = ({
  selectedState,
  onSelectedChange,
}: StateDropdownProps) => {
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
      <label htmlFor="state">State</label>
      <Dropdown
        options={states.map((state) => ({
          value: state.abbreviation,
          label: state.name,
        }))}
        selected={selectedState}
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

export default StateDropdown;

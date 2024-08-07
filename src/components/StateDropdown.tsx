import React from "react";
import { Dropdown } from "react-dropdown-package";
import { states } from "../data/states";
interface StateDropdownProps {
  selectedState: string;
  onSelectedChange: (selected: string) => void;
}

/**
 * Renders a dropdown component for selecting a state.
 *
 * @param {StateDropdownProps} props - The props object containing the selected state and the onSelectedChange function.
 * @return {JSX.Element} The rendered StateDropdown component.
 */
const StateDropdown = ({
  selectedState,
  onSelectedChange,
}: StateDropdownProps) => {
  return (
    <div className="dropdown_container">
      <label htmlFor="state">State</label>
      <Dropdown
        options={states.map((state) => ({
          value: state.abbreviation,
          label: state.name,
        }))}
        selected={selectedState}
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

export default StateDropdown;

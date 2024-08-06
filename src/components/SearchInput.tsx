import React, { useState } from "react";

interface SearchInputProps {
  onSearch: (searchTerm: string) => void;
}

/**
 * SearchInput component for handling search input and triggering search actions.
 * 
 * @param {function} onSearch - Callback function to handle search action.
 * @returns {JSX.Element} The rendered search input component.
 */
const SearchInput = ({ onSearch }: SearchInputProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value); // Call the search function on every change
  };

  return (
    <input
      type="text"
      placeholder="Search..."
      value={searchTerm}
      onChange={handleChange}
    />
  );
};

export default SearchInput;

import React from "react";

interface AddressFieldsProps {
  street: string;
  city: string;
  zipCode: string;
  onChange: (field: string, value: string) => void;
  errors: { [key: string]: string };
}

/**
 * A React functional component that renders a group of address fields, including street, city, and zip code.
 * It handles changes to these fields and displays any errors that may occur.
 *
 * @param {string} street - The current street value.
 * @param {string} city - The current city value.
 * @param {string} zipCode - The current zip code value.
 * @param {function} onChange - A callback function to handle changes to the address fields.
 * @param {object} errors - An object containing any error messages for the address fields.
 * @return {JSX.Element} The rendered address fields.
 */
const AddressFields: React.FC<AddressFieldsProps> = ({ street, city, zipCode, onChange, errors }) => {
  return (
    <>
      <label htmlFor="street">Street</label>
      <input
        type="text"
        id="street"
        value={street}
        onChange={(e) => onChange("street", e.target.value)}
        className={`border-2 border-gray-300 p-2 rounded-md ${errors.street ? "border-red-500" : ""}`}
      />
      {errors.street && <p className="text-red-500">{errors.street}</p>}

      <label htmlFor="city">City</label>
      <input
        type="text"
        id="city"
        value={city}
        onChange={(e) => onChange("city", e.target.value)}
        className={`border-2 border-gray-300 p-2 rounded-md ${errors.city ? "border-red-500" : ""}`}
      />
      {errors.city && <p className="text-red-500">{errors.city}</p>}

      <label htmlFor="zip-code">Zip Code</label>
      <input
        type="text"
        id="zip-code"
        value={zipCode}
        onChange={(e) => onChange("zipCode", e.target.value)}
        className={`border-2 border-gray-300 p-2 rounded-md ${errors.zipCode ? "border-red-500" : ""}`}
      />
      {errors.zipCode && <p className="text-red-500">{errors.zipCode}</p>}
    </>
  );
};

export default AddressFields;

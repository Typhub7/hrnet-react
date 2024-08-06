import React from "react";

interface FieldWithErrorProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

/**
 * A React functional component that renders a field with an error message.
 *
 * @param {FieldWithErrorProps} props - The props object containing the label, value, onChange, and error properties.
 * @param {string} props.label - The label for the field.
 * @param {string} props.value - The current value of the field.
 * @param {function} props.onChange - The callback function to handle changes to the field.
 * @param {string} [props.error] - The error message to display, if any.
 * @return {JSX.Element} The rendered field with error message.
 */
const FieldWithError: React.FC<FieldWithErrorProps> = ({ label, value, onChange, error }) => {
  return (
    <div className="mb-4">
      <label htmlFor={label.toLowerCase().replace(" ", "-")}>{label}</label>
      <input
        type="text"
        id={label.toLowerCase().replace(" ", "-")}
        value={value}
        onChange={onChange}
        className={`border-2 border-gray-300 p-2 rounded-md ${error ? "border-red-500" : ""}`}
      />
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default FieldWithError;
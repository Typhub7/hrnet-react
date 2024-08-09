import React, { useState } from "react";
import DatePicker from "../components/DatePicker";
import { options as departmentOptions, Option } from "../data/department";
import { states, OptionState } from "../data/states";
import {
  validateFirstName,
  validateLastName,
  validateDateOfBirth,
  validateStartDate,
  validateStreet,
  validateCity,
  validateZipCode,
} from "../validation/validation";
import FieldWithError from "./FieldWithDisplayError";
import AddressFields from "./AddressFields";
import DepartmentDropdown from "./DepartmentDropdown";
import StateDropdown from "./StateDropdown";
import { Employee } from "../interfaces/employee";

interface EmployeeFormProps {
  onSave: (employee: Employee) => void;
}

const EmployeeForm = ({ onSave }: EmployeeFormProps) => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [dateOfBirth, setDateOfBirth] = useState<Date | null>(null);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [street, setStreet] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [zipCode, setZipCode] = useState<string>("");
  const [selectedDepartment, setSelectedDepartment] = useState<Option>(
    departmentOptions[0]
  );
  const [selectedStates, setSelectedStates] = useState<OptionState>(states[0]);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  /**
   * Validate form fields and set error messages.
   *
   * @returns {boolean} True if all fields are valid, false otherwise.
   */
  const validateFields = () => {
    const newErrors: { [key: string]: string } = {};
    newErrors.firstName = validateFirstName(firstName);
    newErrors.lastName = validateLastName(lastName);
    newErrors.dateOfBirth = validateDateOfBirth(dateOfBirth);
    newErrors.startDate = validateStartDate(startDate);
    newErrors.street = validateStreet(street);
    newErrors.city = validateCity(city);
    newErrors.zipCode = validateZipCode(zipCode);

    // Filter out empty error messages
    const filteredErrors = Object.fromEntries(
      Object.entries(newErrors).filter(([key, value]) => value)
    );

    setErrors(filteredErrors);
    return Object.keys(filteredErrors).length === 0;
  };

  /**
   * Updates the state and error messages based on the field and value provided.
   *
   * @param {string} field - The field to update.
   * @param {string} value - The new value for the field.
   * @return {void}
   */
  const handleFieldChange = (field: string, value: string) => {
    switch (field) {
      case "firstName":
        setFirstName(value);
        setErrors({ ...errors, firstName: validateFirstName(value) });
        break;
      case "lastName":
        setLastName(value);
        setErrors({ ...errors, lastName: validateLastName(value) });
        break;
      case "street":
        setStreet(value);
        setErrors({ ...errors, street: validateStreet(value) });
        break;
      case "city":
        setCity(value);
        setErrors({ ...errors, city: validateCity(value) });
        break;
      case "zipCode":
        setZipCode(value);
        setErrors({ ...errors, zipCode: validateZipCode(value) });
        break;
      default:
        break;
    }
  };

  const saveEmployee = () => {
    if (!validateFields()) return;
    const employee: Employee = {
      firstName,
      lastName,
      dateOfBirth: dateOfBirth ? dateOfBirth.toLocaleDateString() : "",
      startDate: startDate ? startDate.toLocaleDateString() : "",
      department: selectedDepartment ? selectedDepartment.value : "",
      street,
      city,
      state: selectedStates.name,
      zipCode,
    };
    onSave(employee);
  };

  return (
    <form id="create-employee" className="w-full mb-4">
      <FieldWithError
        label="First Name"
        value={firstName}
        onChange={(e) => handleFieldChange("firstName", e.target.value)}
        error={errors.firstName}
      />
      <FieldWithError
        label="Last Name"
        value={lastName}
        onChange={(e) => handleFieldChange("lastName", e.target.value)}
        error={errors.lastName}
      />
      <label htmlFor="date-of-birth">Date of Birth</label>
      <div id="date-of-birth">
        <DatePicker
          selectedDate={dateOfBirth}
          onChange={(date: Date | null) => setDateOfBirth(date)}
        />
      </div>
      {errors.dateOfBirth && (
        <p className="text-red-500">{errors.dateOfBirth}</p>
      )}
      <label htmlFor="start-date">Start Date</label>
      <div id="start-date">
        <DatePicker
          selectedDate={startDate}
          onChange={(date: Date | null) => setStartDate(date)}
        />
      </div>
      {errors.startDate && <p className="text-red-500">{errors.startDate}</p>}
      <fieldset className="address border border-gray-300 rounded p-2 mt-2 w-11/12">
        <legend className="px-2 font-bold">Address</legend>
        <AddressFields
          street={street}
          city={city}
          zipCode={zipCode}
          onChange={handleFieldChange}
          errors={errors}
        />
        <StateDropdown
          selectedState={selectedStates.name}
          onSelectedChange={(selected) =>
            setSelectedStates({ name: selected, abbreviation: selected })
          }
        />
      </fieldset>
      <DepartmentDropdown
        selectedDepartment={selectedDepartment.value}
        onSelectedChange={(selected) =>
          setSelectedDepartment({ value: selected, label: selected })
        }
      />
      <button
        type="button"
        className="font-bold w-80 h-20 my-14 text-xl text-white bg-sky-900 hover:bg-sky-600 transition-colors duration-300 ease-in-out"
        onClick={saveEmployee}
      >
        Save
      </button>
    </form>
  );
};

export default EmployeeForm;

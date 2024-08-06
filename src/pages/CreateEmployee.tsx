import React, { useState, useRef, useEffect } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import DatePicker from "../components/DatePicker";
import { addEmployee } from "../redux/employeeSlice";
import { Dropdown } from "react-dropdown-package";
import { options as departmentOptions, Option } from "../data/department";
import { states, OptionState } from "../data/states";
import CustomModal from "../components/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import {
  validateFirstName,
  validateLastName,
  validateDateOfBirth,
  validateStartDate,
  validateStreet,
  validateCity,
  validateZipCode,
} from "../validation/validation";

export interface Employee {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  startDate: string;
  department: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
}
/**
 * CreateEmployee component that renders a form for creating a new employee.
 * 
 * @returns {JSX.Element} The rendered component.
 */

const CreateEmployee: React.FC = () => {
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
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const dispatch = useDispatch();
  const dropdownRef = useRef<HTMLDivElement>(null);

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


  const handleFirstNameChange = (value: string) => {
    setFirstName(value);
    setErrors({ ...errors, firstName: validateFirstName(value) });
  };

  const handleLastNameChange = (value: string) => {
    setLastName(value);
    setErrors({ ...errors, lastName: validateLastName(value) });
  };

  const handleStreetChange = (value: string) => {
    setStreet(value);
    setErrors({ ...errors, street: validateStreet(value) });
  };

  const handleCityChange = (value: string) => {
    setCity(value);
    setErrors({ ...errors, city: validateCity(value) });
  };

  const handleZipCodeChange = (value: string) => {
    setZipCode(value);
    setErrors({ ...errors, zipCode: validateZipCode(value) });
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
    dispatch(addEmployee(employee));
    setIsModalOpen(true);
  };

  const handleSelectedDepartmentChange = (selected: string) => {
    const selectedOption: Option = { value: selected, label: selected };
    setSelectedDepartment(selectedOption);
  };

  const handleSelectedStateChange = (selected: string) => {
    const selectedOption: OptionState = {
      name: selected,
      abbreviation: selected,
    };
    setSelectedStates(selectedOption);
  };

  useEffect(() => {
    if (isDropdownOpen && dropdownRef.current) {
      dropdownRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [isDropdownOpen]);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="bg-white border-1 border-solid border-gray-500 rounded-lg shadow-lg">
      <div className="w-80 m-12">
        <Header />
        <nav className="text-center text-sky-800 font-bold drop-shadow-lg no-underline mt-7 text-xl my-5 hover:text-blue-900 hover:scale-110 transition-all duration-300">
          <Link to="/employees" className="flex items-center justify-center">
            <FontAwesomeIcon icon={faUsers} className="mr-2" />
            Employee List
          </Link>
        </nav>
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Create Employee
        </h2>
        <form id="create-employee" className="w-full mb-4">
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            id="first-name"
            value={firstName}
            onChange={(e) => handleFirstNameChange(e.target.value)}
          />
          {errors.firstName && (
            <p className="text-red-500">{errors.firstName}</p>
          )}

          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            id="last-name"
            value={lastName}
            onChange={(e) => handleLastNameChange(e.target.value)}
          />
          {errors.lastName && <p className="text-red-500">{errors.lastName}</p>}

          <label htmlFor="date-of-birth">Date of Birth</label>
          <div id="date-of-birth">
            <DatePicker
              selectedDate={dateOfBirth}
              onChange={(date: Date | null) => {
                setDateOfBirth(date);
              }}
            />
          </div>
          {errors.dateOfBirth && (
            <p className="text-red-500">{errors.dateOfBirth}</p>
          )}

          <label htmlFor="start-date">Start Date</label>
          <div id="start-date">
            <DatePicker
              selectedDate={startDate}
              onChange={(date: Date | null) => {
                setStartDate(date);
              }}
            />
          </div>
          {errors.startDate && (
            <p className="text-red-500">{errors.startDate}</p>
          )}

          <fieldset className="address">
            <legend>Address</legend>
            <label htmlFor="street">Street</label>
            <input
              type="text"
              id="street"
              value={street}
              onChange={(e) => handleStreetChange(e.target.value)}
            />
            {errors.street && <p className="text-red-500">{errors.street}</p>}

            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              value={city}
              onChange={(e) => handleCityChange(e.target.value)}
            />
            {errors.city && <p className="text-red-500">{errors.city}</p>}

            <label htmlFor="state">State</label>
            <div className="dropdown_container" onClick={handleDropdownToggle}>
              <Dropdown
                options={states.map((state) => ({
                  value: state.abbreviation,
                  label: state.name,
                }))}
                selected={selectedStates.name}
                onSelectedChange={handleSelectedStateChange}
                customClasses={{
                  list: "bg-white",
                }}
                buttonWidth={304}
                listWidth={300}
              />
            </div>

            <label htmlFor="zip-code">Zip Code</label>
            <input
              type="text"
              id="zip-code"
              value={zipCode}
              onChange={(e) => handleZipCodeChange(e.target.value)}
            />
            {errors.zipCode && <p className="text-red-500">{errors.zipCode}</p>}
          </fieldset>
          <label htmlFor="department">Department</label>
          <div
            ref={dropdownRef}
            className="dropdown_container"
            onClick={handleDropdownToggle}
          >
            <Dropdown
              options={departmentOptions}
              selected={selectedDepartment.value}
              onSelectedChange={handleSelectedDepartmentChange}
              customClasses={{
                list: "bg-white",
              }}
              buttonWidth={304}
              listWidth={300}
            />
          </div>
        </form>
        <button
          type="button"
          className="font-bold w-80 h-20 my-14 text-xl text-white bg-sky-900 hover:bg-sky-600 transition-colors duration-300 ease-in-out"
          onClick={saveEmployee}
        >
          Save
        </button>
        <CustomModal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          content={<p>Employee Created!</p>}
        />
      </div>
    </div>
  );
};

export default CreateEmployee;

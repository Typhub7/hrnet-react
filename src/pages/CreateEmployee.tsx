import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import DatePicker from '../components/DatePicker';
import { addEmployee } from '../redux/employeeSlice';
import { Dropdown } from 'react-dropdown-package';
import { options as departmentOptions, Option } from '../data/department';
import { states, OptionState } from '../data/states';
import CustomModal from '../components/Modal';

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

const CreateEmployee: React.FC = () => {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [dateOfBirth, setDateOfBirth] = useState<Date | null>(null);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [street, setStreet] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [zipCode, setZipCode] = useState<string>('');
  const [selectedDepartment, setSelectedDepartment] = useState<Option>(departmentOptions[0]);
  const [selectedStates, setSelectedStates] = useState<OptionState>(states[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const dispatch = useDispatch();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const saveEmployee = () => {
    const employee: Employee = {
      firstName,
      lastName,
      dateOfBirth: dateOfBirth ? dateOfBirth.toLocaleDateString() : "",
      startDate: startDate ? startDate.toLocaleDateString() : "",
      department: selectedDepartment ? selectedDepartment.value : '',
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
    const selectedOption: OptionState = { name: selected, abbreviation: selected };
    setSelectedStates(selectedOption);
  };

  useEffect(() => {
    if (isDropdownOpen && dropdownRef.current) {
      dropdownRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      });
    }
  }, [isDropdownOpen]);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className='w-80'>
      <nav className='text-center text-blue-700 no-underline mt-3 text-xl my-5 hover:text-blue-900 hover:scale-110 transition-all duration-300'>
        <Link to="/employees">Employee List</Link>
      </nav>
      <h2 className='text-3xl font-bold text-center text-gray-800 mb-8'>Create Employee</h2>
      <form id="create-employee" className='w-full mb-4'>
        <label htmlFor="first-name">First Name</label>
        <input
          type="text"
          id="first-name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label htmlFor="last-name">Last Name</label>
        <input
          type="text"
          id="last-name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <label htmlFor="date-of-birth">Date of Birth</label>
        <DatePicker
          selectedDate={dateOfBirth}
          onChange={(date: Date | null) => {
            setDateOfBirth(date);
          }}
        />
        <label htmlFor="start-date">Start Date</label>
        <DatePicker
          selectedDate={startDate}
          onChange={(date: Date | null) => {
            setStartDate(date);
          }}
        />
        <fieldset className="address">
          <legend>Address</legend>
          <label htmlFor="street">Street</label>
          <input
            type="text"
            id="street"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
          />
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <label htmlFor="state">State</label>
          <div className="dropdown_container" onClick={handleDropdownToggle}>
            <Dropdown
              options={states.map(state => ({ value: state.abbreviation, label: state.name }))}
              selected={selectedStates.name}
              onSelectedChange={handleSelectedStateChange}
            />
          </div>
          <label htmlFor="zip-code">Zip Code</label>
          <input
            type="number"
            id="zip-code"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
          />
        </fieldset>
        <label htmlFor="department">Department</label>
        <div 
          ref={dropdownRef} 
          className="dropdown_container"
          onClick={handleDropdownToggle}>
            <Dropdown options={departmentOptions} selected={selectedDepartment.value} onSelectedChange={handleSelectedDepartmentChange} />
        </div>
      </form>
      <button type="button" className="font-bold w-80 h-20 text-lg hover:bg-green-600" onClick={saveEmployee}>Save</button>
      <CustomModal 
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        content={<p>Employee Created!</p>}
      />
    </div>
  );
};

export default CreateEmployee;
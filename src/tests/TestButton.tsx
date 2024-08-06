import React from "react";
import { useDispatch } from "react-redux";
import { addEmployee } from "../redux/employeeSlice";
import { faker } from "@faker-js/faker";

/**
 * TestButton component that adds 10 test employees to the state when clicked.
 * This will only be visible for development environments.
 * @returns {JSX.Element} The rendered button component.
 */
const TestButton: React.FC = () => {
  const dispatch = useDispatch();

  const departments = [
    "Sales",
    "Marketing",
    "Engineering",
    "Human Resources",
    "Legal",
  ];

  /**
   * Format a date object to a string in DD/MM/YYYY format.
   * In order to have the display look consistent
   * @param {Date} date - The date to format.
   * @returns {string} The formatted date string.
   */
  const formatDate = (date: Date) => {
    return `${date.getDate().toString().padStart(2, "0")}/${(
      date.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}/${date.getFullYear()}`;
  };

  /**
   * Generate a fake employee object with random data.
   * 
   * @returns {Object} The generated fake employee.
   */
  const generateFakeEmployee = () => {
    const dateOfBirth = faker.date.birthdate({ min: 18, max: 65, mode: "age" });
    const startDate = faker.date.recent({ days: 90 });

    return {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      dateOfBirth: formatDate(dateOfBirth),
      startDate: formatDate(startDate),
      department: faker.helpers.arrayElement(departments),
      street: faker.location.streetAddress(),
      city: faker.location.city(),
      state: faker.location.state(),
      zipCode: faker.location.zipCode(),
    };
  };

  /**
   * Handle the action to add 10 test employees.
   */
  const handleAddTestEmployees = () => {
    for (let i = 0; i < 10; i++) {
      const fakeEmployee = generateFakeEmployee();
      dispatch(addEmployee(fakeEmployee));
    }
  };

  return (
    <button
      className="px-4 py-3 bg-white text-black rounded-md cursor-pointer z-50 hover:bg-green-700"
      onClick={handleAddTestEmployees}
    >
      Add 10 Test Employees
    </button>
  );
};

export default TestButton;

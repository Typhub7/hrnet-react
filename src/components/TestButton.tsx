import React from "react";
import { useDispatch } from "react-redux";
import { addEmployee } from "../redux/employeeSlice";
import { faker } from "@faker-js/faker";

const TestButton: React.FC = () => {
  const dispatch = useDispatch();

  const departments = [
    "Sales",
    "Marketing",
    "Engineering",
    "Human Resources",
    "Legal",
  ];

  const formatDate = (date: Date) => {
    return `${date.getDate().toString().padStart(2, "0")}/${(
      date.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}/${date.getFullYear()}`;
  };

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
  const handleAddTestEmployees = () => {
    for (let i = 0; i < 10; i++) {
      const fakeEmployee = generateFakeEmployee();
      dispatch(addEmployee(fakeEmployee));
    }
  };

  return (
    <button
      className="px-4 py-3 bg-green-500 text-white rounded-md cursor-pointer z-50 hover:bg-green-700"
      onClick={handleAddTestEmployees}
    >
      Add 10 Test Employees
    </button>
  );
};

export default TestButton;

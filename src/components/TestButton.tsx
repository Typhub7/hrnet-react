import React from 'react';
import { useDispatch } from 'react-redux';
import { addEmployee } from '../redux/employeeSlice';
import { faker } from '@faker-js/faker';

const TestButton: React.FC = () => {
  const dispatch = useDispatch();

  const departments = ['Sales', 'Marketing', 'Engineering', 'Human Resources', 'Legal'];

  const generateFakeEmployee = () => ({
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    dateOfBirth: faker.date.birthdate({ min: 18, max: 65, mode: 'age' }).toISOString().split('T')[0],
    startDate: faker.date.recent({ days: 60 }).toISOString().split('T')[0],
    department: faker.helpers.arrayElement(departments),
    street: faker.location.streetAddress(),
    city: faker.location.city(),
    state: faker.location.state(),
    zipCode: faker.location.zipCode(),
  });

  const handleAddTestEmployees = () => {
    for (let i = 0; i < 100; i++) {
      const fakeEmployee = generateFakeEmployee();
      dispatch(addEmployee(fakeEmployee));
    }
  };

  return (
    <button className="px-4 py-3 bg-green-500 text-white rounded-md cursor-pointer z-50 hover:bg-green-700" onClick={handleAddTestEmployees}>
      Add 100 Test Employees
    </button>
  );
};

export default TestButton;
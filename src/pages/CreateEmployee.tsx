import React, { useState } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addEmployee } from "../redux/employeeSlice";
import CustomModal from "../components/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import EmployeeForm from "../components/EmployeeForm";
import { Employee } from "../interfaces/employee";

const CreateEmployee: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [currentEmployee, setCurrentEmployee] = useState<Employee | null>(null);
  const dispatch = useDispatch();

  const saveEmployee = (employee: Employee) => {
    dispatch(addEmployee(employee));
    setCurrentEmployee(employee);
    setIsModalOpen(true);
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
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8 cursor-default">
          Create Employee
        </h2>
        <EmployeeForm onSave={saveEmployee} />
        <CustomModal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          content={
            currentEmployee ? (
              <p>Employee {currentEmployee.firstName} {currentEmployee.lastName} Created!</p>
            ) : (
              <p>Employee Created!</p>
            )
          }
        />
      </div>
    </div>
  );
};

export default CreateEmployee;

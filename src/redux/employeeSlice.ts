import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Employee {
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

export interface EmployeeState {
  list: Employee[];
}

const initialState: EmployeeState = {
  list: JSON.parse(localStorage.getItem('employees') || '[]'),
};

const employeeSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    addEmployee: (state, action: PayloadAction<Employee>) => {
      state.list.push(action.payload);
      localStorage.setItem('employees', JSON.stringify(state.list));
    },
  },
});

export const { addEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;
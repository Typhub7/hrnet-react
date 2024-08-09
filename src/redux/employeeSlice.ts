import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Employee } from "../interfaces/employee";

export interface EmployeeState {
  list: Employee[];
}

const initialState: EmployeeState = {
  list: JSON.parse(localStorage.getItem("employees") || "[]"),
};

const employeeSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    addEmployee: (state, action: PayloadAction<Employee>) => {
      state.list.push(action.payload);
      localStorage.setItem("employees", JSON.stringify(state.list));
    },
  },
});

export const { addEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;

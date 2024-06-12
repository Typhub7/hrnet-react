import { configureStore } from '@reduxjs/toolkit';
import employeesReducer from './employeeSlice';

const store = configureStore({
  reducer: {
    employees: employeesReducer,
  },
});

// Exportation des types RootState et AppDispatch pour une utilisation dans le projet
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
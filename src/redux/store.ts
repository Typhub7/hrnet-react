import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import employeesReducer, { EmployeeState } from './employeeSlice';

export interface RootState {
  employees: EmployeeState;
}

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers<any>({
  employees: employeesReducer,
});

const persistedReducer = persistReducer<any, any>(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;

const exportedStoreObject = { store, persistor };

export default exportedStoreObject;
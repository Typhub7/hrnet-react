import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import CreateEmployee from './pages/CreateEmployee';
import EmployeeList from './pages/EmployeeList';

const App: React.FC = () => {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname !== '/employees' && (
        <header className="App-header">
          <h1>HRnet</h1>
        </header>
      )}
      <Routes>
        <Route path="/" element={<CreateEmployee />} />
        <Route path="/employees" element={<EmployeeList />} />
      </Routes>
    </div>
  );
}

const AppWrapper: React.FC = () => {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
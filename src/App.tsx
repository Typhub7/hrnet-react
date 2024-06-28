import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import CreateEmployee from './pages/CreateEmployee';
import EmployeeList from './pages/EmployeeList';
import ResetButton from './components/ResetButton';
import TestButton from './components/TestButton';

const App: React.FC = () => {
  const location = useLocation();
  // Create env variable that allow to switch the display of 
  //2 Dev button to add 100 clients to test or to remove then 
  const showDevButtons = process.env.REACT_APP_SHOW_DEV_BUTTONS === 'true';

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
      {showDevButtons && <ResetButton />}
      {showDevButtons && <TestButton />}
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
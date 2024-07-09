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
    <div className="m-5 p-10 bg-white border-1 border-solid border-gray-500 rounded-lg shadow-lg">
      {location.pathname !== '/employees' && (
        <header className="text-center w-full">
          <h1 className='text-6xl mt-4 text-sky-800 font-bold drop-shadow-lg'>
          HRnet
          <span className='absolute left-16 -bottom-2.5 w-48 h-1.5 bg-gradient-to-r from-sky-900 via-sky-600 to-slate-400 drop-shadow-lg'></span>
      </h1>
        </header>
      )}
      <Routes>
        <Route path="/" element={<CreateEmployee />} />
        <Route path="/employees" element={<EmployeeList />} />
      </Routes>
      <div className='fixed bottom-20 right-5 flex flex-col'>
        {showDevButtons && <TestButton />}
        {showDevButtons && <ResetButton />}
      </div>
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
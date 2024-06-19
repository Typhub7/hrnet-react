import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateEmployee from './pages/CreateEmployee';
import EmployeeList from './pages/EmployeeList';


const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>HRnet</h1>
        </header>
        <Routes>
          <Route path="/" element={<CreateEmployee />} />
          <Route path="/employees" element={<EmployeeList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
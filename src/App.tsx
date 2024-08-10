import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import CreateEmployee from "./pages/CreateEmployee";
import EmployeeList from "./pages/EmployeeList";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<CreateEmployee />} />
      <Route path="/employees" element={<EmployeeList />} />
    </Routes>
  </Router>
);

export default App;

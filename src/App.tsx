import React from 'react';
import CreateEmployee from './pages/CreateEmployee';
import './app.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>HRnet</h1>
      </header>
      <CreateEmployee />
    </div>
  );
}

export default App;
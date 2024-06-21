import React from 'react';
import exportedStoreObject from '../redux/store';

const ResetButton: React.FC = () => {
  const persistor = exportedStoreObject.persistor;

  const handleReset = () => {
    // Purge the persisted state
    persistor.purge().then(() => {
      // Clear the localStorage
      localStorage.clear();
      // Reload the page to reset the state
      window.location.reload();
    });
  };

  return (
    <button className="reset-button" onClick={handleReset}>
      Reset Data
    </button>
  );
};

export default ResetButton;
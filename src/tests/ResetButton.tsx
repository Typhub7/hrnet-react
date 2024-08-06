import React from "react";
import exportedStoreObject from "../redux/store";

/**
 * A test button component that resets the application state.
 * This will only be visible for development environments.
 * @returns {JSX.Element} The rendered button component.
 */
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
    <button
      className="px-4 py-3 bg-white text-black rounded-md cursor-pointer z-50 hover:bg-red-700"
      onClick={handleReset}
    >
      Reset Data
    </button>
  );
};

export default ResetButton;

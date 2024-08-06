import React from "react";
import ResetButton from "./ResetButton";
import TestButton from "./TestButton";

/**
 * TestButtons component that conditionally renders development buttons.
 * ONLY FOR DEVELOPMENT ENVIRONMENTS
 * @returns {JSX.Element | null} The rendered buttons component or null if not in development mode.
 */
const TestButtons: React.FC = () => {
  const showDevButtons = process.env.REACT_APP_SHOW_DEV_BUTTONS === "true";

  // If the environment variable REACT_APP_SHOW_DEV_BUTTONS is not set to "true", do not render the buttons
  if (!showDevButtons) {
    return null;
  }

  return (
    <div className="fixed bottom-20 right-5 flex flex-col">
      <TestButton />
      <ResetButton />
    </div>
  );
};

export default TestButtons;
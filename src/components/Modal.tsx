import React, { useState } from "react";
import Modal from "react-modal";
import { CSSProperties } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

/** Component for rendering a custom modal using react-modal.
 * @param {CustomModalProps} props - Props for CustomModal component.
 * @returns {JSX.Element} JSX representation of the CustomModal component.
 */

Modal.setAppElement("#root");

interface CustomModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  content: React.ReactNode;
}

const customStyles: { content: CSSProperties; overlay: CSSProperties } = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "400px",
    padding: "40px",
    border: "4px solid #075985", // text-sky-800
    borderRadius: "8px",
    boxShadow: "0 10px 15px rgba(0, 0, 0, 0.25)",
    textAlign: "center" as "center",
    overflow: "visible",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
};

const closeButtonBaseStyle: CSSProperties = {
  position: "absolute",
  top: "-20px",
  right: "-20px",
  cursor: "pointer",
  color: "#075985",
  fontSize: "36px",
  backgroundColor: "white",
  borderRadius: "50%",
  border: "4px solid #075985",
  padding: "4px",
  boxShadow: "0 0 5px rgba(0, 0, 0, 0.5)",
};

const CustomModal = ({ isOpen, onRequestClose, content }: CustomModalProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const closeButtonStyle = {
    ...closeButtonBaseStyle,
    color: isHovered ? "#0ea5e9" : "#075985",
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Employee added Modal"
      style={customStyles}
    >
      <FontAwesomeIcon
        icon={faCircleXmark}
        style={closeButtonStyle}
        onClick={onRequestClose}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
      <div className="text-2xl">{content}</div>
      <button
        onClick={onRequestClose}
        className="mt-8 bg-sky-800 hover:bg-sky-600 text-white text-bold text-lg"
      >
        Close
      </button>
    </Modal>
  );
};

export default CustomModal;

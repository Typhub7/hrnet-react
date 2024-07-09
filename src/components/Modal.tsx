import React from 'react';
import Modal from 'react-modal';
import { CSSProperties } from 'react';

/** Component for rendering a custom modal using react-modal.
 * @param {CustomModalProps} props - Props for CustomModal component.
 * @returns {JSX.Element} JSX representation of the CustomModal component.
 */

Modal.setAppElement('#root');

interface CustomModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  content: React.ReactNode;
}

const customStyles: { content: CSSProperties, overlay: CSSProperties } = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '300px', // Adjust width
    padding: '20px', // Adjust padding
    textAlign: 'center' as 'center', // Center text with correct type
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay
  },
};

const CustomModal = ({ isOpen, onRequestClose, content }: CustomModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Employee added Modal"
      style={customStyles}
    >
      <div>{content}</div>
      <button onClick={onRequestClose}>Close</button>
    </Modal>
  );
};

export default CustomModal;
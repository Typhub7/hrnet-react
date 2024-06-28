import React from 'react';
import Modal from 'react-modal';

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

const CustomModal = ({ isOpen, onRequestClose, content }: CustomModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Example Modal"
    >
      <div>{content}</div>
      <button onClick={onRequestClose}>Close</button>
    </Modal>
  );
};

export default CustomModal;
import { useState } from 'react';

interface ModalProps {
  children: React.ReactNode;
}

interface UseModalReturnType {
  Modal: React.FC<ModalProps>;
  Modal2: React.FC<ModalProps>;
  Modal3: React.FC<ModalProps>;
  toggleModal: () => void;
  toggleModal2: () => void;
  toggleModal3: () => void;
}

const useModal = (): UseModalReturnType => {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  const toggleModal2 = () => {
    setShow2(prev => !prev);
  };

  const Modal2: React.FC<ModalProps> = ({ children }) => {
    if (!show2) return null;
    return <>{children}</>;
  };

  const toggleModal = () => {
    setShow(prev => !prev);
  };

  const Modal: React.FC<ModalProps> = ({ children }) => {
    if (!show) return null;
    return <>{children}</>;
  };

  const toggleModal3 = () => {
    setShow(prev => !prev);
  };

  const Modal3: React.FC<ModalProps> = ({ children }) => {
    if (!show) return null;
    return <>{children}</>;
  };

  return { Modal, toggleModal,Modal2, toggleModal2,Modal3, toggleModal3 };
};

export default useModal;
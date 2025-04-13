import ReactDOM from "react-dom";

interface ModalProps {
  onClose: () => void;
  children?: React.ReactNode;
}

export default function Modal({ onClose, children }: ModalProps) {
  const modalRoot = document.querySelector('.modal-container') as Element | null;
  
  return modalRoot ? ReactDOM.createPortal(
  <div>
    <div onClick={onClose} className="absolute inset-0 bg-gray-300 opacity-80"></div>
    <div className="absolute inset-40 p-10 bg-white">{children}</div>
  </div>,
  modalRoot
  ) : null
}

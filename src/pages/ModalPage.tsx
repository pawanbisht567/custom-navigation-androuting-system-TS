import Modal from "../components/Modal";
import Button from "../components/Button";
import { useState } from "react";
export default function ModalPage() {

  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  }

  const handleClose = () => {
    setShowModal(false);
  }
  
  const modal = (<Modal onClose={handleClose}>
    <p>This is the ack form please accept it</p>
    <Button buttonType="Primary" onClick={handleClose}>I Accept</Button>
    </Modal>); 
  

  return (
    <div className="relative">
      <Button buttonType="Primary" onClick={handleClick} >Open Modal</Button>
      {showModal && modal}
    </div>
  );
}

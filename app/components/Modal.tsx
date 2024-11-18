import React from "react";

interface ModalProps {
  modalOpen: boolean;
  setModalOpen: (open : boolean ) => void;
}

const Modal: React.FC <ModalProps> = ({modalOpen, setModalOpen}) => {
    return (
          <div 
              className={`modal ${modalOpen ? "modal-open" : ""}`} 
              role="dialog"
            >

            <div 
              className="modal-box"
              
            >
          
            <h3 className="text-lg font-bold">Hello!</h3>
            <p className="py-4">This modal works with a hidden checkbox!</p>

            <div 
                className="modal-action"
            >

          <label onClick={() => setModalOpen (false) } className="btn">Close!</label>
        </div>
      </div>
    </div>
    );
};

export default Modal;
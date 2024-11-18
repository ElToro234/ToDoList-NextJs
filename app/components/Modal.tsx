import React from "react";

interface ModalProps {
  modalOpen: boolean;
  setModalOpen: (open : boolean ) => void;
  children: React.ReactNode;
}

const Modal: React.FC <ModalProps> = ({modalOpen, setModalOpen, children}) => {
    return (
          <div 
              className={`modal ${modalOpen ? "modal-open" : ""}`} 
              role="dialog"
            >
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button onClick={() => setModalOpen (false) } className="btn-sm btn-circle btn-ghost absolute text-xl  size-16">✕</button>
              </form>
            <div className="modal-box">
            { children }
            <div className="modal-action">
            

          {/* <label onClick={() => setModalOpen (false) } className="btn">Close!</label> */}
        </div>
      </div>
    </div>
    );
};

export default Modal;
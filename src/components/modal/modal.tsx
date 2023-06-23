import { ReactNode, useEffect } from "react";
import ReactDOM from "react-dom";
import styles from "./modal.module.scss";

export interface ModalProps {
  isOpen: boolean;
  children: ReactNode;
  onClose: () => void;
}

function Modal({ isOpen, children, onClose }: ModalProps) {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  function handleClose(): void {
    onClose();
  }

  const modal = (
    <div className={styles.modal}>
      <div className={styles.modal__content}>
        <button className={styles.modal__close} onClick={() => handleClose()}>
          Close
        </button>
        <div className={styles.modal__image}>{children}</div>
      </div>
    </div>
  );

  if (isOpen) {
    return ReactDOM.createPortal(modal, document.getElementById("root"));
  } else {
    return null;
  }
}

export default Modal;

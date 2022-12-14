import { BaseSyntheticEvent, FunctionComponent } from "react";
import styles from "../styles/Home.module.css";
import { useState } from "react";

export interface ModalProps {
  hideModal: any;
  name: string;
  userPhone: string;
}
const Modal = ({ hideModal, name, userPhone }: ModalProps) => {
  const [number, setNumber] = useState("");
  const [body, setBody] = useState("");

  const sentMessage = async (e: BaseSyntheticEvent) => {
    e.preventDefault();

    const res = await fetch(`/api/sendMessage?`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ phone: userPhone, message: "Hell ofrom maxwelka" }),
    });

    const data = await res.json();

    if (data.success) {
      await setNumber("");
      await setBody("");
    } else {
      await setNumber("An Error has occurred.");
      await setBody("An Error has occurred.");
    }
  };

  return (
    <div className={styles.modalBackground}>
      <div className={styles.modalContainer}>
        <div className={styles.modalContent}>
          <div className={styles.modalTitle}>
            <h2>Do you want to send a notification to</h2>
          </div>
          <div className={styles.modalBody}>
            <p>{name} at {userPhone}</p>
          </div>
        </div>
        <div className={styles.modalFooter}>
          <button className={styles.modalButton} onClick={sentMessage}>
            Yes
          </button>
          <button
            className={`${styles.modalButton} ${styles.modalButtonRed}`}
            onClick={hideModal}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

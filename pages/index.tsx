import type { NextPage } from "next";
import { useState } from "react";
import Button from "../components/Button";
import Header from "../components/Header";
import Modal from "../components/Modal";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [openModal, setOpenModal] = useState(false);

  const switchModal = () => {
    setOpenModal(false)
  }

  return (
    <div>
      {openModal && <Modal hideModal={() => setOpenModal(false)} userName="Name" userPhone="1234"/>}
      <Header />
      <main className={styles.main}>
        <div className={styles.mainContainer}>
          <section className={styles.nameContainer}>
            <div className={styles.names}>
              <Button onClick={() => setOpenModal(true)} />
              <Button onClick={() => setOpenModal(true)} />
              <Button onClick={() => setOpenModal(true)} />
              <Button onClick={() => setOpenModal(true)} />
              <Button onClick={() => setOpenModal(true)} />
            </div>
          </section>
        </div>
      </main>
      
    </div>
  );
};

export default Home;

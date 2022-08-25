import { useState } from "react";
import Button from "../components/Button";
import Header from "../components/Header";
import Modal from "../components/Modal";
import styles from "../styles/Home.module.css";
import { Player } from "../types";
import requests from "../utils/request";

interface Props {
  players: [Player];
}

const Home = ({ players }: Props) => {
  const [openModal, setOpenModal] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const OpenModal = async (id: string) => {
    setOpenModal(true);

    const res = await fetch(requests.fetchPlayer + `${id}`);
    const data = await res.json();

    setName(data.name);
    setPhone(data.phone);

    // return {
    //   props: {
    //     // players: data.items,
    //     id: id,
    //     name: name,
    //     phone: phone,
    //   },
    // };

    
  };

  return (
    <div>
      {openModal && (
        <Modal
          hideModal={() => setOpenModal(false)}
          userName={name}
          userPhone={phone}
        />
      )}
      <Header />
      <main className={styles.main}>
        <div className={styles.mainContainer}>
          <section className={styles.nameContainer}>
            <div className={styles.names}>
              {players.map((player) => (
                <Button key={player.id} onClick={() => OpenModal(player.id)}/>
              ))}
              

              {/* <Button onClick={() => OpenModal} />
              <Button onClick={() => setOpenModal(true)} />
              <Button onClick={() => setOpenModal(true)} />
              <Button onClick={() => setOpenModal(true)} />
              <Button onClick={() => setOpenModal(true)} /> */}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const res = await fetch(requests.fetchLeaderBoard);
  const data = await res.json();

  return {
    props: {
      players: data.items,
    },
    //revalidate: 60
  };
}

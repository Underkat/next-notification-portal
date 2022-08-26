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
  const [name, setName] = useState("pop");
  const [phone, setPhone] = useState("");

  const OpenModal = async (id: string, name: string) => {
    setOpenModal(true);

    const req = await fetch(`api/getUser?id=${id}`);
    const resp = await req.json();

    setName(resp.name);
    setPhone(resp.data.phone)
  };

  return (
    <div>
      {openModal && (
        <Modal
          hideModal={() => setOpenModal(false)}
          name={name}
          userPhone={phone}
        />
      )}
      <Header />
      <main className={styles.main}>
        <div className={styles.mainContainer}>
          <section className={styles.nameContainer}>
            <div className={styles.names}>
              {players.map((player) => (
                <Button
                  key={player.player.id}
                  name={player.player.name}
                  onClick={() =>
                    OpenModal(player.player.id, player.player.name)
                  }
                />
              ))}
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

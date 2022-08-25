import { useState } from "react";
import Button from "../components/Button";
import Header from "../components/Header";
import Modal from "../components/Modal";
import styles from "../styles/Home.module.css";
import { Player } from "../types";
import requests from "../utils/request";
import getUser from "./api/getUser";
import useSWR, { Key, Fetcher } from "swr";

interface Props {
  players: [Player];
}

//const fetcher = (...args: any) =>
  //fetch(...([args] as const)).then((res) => res.json());

const Home = ({ players }: Props) => {
  const [openModal, setOpenModal] = useState(false);
  const [name, setName] = useState("pop");
  const [phone, setPhone] = useState("");

  const OpenModal = async (id: string, name: string) => {
    setOpenModal(true);
    //console.log(requests.fetchPlayer + `${id}`);
    //const res = await fetch(requests.fetchPlayer + `${id}`);
    //const data = await res.json();
    const phone = await fetch("api/getUser");
    const data = await phone.json();
    // setName(name);
    //setPhone(phone);
     console.log(data);

    //const { data, error } = useSWR(requests.fetchPlayer + `${id}`, fetcher);

    //if (error) return console.log("error loading");

    //setName(data.name);
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

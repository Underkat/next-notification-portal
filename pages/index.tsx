import type { NextPage } from "next";
import Button from "../components/Button";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <div className={styles.mainContainer}>
          <section className={styles.nameContainer}>
            <div className={styles.names}>
              <Button />
              <Button />
              <Button />
              <Button />
              <Button />
              
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Home;

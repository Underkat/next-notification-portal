import styles from "../styles/Home.module.css";

const Button = () => {
  return <div className={styles.nameEntry}>
  <h3>Name</h3>
  <button className={styles.button}>[ Notify ]</button>
  </div>;
};

export default Button;

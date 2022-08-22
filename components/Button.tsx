import styles from "../styles/Home.module.css";

const Button = (props:{onClick:()=>void}) => {
  return <div className={styles.nameEntry}>
  <h3>Name</h3>
  <button className={styles.button} onClick={props.onClick}>[ Notify ]</button>
  </div>;
};

export default Button;

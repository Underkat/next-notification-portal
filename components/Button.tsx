import styles from "../styles/Home.module.css";

const Button = (props: { onClick: () => void; name: string }) => {
  return (
    <div className={styles.nameEntry}>
      <h3>{props.name}</h3>
      <button className={styles.button} onClick={props.onClick}>
        [ Notify ]
      </button>
    </div>
  );
};

export default Button;

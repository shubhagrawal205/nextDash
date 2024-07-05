import { MdSupervisedUserCircle } from "react-icons/md";
import styles from "./card.module.css";

const Card = ({ item }) => {
  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle size={24} />
      <div className={styles.texts}>
        <span className={styles.title}>Total Users</span>
        <span className={styles.number}>10.123</span>
        <span className={styles.detail}>
          <span className={styles.positive}>
            13%
          </span> more than previous week</span>
      </div>
    </div>
  );
};

export default Card;
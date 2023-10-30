import styles from "./styles.module.css";
import * as Icons from "react-icons/md";

const ListItem = ({ name, description, index, handleDelete }) => {
  return (
    <div className={styles["list-item"]}>
      <div className={styles["item"]}>
        <p>{name}</p>
        <p>{description}</p>
      </div>
      <div>
        <button
          className={styles["deleteBt"]}
          onClick={() => handleDelete(index)}
        >
          <Icons.MdDelete />
        </button>
      </div>
    </div>
  );
};

export default ListItem;

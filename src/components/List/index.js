import ListItem from "../ListItem";
import styles from "./styles.module.css";

const List = ({ items, handleDelete }) => {
  return (
    <div className={styles["list-container"]}>
      {items.map(({ name, description }, index) => (
        <ListItem
          key={index}
          name={name}
          description={description}
          index={index}
          handleDelete={handleDelete}
        />
      ))}
      {items?.length === 0 && <p>List is Empty...</p>}
    </div>
  );
};

export default List;

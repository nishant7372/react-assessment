import { useState } from "react";
import styles from "./styles.module.css";
import { HiOutlinePlus } from "react-icons/hi";

const Form = ({ handleAdd }) => {
  const [data, setData] = useState({
    name: "",
    description: "",
  });

  const handleChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <form
      className={styles["form-container"]}
      onSubmit={(e) => e.preventDefault()}
    >
      <label htmlFor="name"> Item Name</label>
      <input
        type="text"
        value={data.name}
        name="name"
        onChange={handleChange}
        spellCheck="false"
        placeholder="Item Name"
        id="name"
        required
      />
      <label htmlFor="description">Item Description</label>
      <textarea
        value={data.description}
        name="description"
        onChange={handleChange}
        rows={3}
        placeholder="Item Description"
        spellCheck="false"
        id="description"
        required
      />
      <button className={styles["add"]} onClick={() => handleAdd(data)}>
        Add <HiOutlinePlus />
      </button>
    </form>
  );
};

export default Form;

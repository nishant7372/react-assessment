import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import List from "./components/List";
import { useState } from "react";
import HiPlus, { HiOutlinePlus, HiPlusCircle } from "react-icons/hi";
import Form from "./components/Form";

function App() {
  const [items, setItems] = useState([
    {
      name: "Item 1",
      description:
        "lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.",
    },
    {
      name: "Item 2",
      description:
        "lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.",
    },
    {
      name: "Item 3",
      description:
        "lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.",
    },
    {
      name: "Item 4",
      description:
        "lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.",
    },
  ]);

  const handleAdd = (data) => {
    console.log(data);
    setItems((prev) => [...prev, data]);
  };

  const handleDelete = (index) => {
    setItems((prev) => prev.filter((_, idx) => index !== idx));
  };

  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <Form handleAdd={handleAdd} />
        <div className="container2">
          <div className="top">
            <p className="heading">Items List</p>
          </div>
          <List items={items} handleDelete={handleDelete} />
        </div>
      </div>
    </div>
  );
}

export default App;

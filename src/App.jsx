import { useState } from "react";
import "./App.css";
import Container from "./components/Container";
import MyInput from "./components/MyInput";

function App() {
  const [text, setText] = useState("");
  const [color, setColor] = useState("");
  const [colors, setColors] = useState([]);

  const handleINputChange = (e) => {
    setText(e.target.value);
    if (
      e.target.value.includes("#") ||
      e.target.value.includes("rgb") ||
      e.target.value
    ) {
      setColor(e.target.value);
    }
  };

  const handleAddClick = () => {
    if (color) {
      setColors([...colors, color]);
      setText("");
      setColor("");
    }
  };

  return (
    <div>
      <Container color={color} />
      <MyInput value={text} onChange={handleINputChange} />
    </div>
  );
}

export default App;

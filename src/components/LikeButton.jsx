import { useState } from "react";

export default function LikeButton() {
  const colors = ["purple", "blue", "green", "yellow", "orange", "red"];
  const [color, setColor] = useState("purple");
  const [counter, setcounter] = useState(0);
    const randomColor = () => {
    const randomNumber = Math.floor(Math.random() * 5);
    setcounter(counter + 1)
    setColor(colors[randomNumber]);
  };
  return (
    <button
      type="button"
      style={{ backgroundColor: color, width: "300px", fontSize: "50px" }}
      onClick={randomColor}
    >
      {counter} Like
    </button>
  );
}

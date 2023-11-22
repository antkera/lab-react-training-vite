import { useState } from "react";

export default function Carousel({ images }) {
  const [counter, setCounter] = useState(0);
  const goLeft = () =>
    counter === 0 ? setCounter(images.length - 1) : setCounter(counter - 1);
  const goRight = () =>
    counter === images.length - 1 ? setCounter(0) : setCounter(counter + 1);

  return (
    <div className="flex evenCenter">
      <button className="bigger" onClick={goLeft}>
        Left
      </button>
      <img className="imgNormal" src={images[counter]} alt="imagen" />
      <button className="bigger" onClick={goRight}>
        Rigth
      </button>
    </div>
  );
}

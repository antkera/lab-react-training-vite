import { useState } from "react";

export default function Dice() {
  const [diceState, setDiceState] = useState(1);
  const randomDice = () => {
    let randomNumber = Math.floor(Math.random() * 6 - 0.0001) + 1;
    setDiceState("-empty");
    setTimeout(() => {
      setDiceState(randomNumber);
    }, 1000);
  };

  return (
    <img
      onClick={randomDice}
      src={`src/assets/images/dice${diceState}.png`}
      alt="buton"
    />
  );
}

import { useState } from "react";

export default function ClickablePicture({ img, imgClicked }) {
  const [show, setshow] = useState(false);
  return (
    <div>
      <img
        onClick={() => {
          setshow(!show);
        }}
        src={img}
        alt="maxence"
      />

      {show && (
        <img
          onClick={() => {
            setshow(!show);
          }}
          style={{
            position: "absolute",
            margin: "75px 0 0 -205px",
            width: "120px",
            rotate: "-8deg",
          }}
          src={imgClicked}
          alt="glasses"
        />
      )}
    </div>
  );
}

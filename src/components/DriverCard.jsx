import Rating from "./Rating";

export default function DriverCard({
  name,
  rating,
  img,
  car: { model, licensePlate },
}) {
  const cardStyle = {
    borderRadius: "40px",
    backgroundColor: "#2596be",
    color: "white",
    width: "1000px",
    display: "flex",
    justifyContent: "center",
    margin: "20px",
    padding: "30px",
  };
  const imgStyle = {
    borderRadius: "400px",
    height: "200px",
    width: "200px",
    margin: "10px",
    padding: "20px",
  };
  return (
    <div style={cardStyle}>
      <img style={imgStyle} src={img} alt="imagen de perfil" />
      <div>
        <h3>{name}</h3>
        <h3>
          <Rating>{rating}</Rating>
        </h3>
        <p>{`${model} - ${licensePlate}`}</p>
      </div>
    </div>
  );
}

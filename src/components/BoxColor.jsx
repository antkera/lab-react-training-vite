function BoxColor(prop) {
  const { r, g, b } = prop;
  const boxColor = {
    backgroundColor: `rgb(${r}, ${g}, ${b})`,
    padding: "50px",
    margin: "30px",
    fontSize: "30px",
    textAlign: "center",
  };
  return (
    <div style={boxColor}>
      rgb({r},{g},{b})
    </div>
  );
}
export default BoxColor;

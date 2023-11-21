function Greetings(prop) {
  const greet =
    prop.lang === "de"
      ? "Hallo"
      : prop.lang === "en"
      ? "Hello"
      : prop.lang === "es"
      ? "Hola"
      : prop.lang === "fr"
      ? "Bonjour"
      : "🖖"; // <=Saludo vulcano

  return (
    <div id="someCard">
      <p>
        {greet} {prop.children}
      </p>
    </div>
  );
}
export default Greetings;

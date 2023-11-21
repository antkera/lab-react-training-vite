function IdCard(prop) {
  const { firstName, lastName, gender, height, birth, picture } = prop;

  return (
    <div id="idCard">
      <div id="idImage">
        <img src={picture} alt="" />
      </div>
      <div id="idInfo">
        <p>
          <strong>First name:</strong>
          {firstName}
        </p>

        <p>
          <strong>Last name:</strong>
          {lastName}
        </p>

        <p>
          <strong>Gender:</strong>
          {gender}
        </p>

        <p>
          <strong>Height:</strong>
          {height}
        </p>

        <p>
          <strong>Birth:</strong>
          {birth.toDateString()}
        </p>
      </div>
    </div>
  );
}

export default IdCard;

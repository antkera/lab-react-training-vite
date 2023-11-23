import berlinArr from "../data/berlin.json";

export default function FaceBook() {
  return (
    <div className="flex column">
      {berlinArr.map((each) => {
        const { firstName, lastName, country, img, isStudent } = each;
        return (
          <div className="flex">
            <img src={img} alt="imagen" />
            <div>
            <p>
              <strong>First name:</strong> {firstName}
            </p>
            <p>
              <strong>Last name:</strong> {lastName}
            </p>
            <p>
              <strong>Country:</strong> {country}
            </p>
            <p>
              <strong>type:</strong> {isStudent ? "Student" : "Teacher"}
            </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

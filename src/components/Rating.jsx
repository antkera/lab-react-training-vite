export default function Rating({ children }) {
  // "src/assets\images\RatingImg\rating0.png"

  return (
    <div>
      <img
        src={
          children < 0.5
            ? `src/assets/images/RatingImg/rating0.png`
            : children < 1.5
            ? `src/assets/images/RatingImg/rating1.png`
            : children < 2.5
            ? `src/assets/images/RatingImg/rating2.png`
            : children < 3.5
            ? `src/assets/images/RatingImg/rating3.png`
            : children < 4.5
            ? `src/assets/images/RatingImg/rating4.png`
            : //else
              `src/assets/images/RatingImg/rating5.png`
        }
      ></img>
    </div>
  );
}

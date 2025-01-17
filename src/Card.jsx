import coffee from "./assets/coffee.jpg";
function Card() {
  return (
    <div className="card">
      <img className="card-image" src={coffee} alt="Profile"></img>
      <h2>Coffee Lover</h2>
      <p>
        "A good day starts with a positive attitude and a great cup of coffee!"
      </p>
    </div>
  );
}

export default Card;

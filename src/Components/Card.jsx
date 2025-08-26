import data from "../assets/db/data";

const Card = ({ data }) => {
  return (
    <div className="container">
      <div className="row">
        {data.map(({ img, name, price, year, vol, run, id }) => (
          <div key={id} className="cardContainer">
            <img src={img} alt={name} />
            <h2 className="title">{name}</h2>
            <p className="price">{price} AZN</p>
            <p className="year">{year}</p>
            <p className="vol">{vol} L</p>
            <p className="run">{run} km</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;

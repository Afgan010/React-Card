import React from "react";
import { useParams } from "react-router-dom";
import data from "../assets/db/data";
const Carddetails = () => {
  const { id } = useParams();
  const car = data.find((item) => item.id == id);
  return (
    <div>
      <h1>Detallar</h1> <br />
      {car ? (
        <div>
          <img src={car.img} alt={car.name} />
          <h2>{car.name}</h2>
          <p>{car.price} AZN</p>
          <p>{car.year}</p>
          <p>{car.vol} L</p>
          <p>{car.run} km</p>
        </div>
      ) : (
        <p>Product not found</p>
      )}
    </div>
  );
};

export default Carddetails;

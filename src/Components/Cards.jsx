import React from "react";
import Card from "./Card";
import data from "../assets/db/data";

const Cards = () => {
  return (
    <div>
      <Card data={data} />
    </div>
  );
};

export default Cards;

import React from "react";
import "../Card/Card.css";
const Card = ({ data }) => {
  console.log(data, "CardData");
  return (
    <section className="destinations">
      <div className="grid">
        <div>
          <img src={data.snippet.thumbnails.high.url} alt="destination-1" />
          <h3>{data.snippet.title}</h3>
          <p>{data.snippet.description}</p>
        </div>
      </div>
    </section>
  );
};
export default Card;

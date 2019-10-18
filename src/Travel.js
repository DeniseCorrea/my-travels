import React from "react";

const Travel = ({ trip }) => (
  <figure>
    <img src={trip.photo} alt={trip.country} />
    <figcaption>
      <blockquote>{trip.destination}</blockquote>
      <cite>{trip.country} , {trip.distance}</cite>
    </figcaption>
  </figure>
);

export default Travel;


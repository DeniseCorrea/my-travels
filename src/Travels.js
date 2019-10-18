import React from "react";
import Travel from "./Travel";

const travels = [
    {
        destination: "Porto Alegre",
        country: "Brasil",
        photo: "https://upload.wikimedia.org/wikipedia/commons/8/87/La%C3%A7ador.jpg",
        distance: "8.802,71 km from Lisbon"
    },
    {
        destination: "Paris",
        country: "France",
        photo: "https://images.unsplash.com/photo-1501649642741-b90ae46fc747?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80",
        distance: "1.454,54 km from Lisbon"
    },
    {
        destination: "Munique",
        country: "Alemanha",
        photo: "https://images.unsplash.com/photo-1562722659-f518e2094802?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1144&q=80",
        distance: "1.965,19 km from Lisbon"
    },
    {
        destination: "Barcelona",
        country: "Espanha",
        photo: "https://images.unsplash.com/photo-1511527661048-7fe73d85e9a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80",
        distance: "1.006,01 km from Lisbon"
    },
    {
        destination: "Londres",
        country: "Inglaterra",
        photo: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        distance: "1.586,25 km from Lisbon"
    }

];

const Travels = () => (
    <div>
      {travels.map(travel => (
        <Travel trip={travel} />
      ))}
    </div>
  );
  
  export default Travels;





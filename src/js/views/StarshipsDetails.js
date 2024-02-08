import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { DetailsCard } from "../component/DetailsCard.js";
const getStarship = async (setStarship, id) => {
  const res = await fetch(`https://www.swapi.tech/api/starships/${id}`);
  const data = await res.json();
  setStarship(data.result.properties);
};

export const StarshipsDetails = () => {
  const [starship, setStarship] = useState({});
  const { starshipID } = useParams();

  useEffect(() => {
    getStarship(setStarship, starshipID);
  }, []);

  return (
    <DetailsCard
      title={starship.name}
      img={`https://starwars-visualguide.com/assets/img/starships/${starshipID}.jpg`}
      properties={{
        Model: starship.model,
        Manufacturer: starship.manufacturer,
        Class: starship.starship_class,
        Cost:
          starship.cost_in_credits !== "n/a"
            ? `${starship.cost_in_credits} credits`
            : starship.cost_in_credits,
        Speed:
          starship.max_atmosphering_speed !== "n/a"
            ? `${starship.max_atmosphering_speed} km/h`
            : starship.max_atmosphering_speed
      }}
    />
  );
};
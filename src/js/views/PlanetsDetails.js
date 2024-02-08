import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import { DetailsCard } from "../component/DetailsCard.js";
const getPlanet = async (setPlanet, id) => {
  const res = await fetch(`https://www.swapi.tech/api/planets/${id}`);
  const data = await res.json();
  setPlanet(data.result.properties);
};

export const PlanetsDetails = () => {
  const [planet, setPlanet] = useState({});
  const { planetID } = useParams();

  useEffect(() => {
    getPlanet(setPlanet, planetID);
  }, []);

  return (
    <DetailsCard
      title={planet.name}
      img={`https://starwars-visualguide.com/assets/img/planets/${planetID}.jpg`}
      properties={{
        Terrain: `${planet.terrain}`,
        "Surface Water":
          planet.surface_water !== "n/a"
            ? `${planet.surface_water}%`
            : planet.surface_water,
        Climate: `${planet.climate}`,
      }}
    />
  );
};
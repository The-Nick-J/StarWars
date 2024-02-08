import React, { useEffect, useContext } from "react";
import { Card } from "../component/Card.js";
import { Context } from "../store/appContext";

export const Starships = () => {
  const { store, actions } = useContext(Context);
  const starships = store.starships;

  const getStarships = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    actions.insertStarships(data);
  };

  useEffect(() => {
    getStarships(`https://www.swapi.tech/api/starships`);
  }, []);

  const handleClick = () => {
    getStarships(store.next_page);
  };

  return (
    <div className="row row-cols-1 row-cols-md-6 g-4 p-5 d-flex justify-content-center">
      {!starships.length && <div>Loading ...</div>}
      {starships.map((starship) => (
        <Card
          key={starship.uid}
          id={starship.uid}
          title={starship.name}
          imgUrl={`https://starwars-visualguide.com/assets/img/starships/${starship.uid}.jpg`}
          category="starships"
        />
      ))}
    </div>
  );
};

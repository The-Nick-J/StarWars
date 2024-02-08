import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Card = ({ id, imgUrl, title, category }) => {
  const { actions, store } = useContext(Context);

  const handleFavClick = (id, title) => {
    const obj = [{ id, title }];
    store.favorites.some((fav) => fav.title === obj[0].title)
      ? null
      : actions.insertFavorites(obj);
  };

  const handleSaveClick = (id, title, category) => {
    const obj = [{ id, title, category }];
    store.saved.some((item) => item.title === obj[0].title)
      ? null
      : actions.insertSaved(obj);
  };

  return (
    <div className="col">
      <div className="card bg-dark">
        <img
          className="card-img-top"
          src={imgUrl}
          onError={(e) => (
            e.preventDefault(),
            (e.target.src =
              "https://starwars-visualguide.com/assets/img/placeholder.jpg")
          )}
        />
        <div className="card-body d-flex justify-content-evenly align-items-center">
          <h5 className="card-title text-light">{title}</h5>
          <button
            onClick={() => handleFavClick(id, title)}
            className="btn btn-secondary btn-small"
          >
            Favorite
          </button>
          <button className="btn btn-secondary btn-small">
            <Link to={id} className="text-decoration-none text-light">
              Details
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

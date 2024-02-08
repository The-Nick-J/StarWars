import React, { useContext } from "react";
import { FavoritesList } from "./FavoritesList";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const { store } = useContext(Context);

  return (
    <nav className="navbar bg-transparent" data-bs-theme="dark">
      <div className="container-fluid">
        <Link
          to={"/"}
          relative="route"
          className="navbar-brand text-decoration-none"
        >
          <span className="ms-5 text-light display-5">
            <img
              style={{ width: "200px" }}
              src="https://cdn.freebiesupply.com/logos/large/2x/star-wars-4-logo-svg-vector.svg"
              alt="Star Wars Logo"
            />
          </span>
        </Link>
        <div className="col-md-11 d-flex justify-content-end ">
          <div className="dropdown">
            <button
              className="btn btn-dark dropdown-toggle text-light"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span className="badge rounded-pill text-light">
                {store.favorites.length}
              </span>
              Favorites
            </button>
            <FavoritesList />
          </div>
        </div>
      </div>
    </nav>
  );
};

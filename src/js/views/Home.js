import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const getCategories = async (setCategories) => {
  const res = await fetch("https://www.swapi.tech/api/");
  const categories = await res.json();
  setCategories(categories.result);
};

export const Home = () => {
  const [categories, setCategories] = useState({});

  useEffect(() => {
    getCategories(setCategories);
  }, []);

  // Filter out categories for planets, people, and starships
  const filteredCategories = Object.entries(categories)
    .filter(([key, value]) => ["planets", "people", "starships"].includes(key))
    .reduce((obj, [key, value]) => {
      obj[key] = value;
      return obj;
    }, {});

  return (
    <div className="container d-flex justify-content-center align-content-center">
      <div className="row row-cols-1 row-cols-md-3 g-4 p-4 my-5">
        {Object.keys(filteredCategories).map((category, i) => (
          <div key={i} className="col">
            <div className="card text-bg-dark">
              <Link
                className="text-decoration-none mb-2"
                to={category === "people" ? "characters" : category}
              >
                <img
                  className="card-img"
                  src={`https://starwars-visualguide.com/assets/img/categories/${
                    category === "people" ? "character" : category
                  }.jpg`}
                />
                <div className=" d-flex">
                  <h5 className="fs-1 card-title text-dark text-decoration-none m-auto">
                    {category}
                  </h5>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

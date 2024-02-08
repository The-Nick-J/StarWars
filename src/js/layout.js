import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//Context
import injectContext from "./store/appContext";

//Views
import { Home } from "../js/views/Home.js";
import { People } from "../js/views/People.js";
import { PeopleDetails } from "../js/views/PeopleDetails.js";
import { Planets } from "../js/views/Planets.js";
import { PlanetsDetails } from "../js/views/PlanetsDetails.js";
import { Starships } from "../js/views/Starships.js";
import { StarshipsDetails } from "./views/StarshipsDetails.js";


//Components
import { Navbar } from "../js/component/Navbar.js";

const Layout = () => {
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/planets" element={<Planets />} />
          <Route path="/planets/:planetID" element={<PlanetsDetails />} />
          <Route path="/characters" element={<People />} />
          <Route path="/characters/:peopleID" element={<PeopleDetails />} />
          <Route path="/starships" element={<Starships />} />
          <Route path="/starships/:starshipID" element={<StarshipsDetails />} />
          <Route path="*" element={<h1>Not found!</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);

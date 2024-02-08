const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      favorites: [],
      characters: [],
      planets: [],
      starships: [],
    },
    actions: {
      insertCharacters: (data) => {
        getStore().characters.some(
          (character) => character.uid === data.results[0].uid
        )
          ? null
          : setStore({
              characters: getStore().characters.concat(data.results),
              next_page: data.next,
            });
      },
      insertPlanets: (data) => {
        getStore().planets.some((planet) => planet.uid === data.results[0].uid)
          ? null
          : setStore({
              planets: getStore().planets.concat(data.results),
              next_page: data.next,
            });
      },

      insertStarships: (data) => {
        getStore().starships.some(
          (starship) => starship.uid === data.results[0].uid
        )
          ? null
          : setStore({
              starships: getStore().starships.concat(data.results),
              next_page: data.next,
            });
      },

      insertFavorites: (data) => {
        setStore({ favorites: getStore().favorites.concat(data) });
      },
      deleteFavorites: (title) => {
        setStore({
          favorites: getStore().favorites.filter((fav) => fav.title !== title),
        });
      },
    },
  };
};

export default getState;

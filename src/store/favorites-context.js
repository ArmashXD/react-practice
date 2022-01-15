import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFav: (useFavs) => {},
  removeFav: (meetupId) => {},
  itemisFav: (meetupId) => {},
});

export function FavoritesContextProvider(props) {
  const [userFavs, setUserFavs] = useState([]);

  function addFavHandler(favMeetup) {
    setUserFavs((prevFav) => {
      return prevFav.concat(favMeetup);
    });
  }

  function removeFavHandler(meetupId) {
    setUserFavs((prevFav) => {
      return prevFav.filter((meetup) => meetup.id !== meetupId);
    });
  }

  function itemIsFavHandler(meetupId) {
    return userFavs.some((meetup) => meetup.id === meetupId);
  }

  const context = {
    favorites: userFavs,
    totalFavorites: userFavs.length,
    addFav: addFavHandler,
    removeFav: removeFavHandler,
    itemisFav: itemIsFavHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;

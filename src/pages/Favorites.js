import { useContext } from "react/cjs/react.development";
import MeetupList from "../components/meetup/MeetupList";
import FavoritesContext from "../store/favorites-context";

function Favorites() {
  const favCtx = useContext(FavoritesContext);

  let content;

  if (favCtx.totalFavorites == 0) {
    content = <p>You go no favorites.</p>;
  } else {
    content = <MeetupList meetups={favCtx.favorites} />;
  }

  return (
    <section>
      <h1>My Favs</h1>
      {content}
    </section>
  );
}

export default Favorites;

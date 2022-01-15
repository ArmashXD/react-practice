import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";
import { useContext } from "react";
import FavoritesContext from "../../store/favorites-context";

function MeetupItem({ meeting }) {
  const favCtx = useContext(FavoritesContext);

  const favItem = favCtx.itemisFav(meeting.id);

  function toggleStatusHandler() {
    if (favItem) {
      favCtx.removeFav(meeting.id);
    } else {
      favCtx.addFav({
        id: meeting.id,
        title: meeting.title,
        description: meeting.description,
        url: meeting.url,
        address: meeting.address,
      });
    }
  }

  return (
    <li className={classes.item} key={meeting.id}>
      <Card>
        <div className={classes.image}>
          <img src={meeting.url} alt={meeting.title} />
        </div>

        <div className={classes.content}>
          <h3>{meeting.title}</h3>
          <address>{meeting.address}</address>
          <p>{meeting.description}</p>
        </div>

        <div className={classes.actions}>
          <button onClick={toggleStatusHandler}>
            {favItem ? "Remove From Favorites" : "To Favorites"}
          </button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;

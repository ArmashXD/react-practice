import AddNewMeetup from "../components/meetup/AddNewMeetup";
import { useNavigate } from "react-router-dom";

function NewMeetup() {
  const history = useNavigate();

  function addMeetupHandler(meetupData) {
    fetch(
      "https://calender-app-48e4f-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-type": "application/json",
        },
      }
    ).then(() => {
      history("/");
    });
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <AddNewMeetup onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetup;

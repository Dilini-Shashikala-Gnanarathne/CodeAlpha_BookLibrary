import { useParams } from "react-router-dom";
import "./EventDetails.css";
import { Users } from "./users";

const EventDetails = () => {
  const { id } = useParams();
  const numId = Number(id);

  // Find the user with the given id
  const filteredUser = Users.find((user) => user.id === numId);

  if (!filteredUser) {
    return <div>User not found</div>; // Return a message if user with given id is not found
  }

  return (
    <div className="event-details-container">
      <div className="event-details-wrapper">
        <img src={`https://placehold.it/200x200?text=${filteredUser.first_name}`} alt="User" />
        <div className="event-details-content">
          <h3>User Name: {filteredUser.first_name} {filteredUser.last_name}</h3>
          <div className="small-details">
            <p className="email">
              <span className="font-weight-med">
                Email: {filteredUser.email}
              </span>
            </p>
            <p className="borrowing-history">
              <span className="font-weight-med">
                Borrowing History: {filteredUser.borrowing_history}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;

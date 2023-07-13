import "./Home.css";
import { useContext } from "react";
import { DataContext } from "../../";
import { EventCard } from "../../component/EventCard/EventCard";

export function Home() {
  const {meetUpData}=useContext(DataContext);
  // console.log(meetUpData);
 

  return (
    <>
      <div className="home-page">
        <div className="heading-text">
          <h1>Meetup Events</h1>
          <select>
            <option value="">Select event type</option>
            <option value="offline">Offline</option>
            <option value="online">Online</option>
          </select>
        </div>
        <div className="event-card responsive-grid">
          {meetUpData.map((meetup)=>(
            <EventCard meetup={meetup} key={meetup.id}/>
          ))}
        </div>
      </div>
    </>
  );
}

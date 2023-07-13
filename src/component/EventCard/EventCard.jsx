import "./EventCard.css";

export function EventCard({ meetup }) {
  const { title, eventStartTime, eventType, eventThumbnail } = meetup;
//   const dateObj = new Date(eventStartTime);

//   const day = dateObj.toLocaleString('en-IN', { weekday: 'short' });
//   const month = dateObj.toLocaleString('en-IN', { month: 'short' });
//   const year = dateObj.getFullYear();
//   const date = dateObj.getDate();
//   const time=dateObj.getTime();

  return (
    <>
      <div className="card">
        <img class="card-img" src={eventThumbnail} alt={title} />
        <span class="card-badge">{eventType}</span>
        <div class="card-info">
          <div class="card-title">
            <div>
              <p class="card-description">{eventStartTime} IST</p>
              {/* <p class="card-description">{day}{" "}{month}{" "}{date} {" "}{year} - {time} IST</p> */}
              <h3>{title}</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

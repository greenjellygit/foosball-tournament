import './heading.css';

export function Heading() {
  return (
    <div className="heading">
      <div className="omnipack-logo"/>
      <div className="heading-title">
        Turniej piłkarzyków Omnipack <span className="red">2021</span>
      </div>
      <div className="heading-details-container">
        <div className="details-line">
          <span className="calendar-icon"/>
          <span>2021-09-25, godzina 18:00</span>
        </div>
        <div className="details-line">
          <span className="map-tag-icon"/>
          <span>Aleje Jerozolimskie 81, Warszawa</span>
        </div>
      </div>
    </div>
  );
}

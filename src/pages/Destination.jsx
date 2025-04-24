import React, { useState } from "react";
import NavBar from "../components/NavBar";
import "../styles/Destination.scss";

function Destination({ destination }) {
  const [activeIndex, setActiveIndex] = useState(0); // Start with the first destination (Moon)

  return (
    <div className="page destination-page">
      <NavBar />
      <div className="main">
        <h1 className="title">
          <span>01</span> Pick your destination
        </h1>

        <nav>
          <ul>
            {destination.map((des, index) => (
              <li
                key={index}
                className={index === activeIndex ? "active" : ""}
                onClick={() => setActiveIndex(index)}
              >
                {des.name.toUpperCase()}
              </li>
            ))}
          </ul>
        </nav>

        {/* Show only the selected destination */}
        <section className="destination-container">
          <div className="left">
            <img
              src={destination[activeIndex].images.webp}
              alt={destination[activeIndex].name}
            />
          </div>
          <div className="right">
            <h1>{destination[activeIndex].name}</h1>
            <p>{destination[activeIndex].description}</p>
            <div className="distance">
              <p>AVG. DISTANCE</p>
              <p>{destination[activeIndex].distance}</p>
            </div>
            <div className="distance">
              <p>EST. TRAVEL TIME</p>
              <p>{destination[activeIndex].travel}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Destination;

import NavBar from "../components/NavBar";
import "../styles/Destination.scss";

function Destination({ destination, activeIndex, setActiveIndex }) {
  return (
    <div className="page destination-page">
      <NavBar />
      <div className="main">
        <section className="container">
          <div className="imgbox">
            <h1 className="title">
              <span>01</span> Pick your destination
            </h1>
            <img
              className="planets"
              src={destination[activeIndex].images.webp}
              alt={destination[activeIndex].name}
            />
          </div>
          <div className="textbox">
            <nav>
              <ul className="destination-nav">
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
            <div className="intro">
              <h2 className="name-large">{destination[activeIndex].name}</h2>
              <p className="content">{destination[activeIndex].description}</p>
            </div>
            <div className="data">
              <div className="distance">
                <p>AVG. DISTANCE</p>
                <p className="unit">{destination[activeIndex].distance}</p>
              </div>
              <div className="travel">
                <p>EST. TRAVEL TIME</p>
                <p className="unit">{destination[activeIndex].travel}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Destination;

import NavBar from "../components/NavBar";
import "../styles/Destination.scss";
import { useNewState } from "../contexts/StateContext";
import MapItems from "../components/MapItems";

function Destination() {
  const { isMobile, activeIndex, setActiveIndex, destination } = useNewState();

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
              src={
                isMobile
                  ? destination[activeIndex].images.png
                  : destination[activeIndex].images.webp
              }
              alt={destination[activeIndex].name}
            />
          </div>
          <div className="textbox">
            <nav>
              <ul className="destination-nav">
                <MapItems
                  data={destination}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                  activeClass="active"
                  renderContent={(des) => des.name.toUpperCase()}
                  Element="li"
                />
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

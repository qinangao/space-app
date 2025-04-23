import NavBar from "../components/NavBar";
import "../styles/Destination.scss";
function Destination({ destination }) {
  console.log(destination);
  return (
    <div className="destination-page">
      <NavBar />
      <h1>Pick your destination</h1> <h2>Moon Mars Europa Titan Europa</h2>
      {destination.map((des, index) => (
        <section key={index} className="destination-container">
          <h1>{des.name}</h1>
          <p>{des.description}</p>
          <div className="distance">
            <p>AVG. DISTANCE</p>
            <p>{des.distance}</p>
          </div>
          <div className="distance">
            <p>EST. TRAVEL TIME</p>
            <p>{des.travel}</p>
          </div>
        </section>
      ))}
    </div>
  );
}

export default Destination;

import NavBar from "../components/NavBar";
import "../styles/Crew.scss";

function Crew({ crew }) {
  console.log(crew[0].images.webp);
  return (
    <div className="crewpage">
      <NavBar />
      <h2>02 Meet your crew </h2>
      {crew.map((crew, index) => (
        <section key={index} className="crews">
          <h2>{crew.role}</h2>
          <h1>{crew.name}</h1>
          <p>{crew.bio}</p>
          <img src={crew.images.webp} alt={crew.role} />
        </section>
      ))}
    </div>
  );
}

export default Crew;

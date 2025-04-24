import NavBar from "../components/NavBar";
import "../styles/Crew.scss";

function Crew({ crew }) {
  console.log(crew[0].images.webp);
  return (
    <div className="page crewpage">
      <NavBar />
      <div className="main">
        <h1 className="title">
          <span>02</span> Meet your crew
        </h1>
        {crew.map((crew, index) => (
          <section key={index} className="crews">
            <h2>{crew.role}</h2>
            <h1>{crew.name}</h1>
            <p>{crew.bio}</p>
            <img src={crew.images.webp} alt={crew.role} />
          </section>
        ))}
      </div>
    </div>
  );
}

export default Crew;

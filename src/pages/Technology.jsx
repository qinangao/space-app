import NavBar from "../components/NavBar";
import "../styles/Technology.scss";

function Technology({ technology }) {
  return (
    <div className="techpage">
      <NavBar />
      <h1>Space launch 101 </h1>
      <p>The terminology... </p>

      {technology.map((tech, index) => (
        <section key={index}>
          <h1>{tech.name}</h1>
          <p>{tech.description}</p>
          <img src={tech.images.portrait} alt={tech.name} />
        </section>
      ))}
    </div>
  );
}

export default Technology;

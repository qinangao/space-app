import NavBar from "../components/NavBar";
import "../styles/Technology.scss";

function Technology({ technology }) {
  return (
    <div className="page techpage">
      <NavBar />
      <div className="main">
        <h1 className="title">
          {" "}
          <span>03</span>Space launch 101{" "}
        </h1>
        <p>The terminology... </p>

        {technology.map((tech, index) => (
          <section key={index}>
            <h1>{tech.name}</h1>
            <p>{tech.description}</p>
            <img src={tech.images.portrait} alt={tech.name} />
          </section>
        ))}
      </div>
    </div>
  );
}

export default Technology;

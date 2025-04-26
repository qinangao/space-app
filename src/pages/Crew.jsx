import NavBar from "../components/NavBar";
import "../styles/Crew.scss";

function Crew({ crew, activeIndex, setActiveIndex }) {
  return (
    <div className="page crewpage">
      <NavBar />
      <div className="main">
        <section className="container">
          <div className="textbox">
            <h1 className="title">
              <span>02</span> Meet your crew
            </h1>

            <h3 className="role">{crew[activeIndex].role}</h3>
            <h2 className="name">{crew[activeIndex].name}</h2>
            <p className="content">{crew[activeIndex].bio}</p>

            <ul className="crew-nav">
              {crew.map((crew, index) => (
                <li
                  key={index}
                  className={`dots ${
                    index === activeIndex ? "active-dot" : ""
                  }`}
                  onClick={() => setActiveIndex(index)}
                ></li>
              ))}
            </ul>
          </div>
          <div className="imgbox">
            <img
              src={crew[activeIndex].images.webp}
              alt={crew[activeIndex].name}
            />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Crew;

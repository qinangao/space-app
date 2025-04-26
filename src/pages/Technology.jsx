import NavBar from "../components/NavBar";
import "../styles/Technology.scss";

function Technology({ technology, activeIndex, setActiveIndex }) {
  return (
    <div className="page techpage">
      <NavBar />
      <div className="main">
        <section className="container">
          <div>
            <h1 className="title">
              <span>03</span>Space launch 101
            </h1>
            <div className="tech-left">
              <div className="tect-nav">
                {technology.map((tech, index) => (
                  <div
                    key={index}
                    className={`button ${
                      index === activeIndex ? "active-button" : ""
                    }`}
                    onClick={() => setActiveIndex(index)}
                  >
                    {index + 1}
                  </div>
                ))}
              </div>
              <div className="tech-textbox">
                <p className="intro">The terminology... </p>
                <h2 className="name">{technology[activeIndex].name}</h2>
                <p className="content">{technology[activeIndex].description}</p>
              </div>
            </div>
          </div>

          <div className="imgbox">
            <img src={technology[activeIndex].images.portrait} alt="" />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Technology;

import NavBar from "../components/NavBar";
import "../styles/Technology.scss";
import { useNewState } from "../contexts/StateContext";
import MapItems from "../components/MapItems";

function Technology() {
  const { activeIndex, setActiveIndex, isMobile, technology } = useNewState();

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
                <MapItems
                  data={technology}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                  renderContent={(tech, index) => index + 1}
                  baseClass="button"
                  activeClass="active-button"
                  Element="div"
                />
              </div>
              <div className="tech-textbox">
                <p className="intro">The terminology... </p>
                <h2 className="name">{technology[activeIndex].name}</h2>
                <p className="content">{technology[activeIndex].description}</p>
              </div>
            </div>
          </div>

          <div className="imgbox">
            <img
              src={
                isMobile
                  ? technology[activeIndex].images.landscape
                  : technology[activeIndex].images.portrait
              }
              alt={technology[activeIndex].name}
            />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Technology;

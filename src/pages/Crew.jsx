import NavBar from "../components/NavBar";
import "../styles/Crew.scss";
import { useNewState } from "../contexts/StateContext";
import MapItems from "../components/MapItems";

function Crew() {
  const { activeIndex, setActiveIndex, isMobile, crew } = useNewState();
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

            <nav className="crew-nav">
              <MapItems
                data={crew}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
                renderContent={() => null}
                baseClass="dots"
                activeClass="active-dot"
                Element="div"
              />
            </nav>
          </div>
          <div className="imgbox">
            <img
              src={
                isMobile
                  ? crew[activeIndex].images.png
                  : crew[activeIndex].images.webp
              }
              alt={crew[activeIndex].name}
            />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Crew;

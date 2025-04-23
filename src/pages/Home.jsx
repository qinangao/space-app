import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import "../styles/Home.scss";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="homepage">
      <NavBar />
      <div className="home-container">
        <div className="home-left">
          <h4>So, you want to travel to</h4>
          <span>Space</span>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="home-right">
          <button path="destination" onClick={() => navigate("/destination")}>
            Explore
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";
import data from "./data/data.json";
import { StateProvider } from "./contexts/StateContext";

const destination = data.destinations;
const crew = data.crew;
const technology = data.technology;

function App() {
  // const [activeIndex, setActiveIndex] = useState(0);
  // const [isMobile, setIsMobile] = useState(window.innerWidth < 576);

  // useEffect(() => {
  //   function handleResize() {
  //     setIsMobile(window.innerWidth < 576);
  //   }

  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);
  return (
    <StateProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="destination"
            element={<Destination destination={destination} />}
          />
          <Route path="crew" element={<Crew crew={crew} />} />
          <Route
            path="technology"
            element={<Technology technology={technology} />}
          />
        </Routes>
      </BrowserRouter>
    </StateProvider>
  );
}

export default App;

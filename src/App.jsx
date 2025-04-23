import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";
import data from "./data/data.json";

const destination = data.destinations;
const crew = data.crew;
const technology = data.technology;

function App() {
  return (
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
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";
import data from "./data/data.json";

const destination = data.destinations;
const crew = data.crew;
const technology = data.technology;

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="destination"
          element={
            <Destination
              destination={destination}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            />
          }
        />
        <Route
          path="crew"
          element={
            <Crew
              crew={crew}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            />
          }
        />
        <Route
          path="technology"
          element={
            <Technology
              technology={technology}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

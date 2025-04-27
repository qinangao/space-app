import { createContext, useContext } from "react";
import { useState, useEffect } from "react";
import data from "../data/data.json";

const StateContext = createContext();
const destination = data.destinations;
const crew = data.crew;
const technology = data.technology;

function StateProvider({ children }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 576);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 576);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <StateContext.Provider
      value={{
        activeIndex,
        setActiveIndex,
        isMobile,
        destination,
        crew,
        technology,
      }}
    >
      {children}
    </StateContext.Provider>
  );
}

function useNewState() {
  const context = useContext(StateContext);
  if (context === undefined)
    throw new Error("StateContext was used outside the StataProvider ");
  return context;
}

export { StateProvider, useNewState };

import { createContext, useContext } from "react";
import { useState, useEffect } from "react";

const StateContext = createContext();

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
    <StateContext.Provider value={{ activeIndex, setActiveIndex, isMobile }}>
      {children}
    </StateContext.Provider>
  );
}

function useNewState() {
  const context = useContext(StateContext);
  if (context === undefined)
    throw new Error("StateContext was used outside the StataeProvider ");
  return context;
}

export { StateProvider, useNewState };

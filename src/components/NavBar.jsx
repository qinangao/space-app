import { NavLink, Link } from "react-router-dom";
import "../styles/NavBar.scss";
import { useState } from "react";
function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="navbar">
      <Link className="logo" to="/">
        <img src="/assets/shared/logo.svg" alt="logo" />
      </Link>
      <hr className="divider" />
      <div className="desknav">
        <ul>
          <li>
            <NavLink to="/">
              <span>00</span> HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="/destination">
              <span>01</span> DESTINATION
            </NavLink>
          </li>
          <li>
            <NavLink to="/crew">
              <span>02</span> CREW
            </NavLink>
          </li>
          <li>
            <NavLink to="/technology">
              <span>03</span> TECHNOLOGY
            </NavLink>
          </li>
        </ul>
      </div>

      {isOpen && (
        <div className="mobilenav">
          <ul>
            <li>
              <NavLink to="/">
                <span>00</span> HOME
              </NavLink>
            </li>
            <li>
              <NavLink to="/destination">
                <span>01</span> DESTINATION
              </NavLink>
            </li>
            <li>
              <NavLink to="/crew">
                <span>02</span> CREW
              </NavLink>
            </li>
            <li>
              <NavLink to="/technology">
                <span>03</span> TECHNOLOGY
              </NavLink>
            </li>
          </ul>
        </div>
      )}

      <div className="hamburger-btn" onClick={() => setIsOpen(!isOpen)}>
        <img
          src={
            isOpen
              ? "/assets/shared/icon-close.svg"
              : "/assets/shared/icon-hamburger.svg"
          }
          alt="open-btn"
        />
      </div>
    </nav>
  );
}

export default NavBar;

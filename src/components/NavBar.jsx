import { NavLink, Link } from "react-router-dom";
import "../styles/NavBar.scss";
function NavBar() {
  return (
    <nav className="navbar">
      <Link className="logo" to="/">
        <img src="/assets/shared/logo.svg" alt="logo" />
      </Link>
      <hr className="divider" />
      <ul>
        <li>
          <NavLink to="/">00 HOME</NavLink>
        </li>
        <li>
          <NavLink to="/destination">01 DESTINATION</NavLink>
        </li>
        <li>
          <NavLink to="/crew">02 CREW</NavLink>
        </li>
        <li>
          <NavLink to="/technology">03 TECHNOLOGY</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;

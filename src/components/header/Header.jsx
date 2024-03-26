import { Link, Outlet } from "react-router-dom";
import "./Header.scss";

function Header() {
  return (
    <nav>
      <div className="container">
        <ul className="nav-wrapper">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>

      <Outlet />
    </nav>
  );
}

export default Header;
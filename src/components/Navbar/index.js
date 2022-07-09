import { NavbarContainer } from "./navbar.style";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <NavbarContainer>
      <ul>
        <li>
          <h1>
            <Link to="/">Years Of Experience</Link>
          </h1>
        </li>
        <li>
          <Link to="/">Homepage</Link>
        </li>
        <li>
          <Link to="/">About Us</Link>
        </li>
        <li>
          <Link to="/">Contact</Link>
        </li>
        <li>
          <Link to="/profile/indraantoor">Profile</Link>
        </li>
        <li>
          <button>Sign In</button>
        </li>
        <li>
          <button className="outline-button">Register</button>
        </li>
      </ul>
    </NavbarContainer>
  );
};

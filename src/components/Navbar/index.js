import { NavbarContainer } from "./navbar.style";

export const Navbar = () => {
  return (
    <NavbarContainer>
      <ul>
        <li>
          <h1>
            <a href="https://localhost:3000" id="logo-title">
              Years Of Experience
            </a>
          </h1>
        </li>
        <li>
          <a href="https://localhost:3000">Homepage</a>
        </li>
        <li>
          <a href="https://localhost:3000">About Us</a>
        </li>
        <li>
          <a href="https://localhost:3000">Contact</a>
        </li>
        <li>
          <a href="https://localhost:3000">Profile</a>
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

import { NavbarContainer } from "./navbar.style";

export const Navbar = () => {
  return (
    <NavbarContainer>
      <ul>
        <li>
          <h1>
            <a href="https://localhost:3000">Years Of Experience</a>
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
      </ul>
    </NavbarContainer>
  );
};

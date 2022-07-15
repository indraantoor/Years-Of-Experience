import { NavbarContainer } from "./navbar.style";
import { Link } from "react-router-dom";
import React from "react";

export const Navbar = () => {
  return (
    <NavbarContainer>
      <ul>
        <li>
          <h1>
            <Link to="/profile/indraantoor">Years Of Experience</Link>
          </h1>
        </li>
        <li>
          <Link to="/profile/indraantoor">Homepage</Link>
        </li>
        <li>
          <Link to="/profile/indraantoor">Profile</Link>
        </li>
        <li>
          <Link to="/profile/indraantoor/edit/">Edit Profile</Link>
        </li>
        <li>
          <Link to="#">Contact</Link>
        </li>
        <li>
          <Link to="#">
            <button>Sign In</button>
          </Link>
        </li>
        <li>
          <Link to="#">
            <button className="outline-button">Register</button>
          </Link>
        </li>
      </ul>
    </NavbarContainer>
  );
};

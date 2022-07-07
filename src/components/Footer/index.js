import React from "react";
import { GradientDivider } from "../GradientDivider";
import { FooterContainer } from "./footer.style";

export const Footer = () => {
  return (
    <React.Fragment>
      <GradientDivider />
      <FooterContainer>
        <ul>
          <li>
            <h2>Years Of Experience</h2>
          </li>
          <li>
            <a href="https://localhost:3000">About Us</a>
          </li>
          <li>
            <a href="mailto:indraan@example.com">Contact</a>
          </li>
        </ul>
        <p>
          <small>&copy; 2022 Indraan S Toor, All rights reserved.</small>
        </p>
      </FooterContainer>
    </React.Fragment>
  );
};

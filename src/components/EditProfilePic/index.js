import React from "react";
import { Container } from "./editProfilePic.style";

export const EditProfilePic = () => {
  return (
    <Container>
      <label htmlFor="profileimg">
        Profile Picture:
        <input type="file" id="profileimg" />
      </label>
    </Container>
  );
};

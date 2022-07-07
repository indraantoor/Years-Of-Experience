import React from "react";
import { Container } from "./editProfilePic.style";

export const EditProfilePic = () => {
  return (
    <Container>
      <div className="image-container">image</div>
      <label htmlFor="profileimg">
        Profile Picture:
        <input type="file" id="profileimg" />
      </label>
      <button type="submit">Update</button>
    </Container>
  );
};

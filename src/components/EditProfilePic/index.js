import React from "react";
import { Container } from "./editProfilePic.style";
import { useSelector } from "react-redux";

export const EditProfilePic = () => {
  const user = useSelector((state) => state.userDetails);

  return (
    <Container>
      <div className="image-container">
        <img src={user.profilePic} alt="profile avatar" />
      </div>
      <label htmlFor="profileimg">
        Profile Picture
        <input type="file" id="profileimg" />
      </label>
      <button type="submit">Update</button>
    </Container>
  );
};

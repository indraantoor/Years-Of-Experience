import React from "react";
import { ProfilePictureContainer, Wrapper } from "./aboutYou.style";

export const BasicDetails = ({ userData }) => {
  return (
    <React.Fragment>
      <ProfilePictureContainer>
        <img src={userData?.profilePic} alt="user" />
      </ProfilePictureContainer>
      <Wrapper>
        <div>
          <span>Name</span> {userData.name}
        </div>
        <div>
          <span>Username</span> {userData.username}
        </div>
        <div>
          <span>Age</span>
          {userData.age}
        </div>
      </Wrapper>
    </React.Fragment>
  );
};

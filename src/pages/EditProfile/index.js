import React from "react";
import { EditBasicDetails } from "../../components/EditBasicDetails";
import { EditProfilePic } from "../../components/EditProfilePic";
import { EditBasicDetailsContainer } from "./editProfile.style";

export const EditProfile = () => {
  return (
    <React.Fragment>
      <h2>Edit Profile</h2>
      <EditBasicDetailsContainer>
        <EditProfilePic />
        <EditBasicDetails />
      </EditBasicDetailsContainer>
    </React.Fragment>
  );
};

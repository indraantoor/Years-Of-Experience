import React from "react";
import { EditBasicDetails } from "../../components/EditBasicDetails";
import { EditProfilePic } from "../../components/EditProfilePic";

export const EditProfile = () => {
  return (
    <React.Fragment>
      <h2>Edit Profile</h2>
      <EditBasicDetails />
      <EditProfilePic />
    </React.Fragment>
  );
};

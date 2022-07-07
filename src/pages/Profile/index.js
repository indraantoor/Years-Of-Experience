import React from "react";
import {
  BasicDetailsContainer,
  ProfilePictureContainer,
} from "./profile.style";

export const Profile = () => {
  return (
    <React.Fragment>
      <h2>Profile</h2>

      <BasicDetailsContainer>
        <ProfilePictureContainer>
          <img
            src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="user"
          />
        </ProfilePictureContainer>

        <div className="details-wrapper">
          <h3>Indraan S Toor</h3>
          <div>
            @<span id="username">indraantoor</span>
          </div>
          <div>Age: 20</div>
        </div>
      </BasicDetailsContainer>

      <div>
        <h3>Work Experiences</h3>
        <div>Job title: Intern</div>
        <div>Start Date: June 2014 End Date: March 2017</div>
        <div>Xyz Company</div>
        <div>
          <div>Company Logo: logo</div>
          Job Description: Build a simple editable profile page that represents
          a candidate's basic information and work experience. Minimally, the
          following information is required to be editable and presented.
        </div>
      </div>
    </React.Fragment>
  );
};

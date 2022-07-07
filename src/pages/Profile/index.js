import React from "react";
import { WorkExperience } from "../../components/WorkExperience";
import {
  BasicDetailsContainer,
  ProfilePictureContainer,
} from "./profile.style";

export const Profile = () => {
  return (
    <React.Fragment>
      {/* <h2>Profile</h2> */}

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

      <h3 style={{ marginLeft: "2%" }}>Work Experiences</h3>
      <WorkExperience
        title="SDE 1"
        startDate="June 2014"
        isCurrentlyWorking="true"
        company="Amazon"
        companyLogoUrl="bai ji"
        description="helllooo"
      />

      <WorkExperience
        title="Fullstack Intern"
        startDate="June 2014"
        endDate="March 2017"
        company="Microsoft"
        companyLogoUrl="bai ji"
        description="helllooo"
      />
    </React.Fragment>
  );
};

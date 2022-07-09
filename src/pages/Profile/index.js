import React from "react";
import { WorkExperience } from "../../components/WorkExperience";
import {
  BasicDetailsContainer,
  ProfilePictureContainer,
  Container,
} from "./profile.style";
import { data } from "../../data";

export const Profile = () => {
  return (
    <Container>
      <BasicDetailsContainer>
        <ProfilePictureContainer>
          <img src={data.profilePic} alt="user" />
        </ProfilePictureContainer>

        <div className="details-wrapper">
          <h3>{data.name}</h3>
          <div>
            @<span id="username">{data.username}</span>
          </div>
          <div>Age: {Number(data.age)}</div>
        </div>
      </BasicDetailsContainer>

      <h3 style={{ marginLeft: "2%", fontSize: "1.3rem" }}>Work Experiences</h3>

      {data.workExperiences.length > 0 &&
        data.workExperiences.map((workExperience) => (
          <WorkExperience
            title={workExperience.jobTitle}
            startDate={workExperience.startDate}
            isCurrentlyWorking={String(workExperience.isCurrentlyWorking)}
            company={workExperience.companyName}
            companyLogoUrl={workExperience.companyLogo}
            description={workExperience.jobDescription}
          />
        ))}
    </Container>
  );
};

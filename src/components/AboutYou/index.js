import React from "react";
import {
  DetailsContainer,
  DetailsWrapper,
  Container,
  Wrapper,
  ProfilePictureContainer,
  EditWrapper,
} from "./aboutYou.style";
import { data } from "../../data";
import { WorkExperience } from "../WorkExperience";

export const AboutYou = () => {
  return (
    <Container>
      <DetailsWrapper>
        <EditWrapper>
          <h2>About You</h2>
          <button>Edit</button>
        </EditWrapper>
        <DetailsContainer>
          <ProfilePictureContainer>
            <img src={data.profilePic} alt="user" />
          </ProfilePictureContainer>
          <Wrapper>
            <div>
              <span>Name</span> {data.name}
            </div>
            <div>
              <span>Username</span> {data.username}
            </div>
            <div>
              <span>Age</span>
              {data.age}
            </div>
          </Wrapper>
        </DetailsContainer>
      </DetailsWrapper>

      <DetailsWrapper>
        <h2>Work Experiences</h2>
        {data.workExperiences.length > 0 &&
          data.workExperiences.map((workExperience) => (
            <>
              <WorkExperience
                title={workExperience.jobTitle}
                startDate={workExperience.startDate}
                isCurrentlyWorking={String(workExperience.isCurrentlyWorking)}
                company={workExperience.companyName}
                companyLogoUrl={workExperience.companyLogo}
                description={workExperience.jobDescription}
              />
              <button>Edit</button>
            </>
          ))}
      </DetailsWrapper>
    </Container>
  );
};

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
import { Link, useLocation } from "react-router-dom";

export const AboutYou = () => {
  const location = useLocation();

  return (
    <Container>
      <DetailsWrapper>
        <EditWrapper>
          <h2>About You</h2>
          <Link to={location.pathname + "basic"}>
            <button>Edit</button>
          </Link>
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
                key={workExperience.id}
                title={workExperience.jobTitle}
                startDate={workExperience.startDate}
                isCurrentlyWorking={String(workExperience.isCurrentlyWorking)}
                company={workExperience.companyName}
                companyLogoUrl={workExperience.companyLogo}
                description={workExperience.jobDescription}
              />
              <Link
                to={location.pathname + "workexperience/" + workExperience.id}
              >
                <button>Edit</button>
              </Link>
            </>
          ))}
      </DetailsWrapper>
    </Container>
  );
};

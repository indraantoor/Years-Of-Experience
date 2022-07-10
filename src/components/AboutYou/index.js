import React from "react";
import {
  DetailsContainer,
  DetailsWrapper,
  Container,
  Wrapper,
  ProfilePictureContainer,
  EditWrapper,
} from "./aboutYou.style";
import { data, workExperiencesData } from "../../data";
import { WorkExperience } from "../WorkExperience";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export const AboutYou = () => {
  const [userData, setUserData] = useState({});
  const [workExperiences, setWorkExperiences] = useState([]);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setUserData(data);
  }, []);

  useEffect(() => {
    setWorkExperiences(workExperiencesData.workExperiences);
  }, []);

  const isValidExperiencesCollection =
    workExperiences && workExperiences.length > 0 ? true : false;

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
            <img src={userData.profilePic} alt="user" />
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
        </DetailsContainer>
      </DetailsWrapper>

      <DetailsWrapper>
        <h2>Work Experiences</h2>
        {isValidExperiencesCollection &&
          workExperiences.map((workExperience, i) => (
            <div key={i}>
              <WorkExperience
                title={workExperience.jobTitle}
                startDate={workExperience.startDate}
                endDate={workExperience.endDate}
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
            </div>
          ))}
      </DetailsWrapper>
      <button className="cancelBtn" onClick={() => navigate(-1)}>
        Cancel
      </button>
    </Container>
  );
};

import React from "react";
import {
  DetailsContainer,
  DetailsWrapper,
  Container,
  Wrapper,
  ProfilePictureContainer,
  EditWrapper,
} from "./aboutYou.style";
import { WorkExperience } from "../WorkExperience";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUserDetailsFromApi } from "../../store/userDetailsSlice";
import { fetchWorkExperiencesFromApi } from "../../store/workExperiencesSlice";

export const AboutYou = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const userId = "V4QsOhuPZXQHXJ2Dw8QI";
    dispatch(fetchUserDetailsFromApi(userId));
    dispatch(fetchWorkExperiencesFromApi(userId));
  }, []);

  const userData = useSelector((state) => state.userDetails);
  const workExperiences = useSelector((state) => state.workExperiences.data);

  const isUserLoading = useSelector((state) => state.userDetails.loading);
  const isUserError = useSelector((state) => state.userDetails.error);

  const location = useLocation();
  const navigate = useNavigate();

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
          {isUserLoading ? (
            <h2>Loading...</h2>
          ) : isUserError ? (
            <h2>Error</h2>
          ) : (
            <React.Fragment>
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
            </React.Fragment>
          )}
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

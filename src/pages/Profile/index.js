import React, { useEffect } from "react";
import { WorkExperience } from "../../components/WorkExperience";
import {
  BasicDetailsContainer,
  ProfilePictureContainer,
  Container,
  WorkExperiencesContainer,
} from "./profile.style";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserDetailsFromApi } from "../../store/helpers/userDetailsSliceHelpers";
import { fetchWorkExperiencesFromApi } from "../../store/helpers/workExperiencesSliceHelpers";
import { currentUserId } from "../../app-config";

export const Profile = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserDetailsFromApi(currentUserId));
    dispatch(fetchWorkExperiencesFromApi(currentUserId));
  }, []);

  const userData = useSelector((state) => state.userDetails);
  const workExperiences = useSelector((state) => state.workExperiences.data);

  const isUserLoading = useSelector((state) => state.userDetails.loading);
  const isUserError = useSelector((state) => state.userDetails.error);

  const isWorkExperiencesLoading = useSelector(
    (state) => state.workExperiences.loading
  );
  const isWorkExperiencesError = useSelector(
    (state) => state.workExperiences.error
  );

  const location = useLocation();

  const isValidExperiencesCollection =
    workExperiences && workExperiences.length > 0 ? true : false;

  return (
    <Container>
      <BasicDetailsContainer>
        {isUserLoading ? (
          <h2 data-testid="loading">Loading...</h2>
        ) : isUserError ? (
          <h2>Error</h2>
        ) : (
          <React.Fragment>
            <ProfilePictureContainer>
              <img src={userData.profilePic} alt="user" />
            </ProfilePictureContainer>

            <div className="details-wrapper">
              <h3>{userData.name}</h3>
              <div>
                @<span id="username">{userData.username}</span>
              </div>
              <div>Age: {Number(userData.age)}</div>
            </div>
          </React.Fragment>
        )}
      </BasicDetailsContainer>
      <WorkExperiencesContainer>
        <h3 style={{ fontSize: "1.3rem" }}>Work Experiences</h3>
        {isWorkExperiencesLoading ? (
          <h2 data-testid="experienceLoading">Loading...</h2>
        ) : isWorkExperiencesError ? (
          <h2>Error</h2>
        ) : (
          isValidExperiencesCollection &&
          workExperiences.map((workExperience, i) => (
            <WorkExperience
              key={i}
              title={workExperience.jobTitle}
              startDate={workExperience.startDate}
              endDate={workExperience.endDate}
              isCurrentlyWorking={String(workExperience.isCurrentlyWorking)}
              company={workExperience.companyName}
              companyLogoUrl={workExperience.companyLogo}
              description={workExperience.jobDescription}
            />
          ))
        )}
      </WorkExperiencesContainer>
      <Link to={location.pathname + "/edit/"}>
        <button className="editProfileBtn">Edit Profile</button>
      </Link>
    </Container>
  );
};

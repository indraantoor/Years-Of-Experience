import React, { useEffect } from "react";
import {
  DetailsContainer,
  DetailsWrapper,
  Container,
  EditWrapper,
} from "./aboutYou.style";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserDetailsFromApi } from "../../store/helpers/userDetailsSliceHelpers";
import { fetchWorkExperiencesFromApi } from "../../store/helpers/workExperiencesSliceHelpers";
import { BasicDetails } from "./BasicDetails";
import { WorkExperiencesCards } from "./WorkExperiencesCards";
import { currentUserId } from "../../app-config";

export const AboutYou = () => {
  const dispatch = useDispatch();

  const location = useLocation();
  const navigate = useNavigate();

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

  const isValidExperiencesCollection =
    workExperiences && workExperiences.length > 0 ? true : false;

  return (
    <Container>
      <DetailsWrapper data-testid="aboutYouSection">
        <EditWrapper>
          <h2>About You</h2>
          <Link to={location.pathname + "basic"}>
            <button className="editBtnNormal">Edit</button>
          </Link>
        </EditWrapper>
        <DetailsContainer>
          {isUserLoading ? (
            <h2 data-testid="loading">Loading...</h2>
          ) : isUserError ? (
            <h2>Error</h2>
          ) : (
            <BasicDetails userData={userData} />
          )}
        </DetailsContainer>
        <Link to={location.pathname + "basic"}>
          <button className="editBtnMobile">Edit</button>
        </Link>
      </DetailsWrapper>

      <DetailsWrapper>
        <h2>Work Experiences</h2>
        {isWorkExperiencesLoading ? (
          <h2 data-testid="experienceLoading">Loading...</h2>
        ) : isWorkExperiencesError ? (
          <h2>Error</h2>
        ) : isValidExperiencesCollection ? (
          <div data-testid="workExperiences">
            <WorkExperiencesCards
              workExperiences={workExperiences}
              location={location}
            />
          </div>
        ) : (
          <h2 data-testid="emptyExperiencesData">There are no experiences</h2>
        )}
      </DetailsWrapper>
      <button className="cancelBtn" onClick={() => navigate(-1)}>
        Cancel
      </button>
    </Container>
  );
};

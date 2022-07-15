import React, { useEffect, useState } from "react";
import { FormContainer, Container } from "./editWorkExperiences.style";
import { useNavigate, useParams, Navigate } from "react-router-dom";
import {
  updateWorkExperienceToApi,
  fetchWorkExperiencesFromApi,
} from "../../store/helpers/workExperiencesSliceHelpers";
import { workExperiencesSlice } from "../../store/workExperiencesSlice";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { removeEmptyValues, trimAllValues, isValidDuration } from "../../utils";
import { fetchUserDetailsFromApi } from "../../store/helpers/userDetailsSliceHelpers";
import { EditCompanyPic } from "../EditCompanyPic";
import { getCurrentDateFormatted } from "../../helpers";
import { currentUserId } from "../../app-config";

export const EditWorkExperiences = () => {
  const [updatedDetails, setUpdatedDetails] = useState({});
  const [maxDate, setMaxDate] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const navigate = useNavigate();

  const params = useParams();
  const { workExperienceId } = params;

  const dispatch = useDispatch();

  const workExperience = useSelector((state) =>
    state.workExperiences.data.find(
      (experience) => experience.id == workExperienceId
    )
  );

  useEffect(() => {
    dispatch(fetchUserDetailsFromApi(currentUserId));
    dispatch(fetchWorkExperiencesFromApi(currentUserId));
  }, []);

  useEffect(() => {
    if (Boolean(workExperience?.isCurrentlyWorking)) {
      setIsChecked(true);
    }
  }, [workExperience]);

  useEffect(() => {
    setUpdatedDetails(workExperience);
  }, [workExperience]);

  useEffect(() => {
    setMaxDate(getCurrentDateFormatted());
  }, []);

  const userId = useSelector((state) => state.userDetails.id);
  const redirect = useSelector((state) => state.workExperiences.redirect);
  const loading = useSelector((state) => state.workExperiences.loading);

  const handleChange = (event) => {
    updateValues(event, setUpdatedDetails);
  };

  const handleCheckbox = (event) => {
    const check = !isChecked;
    setIsChecked(!isChecked);
    checkboxChange(check, setUpdatedDetails);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const details = prepareWithId(updatedDetails, userId, workExperienceId);

    if (isChecked == false) {
      const { startDate, endDate } = updatedDetails;
      validateExperienceDuration(startDate, endDate, details);
    }

    dispatch(workExperiencesSlice.actions.update(details));
    dispatch(updateWorkExperienceToApi(details));
    navigate(`/profile/${params.profileId}`);
  };

  if (redirect == true) {
    return <Navigate to={`/profile/${params.profileId}`} />;
  }

  return (
    <Container>
      <FormContainer>
        {loading ? (
          <h2 data-testid="loading">Loading...</h2>
        ) : (
          <React.Fragment>
            <EditCompanyPic />
            <form onSubmit={handleSubmit}>
              <label htmlFor="title">
                Job Title
                <input
                  type="text"
                  id="title"
                  placeholder="Job Title"
                  value={String(updatedDetails?.jobTitle)}
                  name="jobTitle"
                  onChange={handleChange}
                  required
                />
              </label>
              <div id="dates">
                <label htmlFor="startdate">
                  Start Date
                  <input
                    type="date"
                    id="startdate"
                    name="startDate"
                    max={maxDate}
                    value={String(formatDate(updatedDetails?.startDate))}
                    onChange={handleChange}
                  />
                </label>
                <label htmlFor="enddate">
                  End Date
                  <input
                    type="date"
                    id="enddate"
                    name="endDate"
                    data-testid="endDate"
                    max={maxDate}
                    value={String(formatDate(updatedDetails?.endDate))}
                    onChange={handleChange}
                    disabled={isChecked ? true : false}
                  />
                </label>
              </div>
              <label htmlFor="currentlyworking">
                Currently Working
                <input
                  type="checkbox"
                  id="currentlyworking"
                  name="isCurrentlyWorking"
                  checked={isChecked ? true : false}
                  data-testid="isCurrentlyWorking"
                  value="true"
                  onChange={handleCheckbox}
                />
              </label>
              <label htmlFor="companyName">
                Company
                <input
                  type="text"
                  id="companyName"
                  minLength="0"
                  placeholder="Company"
                  value={String(updatedDetails?.companyName)}
                  name="companyName"
                  onChange={handleChange}
                  required
                />
              </label>
              <label htmlFor="jobDescription">
                Job Description
                <textarea
                  id="jobDescription"
                  value={String(updatedDetails?.jobDescription)}
                  placeholder="Job Description"
                  name="jobDescription"
                  onChange={handleChange}
                  required
                />
              </label>
              <div>
                <button type="submit">Update</button>
              </div>
            </form>
            <div>
              <button id="cancel" onClick={() => navigate(-1)}>
                Cancel
              </button>
            </div>
          </React.Fragment>
        )}
      </FormContainer>
    </Container>
  );
};

/*
    Helper Functions
*/

function prepareWithId(data, userId, workExperienceId) {
  const filteredDetails = removeEmptyValues(data);
  const cleanedUpDetails = trimAllValues(filteredDetails);
  const updatedData = {
    ...cleanedUpDetails,
    userId: userId,
    id: workExperienceId,
  };
  return updatedData;
}

function validateExperienceDuration(startDate, endDate, data) {
  if (isValidDuration(startDate, endDate) == false) {
    delete data["endDate"];
    alert("Enter A Valid End Date");
    return;
  }
}

function formatDate(date) {
  return moment(new Date(date)).format("YYYY-MM-DD");
}

function updateValues(event, setFn) {
  setFn((prev) => {
    return {
      ...prev,
      [event.target.name]: event.target.value,
    };
  });
}

function checkboxChange(checked, setFn) {
  if (checked) {
    setFn((prev) => {
      const { endDate, ...withoutEndDate } = prev;
      return { ...withoutEndDate, isCurrentlyWorking: true };
    });
  } else {
    setFn((prev) => {
      return { ...prev, isCurrentlyWorking: false };
    });
  }
}

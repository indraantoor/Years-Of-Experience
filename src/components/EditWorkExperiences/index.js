import React, { useEffect, useState } from "react";
import { FormContainer, Container } from "./editWorkExperiences.style";
import { useNavigate, useParams, Navigate } from "react-router-dom";
import {
  updateWorkExperienceToApi,
  workExperiencesSlice,
} from "../../store/workExperiencesSlice";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { removeEmptyValues, trimAllValues } from "../../utils";
import { fetchUserDetailsFromApi } from "../../store/userDetailsSlice";
import { fetchWorkExperiencesFromApi } from "../../store/workExperiencesSlice";

export const EditWorkExperiences = () => {
  const [updatedDetails, setUpdatedDetails] = useState({});
  const [maxDate, setMaxDate] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const userId = useSelector((state) => state.userDetails.id);
  const redirect = useSelector((state) => state.workExperiences.redirect);
  const loading = useSelector((state) => state.workExperiences.loading);

  useEffect(() => {
    const userId = "V4QsOhuPZXQHXJ2Dw8QI";
    dispatch(fetchUserDetailsFromApi(userId));
    dispatch(fetchWorkExperiencesFromApi(userId));
  }, []);

  const params = useParams();
  const { workExperienceId, profileId } = params;

  const dispatch = useDispatch();

  const workExperience = useSelector((state) =>
    state.workExperiences.data.find(
      (experience) => experience.id == workExperienceId
    )
  );

  useEffect(() => {
    if (Boolean(workExperience?.isCurrentlyWorking)) {
      setIsChecked(true);
    }
  }, [workExperience]);

  useEffect(() => {
    setUpdatedDetails(workExperience);
  }, [workExperience]);

  useEffect(() => {
    const date = new Date();
    setMaxDate(moment(date).format("YYYY-MM-DD"));
  }, []);

  const navigate = useNavigate();

  const handleChange = (event) => {
    setUpdatedDetails((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  };

  const handleCheckbox = (event) => {
    const check = !isChecked;
    setIsChecked(!isChecked);
    if (check) {
      setUpdatedDetails((prev) => {
        const { endDate, ...withoutEndDate } = prev;
        return { ...withoutEndDate, isCurrentlyWorking: true };
      });
    } else {
      setUpdatedDetails((prev) => {
        return { ...prev, isCurrentlyWorking: false };
      });
    }
  };

  const isValidDuration = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    return start < end ? true : false;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const filteredDetails = removeEmptyValues(updatedDetails);
    const cleanedUpDetails = trimAllValues(filteredDetails);
    const details = {
      ...cleanedUpDetails,
      userId: userId,
      id: workExperienceId,
    };

    if (isChecked == false) {
      const { startDate, endDate } = updatedDetails;
      if (isValidDuration(startDate, endDate) == false) {
        delete details["endDate"];
        alert("Enter A Valid End Date");
        return;
      }
    }

    console.log(details);
    dispatch(workExperiencesSlice.actions.update(details));
    dispatch(updateWorkExperienceToApi(details));
    navigate(`/profile/${params.profileId}`);
  };

  const formatDate = (date) => {
    return moment(new Date(date)).format("YYYY-MM-DD");
  };

  if (redirect == true) {
    return <Navigate to={`/profile/${params.profileId}`} />;
  }

  return (
    <Container>
      <FormContainer>
        {loading ? (
          <h2>Loading...</h2>
        ) : (
          <React.Fragment>
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
                />
              </label>
              <label htmlFor="companyLogo">
                Logo
                <input type="file" id="companyLogo" />
              </label>
              <label htmlFor="jobDescription">
                Job Description
                <textarea
                  id="jobDescription"
                  value={String(updatedDetails?.jobDescription)}
                  placeholder="Job Description"
                  name="jobDescription"
                  onChange={handleChange}
                />
              </label>
              <div>
                <button type="submit">Update</button>
              </div>
            </form>
            <div>
              <button
                id="removebtn"
                onClick={(event) => {
                  event.preventDefault();
                  dispatch(
                    workExperiencesSlice.actions.delete(workExperienceId)
                  );
                  navigate("/profile/" + profileId);
                }}
              >
                Remove
              </button>
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

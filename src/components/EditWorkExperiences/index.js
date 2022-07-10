import { useEffect, useState } from "react";
import { FormContainer, Container } from "./editWorkExperiences.style";
import { useNavigate, useParams } from "react-router-dom";
import { workExperiencesSlice } from "../../store/workExperiencesSlice";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

export const EditWorkExperiences = () => {
  const [updatedDetails, setUpdatedDetails] = useState({});
  const [maxDate, setMaxDate] = useState("");

  const params = useParams();
  const { workExperienceId } = params;

  const dispatch = useDispatch();

  const workExperience = useSelector((state) =>
    state.workExperiences.find(
      (experience) => experience.id == workExperienceId
    )
  );

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
      return { ...prev, [event.target.name]: event.target.value };
    });
  };

  const handleClick = (event) => {
    event.preventDefault();
    dispatch(workExperiencesSlice.actions.update(updatedDetails));
  };

  console.log(updatedDetails);

  return (
    <Container>
      <FormContainer>
        <form onSubmit={handleClick}>
          <label htmlFor="title">
            Job Title
            <input
              type="text"
              id="title"
              placeholder="Job Title"
              value={String(updatedDetails.jobTitle)}
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
                onChange={handleChange}
              />
            </label>
          </div>
          <label htmlFor="currentlyworking">
            Currently Working
            <input type="checkbox" id="currentlyworking" />
          </label>
          <label htmlFor="companyName">
            Company
            <input
              type="text"
              id="companyName"
              minLength="0"
              placeholder="Company"
              value={String(updatedDetails.companyName)}
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
              value={String(updatedDetails.jobDescription)}
              placeholder="Job Description"
              name="jobDescription"
              onChange={handleChange}
            />
          </label>
          <div>
            <button id="removebtn">Remove</button>
            <button type="submit">Update</button>
            <button id="cancel" onClick={() => navigate(-1)}>
              Cancel
            </button>
          </div>
        </form>
      </FormContainer>
    </Container>
  );
};

import { FormContainer, Container } from "./editWorkExperiences.style";

export const EditWorkExperiences = ({
  jobTitle,
  startDate,
  endDate,
  companyName,
  jobDescription,
  isCurrentlyWorking,
}) => {
  return (
    <Container>
      <FormContainer>
        <label htmlFor="title">
          Job Title
          <input
            type="text"
            id="title"
            placeholder="Job Title"
            value={jobTitle}
          />
        </label>
        <div id="dates">
          <label htmlFor="startdate">
            Start Date
            <input type="date" id="startdate" />
          </label>
          <label htmlFor="enddate">
            End Date
            <input type="date" id="enddate" />
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
            value={companyName}
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
            value={jobDescription}
            placeholder="Job Description"
          />
        </label>
        <div>
          <button id="removebtn">Remove</button>
          <button type="submit">Update</button>
        </div>
      </FormContainer>
    </Container>
  );
};

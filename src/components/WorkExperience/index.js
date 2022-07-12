import { Container, CompanyLogoContainer } from "./workExperience.style";
import moment from "moment";

export const WorkExperience = ({
  title,
  startDate,
  endDate,
  isCurrentlyWorking,
  company,
  companyLogoUrl,
  description,
}) => {
  return (
    <Container>
      <CompanyLogoContainer>
        <img src={companyLogoUrl} alt="Company Logo" />
      </CompanyLogoContainer>
      <div>
        <h4>{title}</h4>
        <div id="duration">
          Start Date: {moment(new Date(startDate)).format("MMM YYYY")} - End
          Date:
          <span
            className={isCurrentlyWorking === "true" ? "isWorking" : "finished"}
          >
            {isCurrentlyWorking === "true"
              ? " Present"
              : `${" " + moment(new Date(endDate)).format("MMM YYYY")}`}
          </span>
        </div>
        <div id="company">{company}</div>
        <div className="description-container">
          Job Description: <p id="description">{description}</p>
        </div>
      </div>
    </Container>
  );
};

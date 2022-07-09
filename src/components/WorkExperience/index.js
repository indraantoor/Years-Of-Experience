import { Container, CompanyLogoContainer } from "./workExperience.style";

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
          Start Date: {startDate} - End Date:
          <span className={!!isCurrentlyWorking ? "isWorking" : "finished"}>
            {isCurrentlyWorking === "true" ? " Present" : `${" " + endDate}`}
          </span>
        </div>
        <div id="company">{company}</div>
        <div className="description-container">
          Job Description: <div id="description">{description}</div>
        </div>
      </div>
    </Container>
  );
};

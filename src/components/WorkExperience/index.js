import { Container } from "./workExperience.style";

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
      <h4>{title}</h4>
      <div>
        Start Date: {startDate} - End Date:
        <span className={!!isCurrentlyWorking ? "isWorking" : "finished"}>
          {!!isCurrentlyWorking ? " Present" : `${" " + endDate}`}
        </span>
      </div>
      <div id="company">{company}</div>
      <div>
        <div>Company Logo: {companyLogoUrl}</div>
        Job Description: {description}
      </div>
    </Container>
  );
};

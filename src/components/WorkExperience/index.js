import { Container, CompanyLogoContainer } from "./workExperience.style";
import moment from "moment";
import React from "react";

export const WorkExperience = (props) => {
  const {
    title,
    startDate,
    endDate,
    isCurrentlyWorking,
    company,
    companyLogoUrl,
    description,
  } = props;

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
            className={
              String(isCurrentlyWorking) === "true" ? "isWorking" : "finished"
            }
            data-testid="endDateText"
          >
            {String(isCurrentlyWorking) === "true"
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

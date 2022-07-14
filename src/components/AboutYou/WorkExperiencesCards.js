import { WorkExperience } from "../WorkExperience";
import { Link } from "react-router-dom";
import React from "react";

export const WorkExperiencesCards = ({ workExperiences, location }) => {
  return workExperiences.map((workExperience, i) => (
    <div key={i}>
      <WorkExperience
        title={workExperience.jobTitle}
        startDate={workExperience.startDate}
        endDate={workExperience.endDate}
        isCurrentlyWorking={String(workExperience.isCurrentlyWorking)}
        company={workExperience.companyName}
        companyLogoUrl={workExperience.companyLogo}
        description={workExperience.jobDescription}
      />
      <Link to={location.pathname + "workexperience/" + workExperience.id}>
        <button>Edit</button>
      </Link>
    </div>
  ));
};

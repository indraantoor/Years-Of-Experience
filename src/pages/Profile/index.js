import React, { useEffect } from "react";
import { WorkExperience } from "../../components/WorkExperience";
import {
  BasicDetailsContainer,
  ProfilePictureContainer,
  Container,
  WorkExperiencesContainer,
} from "./profile.style";
import { data, workExperiencesData } from "../../data";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

// function compareExperiences(firstExperience, secondExperience) {
//   if (firstExperience.isCurrentlyWorking === "true") {
//     return -1;
//   }
//   return 1;
// }

export const Profile = () => {
  const [userData, setUserData] = useState({});
  const [workExperiences, setWorkExperiences] = useState([]);
  const location = useLocation();

  useEffect(() => {
    setUserData(data);
  }, []);

  useEffect(() => {
    setWorkExperiences(workExperiencesData.workExperiences);
  }, []);

  console.log(workExperiences);

  const isValidExperiencesCollection =
    workExperiences && workExperiences.length > 0 ? true : false;

  return (
    <Container>
      <BasicDetailsContainer>
        <ProfilePictureContainer>
          <img src={userData.profilePic} alt="user" />
        </ProfilePictureContainer>

        <div className="details-wrapper">
          <h3>{userData.name}</h3>
          <div>
            @<span id="username">{userData.username}</span>
          </div>
          <div>Age: {Number(userData.age)}</div>
        </div>
      </BasicDetailsContainer>
      <WorkExperiencesContainer>
        <h3 style={{ fontSize: "1.3rem" }}>Work Experiences</h3>
        {isValidExperiencesCollection &&
          workExperiences.map((workExperience, i) => (
            <WorkExperience
              key={i}
              title={workExperience.jobTitle}
              startDate={workExperience.startDate}
              endDate={workExperience.endDate}
              isCurrentlyWorking={String(workExperience.isCurrentlyWorking)}
              company={workExperience.companyName}
              companyLogoUrl={workExperience.companyLogo}
              description={workExperience.jobDescription}
            />
          ))}
      </WorkExperiencesContainer>
      <Link to={location.pathname + "/edit/"}>
        <button className="editProfileBtn">Edit Profile</button>
      </Link>
    </Container>
  );
};

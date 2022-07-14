import React, { useState } from "react";
import { Container } from "./editCompanyPic.style";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { uploadPic } from "./helpers";

export const EditCompanyPic = () => {
  const [file, setFile] = useState(null);
  const [isError, setIsError] = useState(false);

  const dispatch = useDispatch();

  const params = useParams();

  const userId = useSelector((state) => state.userDetails.id);
  const workExperience = useSelector((state) =>
    state.workExperiences.data.find(
      (experience) => experience.id == params.workExperienceId
    )
  );

  const handleImageChange = (event) => {
    if (event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { workExperienceId } = params;
    uploadPic(file, setIsError, userId, workExperienceId, dispatch);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <div className="image-container">
          <img src={workExperience?.companyLogo} alt="profile avatar" />
        </div>
        <label htmlFor="profileimg">
          Company Logo
          <input
            type="file"
            id="profileimg"
            onChange={handleImageChange}
            data-testid="upload"
          />
        </label>
        {isError && <span style={{ color: "red" }}>Error uploading image</span>}
        <button type="submit" data-testid="updateBtn">
          Update
        </button>
      </form>
    </Container>
  );
};

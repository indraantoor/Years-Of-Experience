import React, { useState } from "react";
import { Container } from "./editCompanyPic.style";
import { useSelector, useDispatch } from "react-redux";
import { storage } from "../../firebase-config";
import { ref, uploadBytesResumable, getDownloadURL } from "@firebase/storage";
import { useParams } from "react-router-dom";
import { workExperiencesSlice } from "../../store/workExperiencesSlice";
import { updateWorkExperienceToApi } from "../../store/helpers/workExperiencesSliceHelpers";

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
          <input type="file" id="profileimg" onChange={handleImageChange} />
        </label>
        {isError && <span style={{ color: "red" }}>Error uploading image</span>}
        <button type="submit">Update</button>
      </form>
    </Container>
  );
};

/*
   Helper Function
*/

function uploadPic(file, setErrFn, userId, workExperienceId, dispatch) {
  const fileName = new Date().getTime() + file.name;
  const storageRef = ref(storage, fileName);
  const uploadTask = uploadBytesResumable(storageRef, file);

  uploadTask.on(
    "state_changed",
    (snapshot) => {
      // Observe state change events such as progress, pause, and resume
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      setErrFn(false);
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log("Upload is " + progress + "% done");
      switch (snapshot.state) {
        case "paused":
          console.log("Upload is paused");
          break;
        case "running":
          console.log("Upload is running");
          break;
        default:
      }
    },
    (error) => {
      // Handle unsuccessful uploads
      setErrFn(true);
    },
    () => {
      // Handle successful uploads on complete
      // For instance, get the download URL: https://firebasestorage.googleapis.com/...
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        setErrFn(false);
        const updatedDetails = { companyLogo: downloadURL };
        const details = {
          ...updatedDetails,
          userId: userId,
          id: workExperienceId,
        };

        dispatch(workExperiencesSlice.actions.update(details));
        dispatch(updateWorkExperienceToApi(details));

        console.log("Download URL", updatedDetails);
      });
    }
  );
}

import React, { useState, useEffect } from "react";
import { Container } from "./editProfilePic.style";
import { useSelector, useDispatch } from "react-redux";
import { storage } from "../../firebase-config";
import { ref, uploadBytesResumable, getDownloadURL } from "@firebase/storage";
import { userDetailsSlice } from "../../store/userDetailsSlice";
import {
  updateUserDetailsToApi,
  fetchUserDetailsFromApi,
} from "../../store/userDetailsSlice";

export const EditProfilePic = () => {
  const [file, setFile] = useState(null);

  useEffect(() => {
    const userId = "V4QsOhuPZXQHXJ2Dw8QI";
    dispatch(fetchUserDetailsFromApi(userId));
  }, []);

  const user = useSelector((state) => state.userDetails);
  const userId = useSelector((state) => state.userDetails.id);

  const dispatch = useDispatch();

  const handleImageChange = (event) => {
    if (event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
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
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const updatedDetails = { profilePic: downloadURL };
          dispatch(userDetailsSlice.actions.update(updatedDetails));
          const details = {
            ...updatedDetails,
            userId: userId,
          };
          dispatch(updateUserDetailsToApi(details));
          console.log("Download URL", updatedDetails);
        });
      }
    );
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <div className="image-container">
          <img src={user.profilePic} alt="profile avatar" />
        </div>
        <label htmlFor="profileimg">
          Profile Picture
          <input type="file" id="profileimg" onChange={handleImageChange} />
        </label>
        <button type="submit">Update</button>
      </form>
    </Container>
  );
};

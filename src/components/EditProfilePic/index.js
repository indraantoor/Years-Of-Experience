import React, { useState, useEffect } from "react";
import { Container } from "./editProfilePic.style";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserDetailsFromApi } from "../../store/helpers/userDetailsSliceHelpers";
import { useNavigate, useParams } from "react-router-dom";
import { uploadPic } from "./helpers";
import { currentUserId } from "../../app-config";

export const EditProfilePic = () => {
  const [file, setFile] = useState(null);

  const navigate = useNavigate();
  const params = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserDetailsFromApi(currentUserId));
  }, []);

  const user = useSelector((state) => state.userDetails);
  const userId = useSelector((state) => state.userDetails.id);

  const handleImageChange = (event) => {
    if (event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { profileId } = params;
    uploadPic(file, dispatch, userId, profileId, navigate);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <div className="image-container">
          <img src={user?.profilePic} alt="profile avatar" />
        </div>
        <label htmlFor="profileimg">
          Profile Picture
          <input type="file" id="profileimg" onChange={handleImageChange} />
        </label>
        <button type="submit" data-testid="updateBtn">
          Update
        </button>
      </form>
    </Container>
  );
};

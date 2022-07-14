import React, { useState } from "react";
import { FormContainer, FormStyled } from "./editBasicDetails.style";
import { useDispatch, useSelector } from "react-redux";
import { userDetailsSlice } from "../../store/userDetailsSlice";
import { updateUserDetailsToApi } from "../../store/helpers/userDetailsSliceHelpers";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { removeEmptyValues } from "../../utils";

export const EditBasicDetails = () => {
  const [updatedDetails, setUpdatedDetails] = useState({});

  const userId = useSelector((state) => state.userDetails.id);
  const redirect = useSelector((state) => state.userDetails.redirect);

  const dispatch = useDispatch();

  const params = useParams();
  const navigate = useNavigate();

  if (redirect == true) {
    return <Navigate to={`/profile/${params.profileId}`} />;
  }

  const handleChange = (event) => {
    updateValues(event, setUpdatedDetails);
  };

  const handleClick = (event) => {
    event.preventDefault();
    removeEmptyValues(updatedDetails, setUpdatedDetails);
    dispatch(userDetailsSlice.actions.update(updatedDetails));
    const details = {
      ...updatedDetails,
      userId: userId,
    };
    dispatch(updateUserDetailsToApi(details));
    navigate(`/profile/${params.profileId}`);
  };

  return (
    <React.Fragment>
      <FormContainer>
        <FormStyled onSubmit={handleClick}>
          <label htmlFor="name">
            Name
            <input
              type="text"
              id="name"
              placeholder="Name"
              name="name"
              onChange={handleChange}
            />
          </label>
          <label htmlFor="username">
            Username
            <input
              type="text"
              id="username"
              placeholder="Username"
              name="username"
              onChange={(e) => {
                e.target.value = String(e.target.value).replace(" ", "");
                handleChange(e);
              }}
            />
          </label>
          <label htmlFor="age">
            Age
            <input
              type="number"
              id="age"
              min="1"
              max="100"
              placeholder="Age"
              name="age"
              onChange={handleChange}
            />
          </label>
          <div className="submitBtnContainer">
            <button type="submit" data-testid="submitBtn">
              Update
            </button>
          </div>
        </FormStyled>
      </FormContainer>
    </React.Fragment>
  );
};

/*
    Helper Functions
*/

function updateValues(event, setFn) {
  setFn((prev) => {
    return {
      ...prev,
      [event.target.name]: String(event.target.value).trim(),
    };
  });
}

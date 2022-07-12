import React, { useState } from "react";
import { FormContainer, Form } from "./editBasicDetails.style";
import { useDispatch, useSelector } from "react-redux";
import {
  userDetailsSlice,
  updateUserDetailsToApi,
} from "../../store/userDetailsSlice";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { removeEmptyValues } from "../../utils";

export const EditBasicDetails = () => {
  const [updatedDetails, setUpdatedDetails] = useState({});
  const userId = useSelector((state) => state.userDetails.id);
  const redirect = useSelector((state) => state.userDetails.redirect);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  if (redirect == true) {
    return <Navigate to={`/profile/${params.profileId}`} />;
  }

  const handleChange = (event) => {
    setUpdatedDetails((prev) => {
      return {
        ...prev,
        [event.target.name]: String(event.target.value).trim(),
      };
    });
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
        <Form onSubmit={handleClick}>
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
            <button type="submit">Update</button>
          </div>
        </Form>
      </FormContainer>
    </React.Fragment>
  );
};

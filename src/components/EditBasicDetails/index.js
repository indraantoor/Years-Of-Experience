import React, { useState } from "react";
import { FormContainer } from "./editBasicDetails.style";
import { useDispatch, useSelector } from "react-redux";
import {
  userDetailsSlice,
  updateUserDetailsToApi,
} from "../../store/userDetailsSlice";

export const EditBasicDetails = () => {
  const [updatedDetails, setUpdatedDetails] = useState({});
  const userId = useSelector((state) => state.userDetails.id);

  const dispatch = useDispatch();

  const handleChange = (event) => {
    setUpdatedDetails((prev) => {
      return { ...prev, [event.target.name]: event.target.value };
    });
  };

  const handleClick = (event) => {
    event.preventDefault();
    dispatch(userDetailsSlice.actions.update(updatedDetails));
    const details = {
      ...updatedDetails,
      userId: userId,
    };
    dispatch(updateUserDetailsToApi(details));
  };

  return (
    <React.Fragment>
      <FormContainer>
        <form onSubmit={handleClick}>
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
              onChange={handleChange}
            />
          </label>
          <label htmlFor="age">
            Age
            <input
              type="number"
              id="age"
              min="0"
              max="100"
              placeholder="Age"
              name="age"
              onChange={handleChange}
            />
          </label>
          <div className="submitBtnContainer">
            <button type="submit">Update</button>
          </div>
        </form>
      </FormContainer>
    </React.Fragment>
  );
};

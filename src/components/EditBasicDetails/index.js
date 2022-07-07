import React from "react";
import { FormContainer } from "./editBasicDetails.style";

export const EditBasicDetails = () => {
  return (
    <React.Fragment>
      <h3>Basic Details</h3>
      <FormContainer>
        <label htmlFor="name">
          Name:
          <input type="text" id="name" placeholder="Name" />
        </label>
        <label htmlFor="username">
          Username:
          <input type="text" id="username" placeholder="Username" />
        </label>
        <label htmlFor="age">
          Age:
          <input type="number" id="age" min="0" max="100" placeholder="Age" />
        </label>
        <button>Update</button>
      </FormContainer>
    </React.Fragment>
  );
};

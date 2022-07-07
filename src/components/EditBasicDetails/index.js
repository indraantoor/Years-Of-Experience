import React from "react";
import { FormContainer } from "./editBasicDetails.style";

export const EditBasicDetails = () => {
  return (
    <React.Fragment>
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
        <button type="submit">Update</button>
      </FormContainer>
    </React.Fragment>
  );
};

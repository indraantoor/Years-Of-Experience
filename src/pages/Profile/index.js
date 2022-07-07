import React from "react";

export const Profile = () => {
  return (
    <React.Fragment>
      <h2>Profile</h2>

      <div>
        <h3>Basic Details</h3>
        <div>Name: Indraan</div>
        <div>Profile Pic: default</div>
        <div>Age: 20</div>
      </div>

      <div>
        <h3>Work Experiences</h3>
        <div>Job title: Intern</div>
        <div>Start Date: June 2014 End Date: March 2017</div>
        <div>Xyz Company</div>
        <div>
          <div>Company Logo: logo</div>
          Job Description: Build a simple editable profile page that represents
          a candidate's basic information and work experience. Minimally, the
          following information is required to be editable and presented.
        </div>
      </div>
    </React.Fragment>
  );
};

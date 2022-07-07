import styled from "styled-components";

export const Container = styled.div`
  // display: flex;
  // flex-direction: column;
  // justify-content: center;
  // align-items: center;
`;

export const BasicDetailsContainer = styled.div`
  background-color: var(--primary);
  width: 32rem;
  margin: 2%;
  max-width: 750px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  padding: 1.3rem;
  color: var(--primary-white);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  overflow: hidden;

  h3 {
    font-size: 2.1rem;
    margin: 0 0 10px 0;
    padding: 0;
  }

  .details-wrapper {
    // background-color: green;
    margin-left: 5%;

    div {
      margin-bottom: 10px;
    }
  }

  #username {
    color: var(--secondary);
    cursor: pointer;
  }
`;

export const ProfilePictureContainer = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid var(--secondary);
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  img {
    width: 100%;
    cursor: pointer;
  }
`;

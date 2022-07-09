import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--primary);
  color: var(--primary-white);
  padding: 1.3rem;
  border-radius: 1rem;
  display: flex;
  gap: 25px;

  h4 {
    margin: 0 0 3px 0;
    padding: 0;
  }

  .isWorking {
    color: #ff9f1c;
    font-weight: 300;
  }

  #company {
    font-weight: 600;
    color: var(--secondary);
  }

  #duration {
    margin-bottom: 3px;
  }

  .description-container {
    margin-top: 15px;
  }

  #description {
    margin-top: 3px;
  }
`;

export const CompanyLogoContainer = styled.div`
  width: 60px;
  height: 60px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  margin-left: 1%;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

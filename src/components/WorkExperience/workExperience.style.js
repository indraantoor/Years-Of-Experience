import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--primary);
  color: var(--primary-white);
  padding: 1.3rem;
  border-radius: 1rem;
  display: grid;
  grid-template-columns: 10% 90%;
  gap: 2%;

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
    font-weight: 600;
  }

  #description {
    margin-top: 3px;
  }

  #description {
    padding: 0 3rem 1rem 0;
    line-height: 1.5;
    font-weight: 300;
    letter-spacing: 0.4px;
  }

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;

    #description {
      padding: 0 0rem 1rem 0;
      text-align: left;
      line-height: 1.5;
      font-weight: 300;
    }

    p {
      font-size: 0.9rem;
      letter-spacing: 1.5px;
    }
  }
`;

export const CompanyLogoContainer = styled.div`
  width: 70px;
  height: 70px;
  overflow: hidden;
  border: 3px solid white;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  @media screen and (max-width: 800px) {
    height: 80px;
    width: 80px;
    margin-bottom: 20px;
  }
`;

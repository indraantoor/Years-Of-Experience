import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const DetailsWrapper = styled.div`
  width: 50rem;
  padding: 40px;
  margin: 2%;
  background-color: var(--primary-white);
  box-shadow: 0 0 8px #ebeded;
  border-radius: 8px;

  button {
    margin-top: 20px;
    width: 100px;
    padding: 8px;
    cursor: pointer;
    background-color: var(--primary-white);
    color: var(--primary);
    border: 1px solid var(--secondary);
    border-radius: 5px;
  }

  button:hover {
    background-color: var(--secondary);
    color: var(--primary);
  }
`;

export const DetailsContainer = styled.div`
  display: flex;
  gap: 3rem;
  align-items: center;
`;

export const Wrapper = styled.div`
  div {
    margin-bottom: 15px;
  }

  span {
    font-weight: 600;
    display: block;
    margin-bottom: 2px;
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

export const ProfilePictureContainer = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 8px;
  overflow: hidden;
  // border: 3px solid var(--secondary);
  // box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  img {
    width: 100%;
    cursor: pointer;
  }
`;

export const EditWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;

  h2 {
    margin: 0;
    padding: 0;
  }
`;

import styled from "styled-components";

export const Container = styled.div``;

export const FormContainer = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 2%;
  width: 40rem;
  background-color: var(--primary-white);
  box-shadow: 0 0 8px #ebeded;
  border-radius: 8px;

  button {
    width: 7rem;
    padding: 10px;
    cursor: pointer;
    background-color: var(--secondary);
    color: var(--primary);
    border: none;
    border-radius: 5px;
    margin-top: 25px;
    margin-right: 20px;
  }

  #removebtn {
    margin-top: 20px;
    width: 100px;
    padding: 10px;
    cursor: pointer;
    background-color: var(--primary-white);
    color: var(--primary);
    border: 1px solid var(--primary-accent);
    border-radius: 5px;
  }

  #removebtn:hover {
    background-color: var(--primary-accent);
  }

  label {
    margin-top: 10px;
    font-weight: 500;
    width: 100%;
  }

  input,
  textarea {
    display: block;
    margin-top: 7px;
    padding: 10px;
  }

  textarea {
    resize: vertical;
    max-height: 200px;
    min-height: 100px;
  }

  #dates {
    margin-top: 5px;
    display: flex;
    width: 25rem;
    gap: 1rem;
    justify-content: space-between;
  }

  #currentlyworking {
    display: inline-block;
    margin: 10px;
  }

  #companyLogo {
    display: inline-block;
  }

  #title,
  #companyName,
  #jobDescription {
    width: 96%;
  }
`;

import styled from "styled-components";

export const FormContainer = styled.div`
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: var(--primary-white);
  box-shadow: 0 0 8px #ebeded;
  border-radius: 8px;
`;

export const Form = styled.form`
  button {
    width: 7rem;
    padding: 10px;
    cursor: pointer;
    background-color: var(--secondary);
    color: var(--primary);
    border: none;
    border-radius: 5px;
  }

  button:disabled {
    background-color: red;
  }

  label {
    font-weight: 500;
  }

  .submitBtnContainer {
    display: flex;
    justify-content: center;
  }

  input {
    display: block;
    margin-top: 7px;
    margin-bottom: 15px;
    padding: 10px;
  }
`;

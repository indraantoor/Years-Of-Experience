import styled from "styled-components";

export const FormContainer = styled.div`
  border: 1px solid black;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 2%;

  button {
    width: 7rem;
    padding: 7px;
    cursor: pointer;
    background-color: var(--secondary);
    color: var(--primary);
    border: none;
    border-radius: 5px;
  }

  label,
  button {
    margin-top: 15px;
  }

  input {
    display: block;
    margin-top: 7px;
  }
`;

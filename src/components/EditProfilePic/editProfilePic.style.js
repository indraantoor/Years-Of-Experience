import styled from "styled-components";

export const Container = styled.div`
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 2%;
  background-color: var(--primary-white);
  box-shadow: 0 0 8px #ebeded;
  border-radius: 8px;

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

  .image-container {
    background-color: red;
    height: 100px;
    width: 100px;
  }
`;

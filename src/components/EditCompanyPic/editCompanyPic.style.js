import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
  border-radius: 8px;
  background-color: var(--primary-white);
  border: 1px solid #ebeded;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;

    label {
      font-weight: 500;
    }

    input {
      display: block;
      margin-top: 0px;
    }

    button {
      width: 7rem;
      padding: 10px;
      cursor: pointer;
      background-color: var(--secondary);
      color: var(--primary);
      border: none;
      border-radius: 5px;
      margin: 8px 0 0 0;
    }
  }

  .image-container {
    height: 150px;
    width: 150px;
    overflow: hidden;
    margin-bottom: 10px;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
`;

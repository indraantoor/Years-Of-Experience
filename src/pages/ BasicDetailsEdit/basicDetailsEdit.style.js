import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .cancel {
    width: 100px;
    padding: 10px;
    cursor: pointer;
    margin-top: 2%;
    background-color: var(--primary-white);
    color: var(--primary);
    border: 1px solid var(--secondary-accent);
    border-radius: 5px;
  }

  .cancel:hover {
    background-color: var(--secondary-accent);
    color: var(--primary-white);
  }
`;

export const EditBasicDetailsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2%;
`;

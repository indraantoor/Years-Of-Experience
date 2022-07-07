import styled from "styled-components";

export const Container = styled.div`
  margin: 2%;
  background-color: var(--primary);
  color: var(--primary-white);
  padding: 1.3rem;
  border-radius: 1rem;

  h4 {
    margin: 0;
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
`;

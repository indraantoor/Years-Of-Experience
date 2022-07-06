import styled from "styled-components";

export const FooterContainer = styled.footer`
  text-align: center;
  background-color: var(--primary);
  color: var(--primary-white);

  h2 {
    padding: 0;
    margin: 0;
  }

  ul {
    list-style-type: none;
    padding: 0.7rem 0 0 0;
    margin: 2rem 0;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    font-size: 83%;
  }

  a {
    color: var(--primary-white);
    text-decoration: none;
    display: block;
  }

  a:hover {
    color: var(--secondary);
  }

  @media screen and (min-width: 850px) {
    ul {
      max-width: 1200px;
      margin: 0 auto;
    }

    li:first-child {
      flex-basis: auto;
      text-align: left;
      margin-right: auto;
    }
  }
`;

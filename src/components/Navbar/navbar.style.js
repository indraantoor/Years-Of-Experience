import styled from "styled-components";

export const NavbarContainer = styled.nav`
  background-color: var(--primary);
  padding: 1rem;
  font-size: 85%;

  h1 {
    padding: 0;
    margin: 0;
  }

  #logo-title:hover {
    color: white;
  }

  ul {
    margin: 0;
    list-style-type: none;
    padding: 0;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }

  a {
    color: var(--primary-white);
    text-decoration: none;
    display: block;
  }

  a:hover,
  button.outline-button:hover,
  button:hover {
    color: #8da9c4;
  }

  li:first-child {
    flex-basis: 100%;
    text-align: center;
  }

  button {
    border: none;
    background-color: transparent;
    color: var(--primary-white);
  }

  button:hover {
    cursor: pointer;
  }

  button.outline-button {
    border: 1px solid var(--primary-white);
    padding: 8px 12px 8px 12px;
    border-radius: 4px;
  }

  button.outline-button:hover {
    border: 1px solid #8da9c4;
    color: white;
  }
`;

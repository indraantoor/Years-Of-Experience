import styled from "styled-components";

export const NavbarContainer = styled.nav`
  background-color: var(--primary);
  padding: 1rem;
  font-size: 80%;

  h1 {
    padding: 0;
    margin: 0;
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

  a:hover {
    color: var(--secondary-accent);
  }

  li:first-child {
    flex-basis: 100%;
    text-align: center;
  }
`;

import styled from "styled-components";

export const StyledNavigation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;

  nav {
    display: flex;
    flex-direction: column;
    gap: 10px;

    a {
      text-decoration: none;
      color: black;
      font-weight: 600;
      font-size: 1.3rem;
    }

    .active {
      background-color: #3a4d39;
      color: #ffff;
    }
  }
`;

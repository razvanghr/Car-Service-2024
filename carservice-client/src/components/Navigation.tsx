import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

const StyledNavigation = styled.nav`
  background-color: "black";
`;

const Navigation = () => {
  return (
    <StyledNavigation>
      <Link to="/">Dashboard</Link>
      <Link to="/customers">Customers</Link>
      <Link to="/cars">Cars</Link>
    </StyledNavigation>
  );
};

export default Navigation;

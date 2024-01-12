import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { Link, useLocation } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { FaUsers, FaCarSide } from "react-icons/fa";

const StyledNavigation = styled.div`
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

const Navigation = () => {
  const location = useLocation();
  const [url, setUrl] = useState<string | null>(null);

  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);
  return (
    <StyledNavigation>
      <div className="navigation-profile">
        <h1>Administrator</h1>
        <p>Profile</p>
      </div>
      <nav>
        <Link to="/" className={url === "/" ? " active" : ""}>
          <MdDashboard /> Dashboard
        </Link>
        <Link to="/clients" className={url === "/clients" ? " active" : ""}>
          <FaUsers /> Add Client
        </Link>
        <Link to="/cars" className={url === "/cars" ? " active" : ""}>
          <FaCarSide /> Cars
        </Link>
      </nav>
    </StyledNavigation>
  );
};

export default Navigation;

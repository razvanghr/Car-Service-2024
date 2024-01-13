import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { FaUsers, FaCarSide } from "react-icons/fa";

import { StyledNavigation } from "../styles/Navigation.styled";

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
        <Link
          to="/search-client"
          className={url === "/search-client" ? " active" : ""}
        >
          <FaCarSide /> Search Client
        </Link>
      </nav>
    </StyledNavigation>
  );
};

export default Navigation;

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Indicator from "../components/Indicator";

import { TApiResponse } from "../types/TAllResponse";
import ClientsContainer from "../components/ClientsContainer";

const StyledDashboard = styled.div`
  width: 100%;
  padding: 20px;

  display: flex;
  flex-direction: column;
  gap: 50px;

  .dashboard-header {
    display: flex;
    width: 100%;
    justify-content: space-around;
  }
`;

const Dashboard = () => {
  const [apiData, setApiData] = useState<TApiResponse | null>(null);
  const getApiResponse = async () => {
    try {
      const URL = "http://localhost:8080/api/v1/client/all";
      const response = await fetch(URL, {
        method: "GET",
      });

      const data = await response.json();
      setApiData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getApiResponse();
  }, []);
  return (
    <StyledDashboard>
      <div className="dashboard-header">
        <Indicator
          indicatorNumber={apiData?.clientsNumber || 0}
          indicatorTitle="Total Clients"
        />
        <Indicator
          indicatorNumber={apiData?.clientsNumber || 0}
          indicatorTitle="Total Cars"
        />
      </div>
      <ClientsContainer clientsList={apiData?.clients}></ClientsContainer>
    </StyledDashboard>
  );
};

export default Dashboard;

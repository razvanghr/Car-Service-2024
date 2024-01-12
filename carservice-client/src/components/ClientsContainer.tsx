import React from "react";

import Client from "./Client";

import { TClient } from "../types/TClient";
import styled from "styled-components";
type TClientsContainerProps = {
  clientsList: TClient[] | undefined;
};

const ClientsContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

const ClientsContainer = ({ clientsList }: TClientsContainerProps) => {
  return (
    <ClientsContainerStyled>
      {clientsList?.map((client, index) => {
        return <Client key={client.id} client={client} />;
      })}
    </ClientsContainerStyled>
  );
};

export default ClientsContainer;

import React from "react";
import Client from "./Client";
import { TClient } from "../types/TClient";
import { ClientsContainerStyled } from "../styles/ClientContainer.styled";

type TClientsContainerProps = {
  clientsList: TClient[] | undefined;
};

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

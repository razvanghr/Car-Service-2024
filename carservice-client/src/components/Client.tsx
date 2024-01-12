import React from "react";
import { TClient } from "../types/TClient";
import Cars from "./Cars";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";

type TClientProps = {
  client: TClient;
};

const ClientStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
  border-bottom: 1px solid #a8a7a7;

  .client-info {
    display: flex;
    gap: 10px;
    align-items: center;
  }
`;

const Client = ({ client }: TClientProps) => {
  return (
    <ClientStyled key={client.id}>
      <div className="client-info">
        <p>{client.id}</p>
        <p>{client.firstName}</p>
        <p>{client.lastName}</p>
        <Link to={`/client/${client.id}`}>
          <FaEye />
        </Link>
      </div>
      <Cars cars={client.cars} />
    </ClientStyled>
  );
};

export default Client;

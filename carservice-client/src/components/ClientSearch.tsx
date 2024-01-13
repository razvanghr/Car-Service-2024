import React from "react";

import { TClient } from "../types/TClient";

import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";

import { ClientSearchStyled } from "../styles/ClientSearch.styled";

type TClientSearchProps = {
  client: TClient;
};

const ClientSearch = ({ client }: TClientSearchProps) => {
  return (
    <ClientSearchStyled>
      <p>{client.id}</p>
      <p>{client.firstName}</p>
      <p>{client.lastName}</p>
      <Link to={`/client/${client.id}`}>
        <FaEye />
      </Link>
    </ClientSearchStyled>
  );
};

export default ClientSearch;

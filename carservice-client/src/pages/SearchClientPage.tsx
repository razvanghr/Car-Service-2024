import React, { useState } from "react";

import { FormStyled } from "../styles/Form.styled";
import { StyledButton } from "../styles/Button.styled";
import { TClient } from "../types/TClient";

import ClientSearch from "../components/ClientSearch";

type TSearchClient = {
  firstName: string;
  lastName: string;
};

const SearchClientPage = () => {
  const [searchClient, setSearchClient] = useState<TSearchClient | null>(null);
  const [responseStatus, setResponseStatus] = useState<string | null>(null);
  const [client, setClient] = useState<TClient | null>(null);

  const searchClientRequest = async (e: any) => {
    e.preventDefault();

    if (!searchClient?.firstName) {
      setResponseStatus("First Name is required");
      return;
    }

    if (!searchClient.lastName) {
      setResponseStatus("Last Name is required");
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:8080/api/v1/client/findByName?firstName=${searchClient?.firstName}&lastName=${searchClient?.lastName}`,
        {
          method: "GET",
        }
      );

      const data = await response.json();

      setClient(data);
    } catch (error) {
      console.log(error);
      setResponseStatus("User with this name not found");
    }
  };

  return (
    <FormStyled>
      <div className="form-control">
        <label>First Name</label>
        <input
          type="text"
          value={searchClient?.firstName}
          onChange={(e) =>
            setSearchClient({
              ...searchClient,
              firstName: e.target.value,
            } as TSearchClient)
          }
        />
      </div>
      <div className="form-control">
        <label>Last Name</label>
        <input
          type="text"
          value={searchClient?.lastName}
          onChange={(e) =>
            setSearchClient({
              ...searchClient,
              lastName: e.target.value,
            } as TSearchClient)
          }
        />
      </div>
      <StyledButton onClick={searchClientRequest}>Search Client</StyledButton>
      <p>{responseStatus}</p>
      {client && <ClientSearch client={client}></ClientSearch>}
    </FormStyled>
  );
};

export default SearchClientPage;

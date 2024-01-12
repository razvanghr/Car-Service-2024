import React, { useState } from "react";

import { AddCarStyled } from "../components/AddCar";
import { StyledButton } from "../components/AddCar";
type TAddClient = {
  firstName: string;
  lastName: string;
};

const AddClientPage = () => {
  const [addClient, setAddClient] = useState<TAddClient | null>(null);
  const [responseStatus, setResponseStatus] = useState<string | null>(null);

  const addClientRequest = async (e: any) => {
    e.preventDefault();

    if (!addClient?.firstName) {
      setResponseStatus("First Name is required");
      return;
    }

    if (!addClient.lastName) {
      setResponseStatus("Last Name is required");
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/api/v1/client/add", {
        method: "POST",
        body: JSON.stringify({
          firstName: addClient?.firstName,
          lastName: addClient?.lastName,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      setResponseStatus("Client added");
    } catch (error) {
      console.log(error);
      setResponseStatus("");
    }
  };
  return (
    <AddCarStyled>
      <div className="form-control">
        <label>First Name</label>
        <input
          type="text"
          value={addClient?.firstName}
          onChange={(e) =>
            setAddClient({
              ...addClient,
              firstName: e.target.value,
            } as TAddClient)
          }
        />
      </div>
      <div className="form-control">
        <label>Last Name</label>
        <input
          type="text"
          value={addClient?.lastName}
          onChange={(e) =>
            setAddClient({
              ...addClient,
              lastName: e.target.value,
            } as TAddClient)
          }
        />
      </div>
      <StyledButton onClick={addClientRequest}>Add Client</StyledButton>
      <p>{responseStatus}</p>
    </AddCarStyled>
  );
};

export default AddClientPage;

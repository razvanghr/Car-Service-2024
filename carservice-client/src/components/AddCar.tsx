import React from "react";

import { useState } from "react";
import styled from "styled-components";

export const AddCarStyled = styled.form`
  margin: 20px 0px;
  display: flex;
  flex-direction: column;
  width: 90%;
  align-items: center;
  gap: 10px;

  input {
    font-size: 1.1rem;
    outline: 0;
    border-radius: 10px;
    border: 2px solid #3a4d39;
    text-align: center;
  }

  .form-control {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledButton = styled.button`
  background-color: #3a4d39;
  border: 0;
  color: #ffff;
  font-size: 1rem;
  text-transform: uppercase;
  border-radius: 5px;
  padding: 5px;
`;

type TAddCarBody = {
  manufacture: string;
  model: string;
  odometer: number;
};

type TAddCarProps = {
  getClientData: () => Promise<void>;
  id: string;
};

const AddCar = ({ getClientData, id }: TAddCarProps) => {
  const [addCarData, setAddCarData] = useState<TAddCarBody | null>(null);
  const [responseStatus, setResponseStatus] = useState<string | null>(null);

  const addCarRequest = async (e: any) => {
    e.preventDefault();

    if (!addCarData?.manufacture) {
      setResponseStatus("Manufacture is mandatory");
      return;
    }

    if (!addCarData.model) {
      setResponseStatus("Model is mandatory");
      return;
    }

    if (!addCarData.odometer) {
      setResponseStatus("Odometer is mandatory");
      return;
    }
    try {
      await fetch(`http://localhost:8080/api/v1/car/add/${id}`, {
        method: "POST",
        body: JSON.stringify({
          manufacture: addCarData?.manufacture,
          model: addCarData?.model,
          odometer: addCarData?.odometer,
          isRepaired: false,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      getClientData();
      setResponseStatus("");
    } catch (error) {
      console.log(error);
      setResponseStatus("");
    }
  };
  return (
    <AddCarStyled>
      <div className="form-control">
        <label>Manufacture</label>
        <input
          type="text"
          value={addCarData?.manufacture}
          onChange={(e) =>
            setAddCarData({
              ...addCarData,
              manufacture: e.target.value,
            } as TAddCarBody)
          }
        />
      </div>
      <div className="form-control">
        <label>Model</label>
        <input
          type="text"
          value={addCarData?.model}
          onChange={(e) =>
            setAddCarData({
              ...addCarData,
              model: e.target.value,
            } as TAddCarBody)
          }
        />
      </div>
      <div className="form-control">
        <label>Odometer</label>
        <input
          type="number"
          min={0}
          value={addCarData?.odometer}
          onChange={(e) =>
            setAddCarData({
              ...addCarData,
              odometer: Number(e.target.value),
            } as TAddCarBody)
          }
        />
      </div>
      <StyledButton onClick={addCarRequest}>Add Car</StyledButton>
      <p>{responseStatus}</p>
    </AddCarStyled>
  );
};

export default AddCar;

import React from "react";

import { useState } from "react";

import { FormStyled } from "../styles/Form.styled";
import { StyledButton } from "../styles/Button.styled";

type TAddCarBody = {
  manufacture: string;
  model: string;
  odometer: number;
  caroserie: string;
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
          caroserie: addCarData?.caroserie,
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
    <FormStyled>
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
      <div className="form-control">
        <label>Car Body</label>
        <select
          onChange={(e) =>
            setAddCarData({
              ...addCarData,
              caroserie: e.target.value,
            } as TAddCarBody)
          }
        >
          <option value="default"></option>
          <option value="Sedan">Sedan</option>
          <option value="Pickup">Pickup</option>
          <option value="Coupe">Coupe</option>
          <option value="Hatchback">Hatchback</option>
          <option value="Minivan">Minivan</option>
          <option value="Liftback">Liftback</option>
        </select>
      </div>
      <StyledButton onClick={addCarRequest}>Add Car</StyledButton>
      <p>{responseStatus}</p>
    </FormStyled>
  );
};

export default AddCar;

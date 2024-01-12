import React from "react";

import { useState } from "react";

import { AddCarStyled } from "./AddCar";
import { StyledButton } from "./AddCar";

type TUpdateDataProps = {
  getClientData: () => Promise<void>;
};

type TUpdateCarBody = {
  carId: string;
  manufacture: string;
  model: string;
  odometer: number;
};

const UpdateCar = ({ getClientData }: TUpdateDataProps) => {
  const [updateData, setUpdateData] = useState<TUpdateCarBody | null>(null);
  const [responseStatus, setResponseStatus] = useState<string | null>(null);

  const updateCarRequest = async (e: any) => {
    e.preventDefault();

    if (!updateData?.carId) {
      setResponseStatus("Id is mandatory");
      return;
    }

    if (!updateData?.manufacture) {
      setResponseStatus("Manufacture is mandatory");
      return;
    }

    if (!updateData.model) {
      setResponseStatus("Model is mandatory");
      return;
    }

    if (!updateData.odometer) {
      setResponseStatus("Odometer is mandatory");
      return;
    }
    try {
      await fetch(
        `http://localhost:8080/api/v1/car/update/${updateData?.carId}`,
        {
          method: "PUT",
          body: JSON.stringify({
            manufacture: updateData?.manufacture,
            model: updateData?.model,
            odometer: updateData?.odometer,
            isRepaired: false,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setResponseStatus("");
      getClientData();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <AddCarStyled>
      <div className="form-control">
        <div className="form-control">
          <label>Id</label>
          <input
            type="text"
            value={updateData?.carId}
            onChange={(e) =>
              setUpdateData({
                ...updateData,
                carId: e.target.value,
              } as TUpdateCarBody)
            }
          />
        </div>
        <label>Manufacture</label>
        <input
          type="text"
          value={updateData?.manufacture}
          onChange={(e) =>
            setUpdateData({
              ...updateData,
              manufacture: e.target.value,
            } as TUpdateCarBody)
          }
        />
      </div>
      <div className="form-control">
        <label>Model</label>
        <input
          type="text"
          value={updateData?.model}
          onChange={(e) =>
            setUpdateData({
              ...updateData,
              model: e.target.value,
            } as TUpdateCarBody)
          }
        />
      </div>
      <div className="form-control">
        <label>Odometer</label>
        <input
          type="number"
          min={0}
          value={updateData?.odometer}
          onChange={(e) => {
            setUpdateData({
              ...updateData,
              odometer: Number(e.target.value),
            } as TUpdateCarBody);
          }}
        />
      </div>
      <StyledButton onClick={updateCarRequest}>Update Car</StyledButton>
      <p>{responseStatus}</p>
    </AddCarStyled>
  );
};

export default UpdateCar;

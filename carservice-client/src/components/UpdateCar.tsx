import React from "react";

import { useState } from "react";

import { StyledButton } from "../styles/Button.styled";
import { FormStyled } from "../styles/Form.styled";

type TUpdateDataProps = {
  getClientData: () => Promise<void>;
};

type TUpdateCarBody = {
  carId: string;
  manufacture: string;
  model: string;
  odometer: number;
  caroserie: string;
  isRepaired: boolean;
};

const UpdateCar = ({ getClientData }: TUpdateDataProps) => {
  const [updateData, setUpdateData] = useState<TUpdateCarBody | null>(null);
  const [responseStatus, setResponseStatus] = useState<string | null>(null);
  const [isChecked, setIsChecked] = useState<boolean>(false);

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
            caroserie: updateData.caroserie,
            isRepaired: !isChecked,
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
    <FormStyled>
      <div className="form-control">
        <div className="form-control">
          <label>Id</label>
          <input
            type="text"
            value={updateData?.carId}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
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
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
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
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
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
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setUpdateData({
              ...updateData,
              odometer: Number(e.target.value),
            } as TUpdateCarBody);
          }}
        />
      </div>
      <div className="form-control">
        <label>Repaired</label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => {
            setIsChecked(!isChecked);
            console.log(!isChecked);
          }}
        />
      </div>
      <div className="form-control">
        <label>Car Body</label>
        <select
          onChange={(e) =>
            setUpdateData({
              ...updateData,
              caroserie: e.target.value,
            } as TUpdateCarBody)
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
      <StyledButton onClick={updateCarRequest}>Update Car</StyledButton>
      <p>{responseStatus}</p>
    </FormStyled>
  );
};

export default UpdateCar;

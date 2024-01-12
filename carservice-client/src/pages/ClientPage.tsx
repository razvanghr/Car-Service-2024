import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import styled from "styled-components";
import { TClientById } from "../types/TClient";
import { IoClose } from "react-icons/io5";
import { MdEdit } from "react-icons/md";

const ClientPageStyled = styled.div`
  width: 100%;

  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }

  td,
  th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }

  .td-actions {
    display: flex;
    width: 100%;
    justify-content: space-around;
  }

  form {
    input {
      font-size: 1.1rem;
      outline: 0;
      border-radius: 10px;
      text-align: center;
    }
  }

  .add-car-form {
    margin: 20px 0px;
    display: flex;
    flex-direction: column;
    width: 50%;
    align-items: start;
    gap: 10px;

    .form-control {
      width: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;

interface TAddCarBody {
  manufacture: string;
  model: string;
  odometer: number;
}

type TUpdateCarBody = {
  carId: string;
  manufacture: string;
  model: string;
  odometer: number;
};

const ClientPage = () => {
  const { id } = useParams<string>();

  const [clientApiData, setClientApiData] = useState<TClientById | null>(null);
  const [updateData, setUpdateData] = useState<TUpdateCarBody | null>(null);
  const [addCarData, setAddCarData] = useState<TAddCarBody | null>(null);

  const getClientData = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/v1/client/${id}`,
        {
          method: "GET",
        }
      );

      const data = await response.json();
      setClientApiData(data);

      console.log(clientApiData);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteCar = async (carId: number) => {
    try {
      const res = await fetch(
        `http://localhost:8080/api/v1/car/delete/${carId}`,
        {
          method: "delete",
        }
      );
      getClientData();
    } catch (error) {
      console.log(error);
    }
  };

  const addCarRequest = async (e: any) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:8080/api/v1/car/add/${id}`, {
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
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getClientData();
  }, []);
  console.log(id);
  return (
    <ClientPageStyled>
      {clientApiData ? (
        <>
          <div>
            <p>Client - ID: {clientApiData.client.id}</p>
            <p>First Name : {clientApiData.client.firstName}</p>
            <p>Last Name : {clientApiData.client.lastName}</p>
          </div>
          <form className="add-car-form">
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
            <button onClick={addCarRequest}>Add Car</button>
          </form>
          <div>
            {clientApiData.carsNumber !== 0 && <button>Update Car</button>}
          </div>
          {clientApiData.client.cars.length > 0 ? (
            <table style={{ width: "100%" }}>
              <thead>
                <tr>
                  <th>Car-Id</th>
                  <th>Manufacture</th>
                  <th>Model</th>
                  <th>Body</th>
                  <th>Odometer</th>
                  <th>Repaired</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {clientApiData.client.cars.map((car) => (
                  <tr key={car.id}>
                    <td>{car.id}</td>
                    <td>{car.manufacture}</td>
                    <td>{car.model}</td>
                    <td>{car.caroserie}</td>
                    <td>{car.odometer}Km</td>
                    <td>{car.repaired ? "True" : "False"}</td>
                    <td className="td-actions">
                      <IoClose
                        onClick={() => {
                          deleteCar(car.id);
                        }}
                      />
                      <MdEdit />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No cars found for this client.</p>
          )}
        </>
      ) : (
        <h1>Not Found</h1>
      )}
    </ClientPageStyled>
  );
};

export default ClientPage;

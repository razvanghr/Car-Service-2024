import { useEffect, useState } from "react";

import { useParams, useNavigate } from "react-router-dom";
import { TClientById } from "../types/TClient";
import { IoClose } from "react-icons/io5";
import AddCar from "../components/AddCar";
import UpdateCar from "../components/UpdateCar";
import { StyledButton } from "../styles/Button.styled";

import { ClientPageStyled } from "../styles/ClientPage.styled";

const ClientPage = () => {
  const { id } = useParams<string>();
  const navigate = useNavigate();
  const [clientApiData, setClientApiData] = useState<TClientById | null>(null);

  const deleteClientRequest = async () => {
    try {
      await fetch(`http://localhost:8080/api/v1/client/delete/${id}`, {
        method: "DELETE",
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

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
      await fetch(`http://localhost:8080/api/v1/car/delete/${carId}`, {
        method: "delete",
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
            <p>Number of cars : {clientApiData.carsNumber}</p>
            {clientApiData.carsNumber === 0 && (
              <StyledButton onClick={deleteClientRequest}>
                Delete Client
              </StyledButton>
            )}
          </div>
          <div className="form-container">
            <AddCar getClientData={getClientData} id={id || ""} />
            <UpdateCar getClientData={getClientData} />
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
                  <th>Action</th>
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

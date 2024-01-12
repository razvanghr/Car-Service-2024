import React from "react";
import { TCar } from "../types/TCar";
import styled from "styled-components";

type TCarsProps = {
  cars: TCar[];
};

const StyledCarsList = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledCarCard = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-left: 20px;

  p {
    width: 20%;
  }
`;
const Cars = ({ cars }: TCarsProps) => {
  return (
    <StyledCarsList>
      <p>Cars:</p>
      {cars.map((car) => {
        return (
          <StyledCarCard key={car.id}>
            <p>{car.manufacture}</p>
            <p>{car.model}</p>
            <p>{car.odometer}</p>
            <p>{car.caroserie}</p>
            {car.repaired ? <p>Repaired</p> : <p>Damaged</p>}
          </StyledCarCard>
        );
      })}
    </StyledCarsList>
  );
};

export default Cars;

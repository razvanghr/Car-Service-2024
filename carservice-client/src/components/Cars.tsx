import React from "react";
import { TCar } from "../types/TCar";
import { StyledCarsList } from "../styles/CarList.styled";
import { StyledCarCard } from "../styles/CarCard.styled";

type TCarsProps = {
  cars: TCar[];
};

const Cars = ({ cars }: TCarsProps) => {
  return (
    <StyledCarsList>
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

import { TCar } from "./TCar";

export type TClient = {
  id: number;
  firstName: string;
  lastName: string;
  cars: TCar[];
};

export type TClientById = {
  client: TClient;
  carsNumber: number;
};

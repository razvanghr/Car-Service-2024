import { TClient } from "./TClient";

export type TApiResponse = {
  clients: TClient[];
  clientsNumber: number;
  carNumbers: number;
};

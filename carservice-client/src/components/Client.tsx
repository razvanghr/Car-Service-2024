import { TClient } from "../types/TClient";
import Cars from "./Cars";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { ClientStyled } from "../styles/Client.styled";
type TClientProps = {
  client: TClient;
};

const Client = ({ client }: TClientProps) => {
  return (
    <ClientStyled key={client.id}>
      <div className="client-info">
        <p>{client.id}</p>
        <p>{client.firstName}</p>
        <p>{client.lastName}</p>
        <Link to={`/client/${client.id}`}>
          <FaEye />
        </Link>
      </div>
      <Cars cars={client.cars} />
    </ClientStyled>
  );
};

export default Client;

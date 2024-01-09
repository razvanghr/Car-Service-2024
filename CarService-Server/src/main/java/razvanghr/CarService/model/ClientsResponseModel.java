package razvanghr.CarService.model;

import java.util.List;

public class ClientsResponseModel {

    private List<Client> clients;
    private int clientsNumber;


    public ClientsResponseModel(List<Client> clients, int clientsNumber) {
        this.clients = clients;
        this.clientsNumber = clientsNumber;
    }

    public List<Client> getClients() {
        return clients;
    }

    public void setClients(List<Client> clients) {
        this.clients = clients;
    }

    public int getClientsNumber() {
        return clientsNumber;
    }

    public void setClientsNumber(int clientsNumber) {
        this.clientsNumber = clientsNumber;
    }
}

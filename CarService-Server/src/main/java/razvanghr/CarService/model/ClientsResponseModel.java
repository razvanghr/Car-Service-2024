package razvanghr.CarService.model;

import java.util.List;

public class ClientsResponseModel {

    private List<Client> clients;
    private int clientsNumber;
    private int carNumbers;


    public ClientsResponseModel(List<Client> clients, int clientsNumber , int carNumbers) {
        this.clients = clients;
        this.clientsNumber = clientsNumber;
        this.carNumbers = carNumbers;
    }

    public int getCarNumbers() {
        return carNumbers;
    }

    public void setCarNumbers(int carNumbers) {
        this.carNumbers = carNumbers;
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

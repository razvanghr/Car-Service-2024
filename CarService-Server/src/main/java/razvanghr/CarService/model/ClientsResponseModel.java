package razvanghr.CarService.model;

import lombok.Data;

import java.util.List;


@Data
public class ClientsResponseModel {

    private List<Client> clients;
    private int clientsNumber;
    private int carNumbers;


    public ClientsResponseModel(List<Client> clients, int clientsNumber , int carNumbers) {
        this.clients = clients;
        this.clientsNumber = clientsNumber;
        this.carNumbers = carNumbers;
    }

}

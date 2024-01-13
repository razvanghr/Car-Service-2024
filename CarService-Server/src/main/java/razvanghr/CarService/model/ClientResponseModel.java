package razvanghr.CarService.model;

import lombok.Data;

@Data
public class ClientResponseModel {

    private Client client;
    private int carsNumber;

    public ClientResponseModel(Client client, int carsNumber) {
        this.client = client;
        this.carsNumber = carsNumber;
    }
}

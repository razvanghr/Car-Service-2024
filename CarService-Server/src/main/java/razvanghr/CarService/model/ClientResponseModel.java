package razvanghr.CarService.model;

public class ClientResponseModel {

    private Client client;
    private int carsNumber;

    public ClientResponseModel(Client client, int carsNumber) {
        this.client = client;
        this.carsNumber = carsNumber;
    }

    public Client getClient() {
        return client;
    }

    public void setClient(Client client) {
        this.client = client;
    }

    public int getCarsNumber() {
        return carsNumber;
    }

    public void setCarsNumber(int carsNumber) {
        this.carsNumber = carsNumber;
    }
}

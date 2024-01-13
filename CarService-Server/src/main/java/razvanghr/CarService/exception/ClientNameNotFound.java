package razvanghr.CarService.exception;

public class ClientNameNotFound extends Exception {

    public ClientNameNotFound(){
        super("Client with this name not found");
    }
}

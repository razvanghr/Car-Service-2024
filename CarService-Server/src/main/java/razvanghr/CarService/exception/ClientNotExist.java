package razvanghr.CarService.exception;

public class ClientNotExist extends Exception{

    public ClientNotExist(){
        super("Client with this id does not exist");
    }
}
